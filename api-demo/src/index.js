import path from "path";
import express from "express";
import { v4 as uuid } from "uuid";
import { z } from "zod";
import { fileURLToPath } from "url";

const PORT = 5000;

const ItemSchema = z.object({
  name: z.string().min(1),
});

let items = [{ id: uuid(), name: "Mow the lawn" }];

const app = express();

app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), "public")
  )
);

app.use(express.json());

app.get("/api/items", (req, res) => {
  res.send(items);
});

app.post("/api/items", (req, res) => {
  const modelResult = ItemSchema.safeParse(req.body);

  if (!modelResult.success) {
    return res.status(400).send(modelResult.error);
  }

  const item = { ...modelResult.data, id: uuid() };

  items.push(item);

  res.status(201).send(item);
});

app.delete("/api/items/:id", (req, res) => {
  items = items.filter(({ id }) => id !== req.params.id);

  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
