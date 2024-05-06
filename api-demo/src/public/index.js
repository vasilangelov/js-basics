const inputElement = document.getElementById("input");
const addButtonElement = document.getElementById("button-add");
const listElement = document.getElementById("list");

const createListItem = ({ id, name }) => {
  const listItemElement = document.createElement("div");
  listItemElement.className = "list-item";

  const deleteButtonElement = document.createElement("button");
  deleteButtonElement.className = "button button--small button--danger";

  const deleteIconElement = document.createElement("i");
  deleteIconElement.className = "fa-solid fa-trash-can";

  deleteButtonElement.appendChild(deleteIconElement);

  listItemElement.appendChild(deleteButtonElement);

  const textElement = document.createElement("p");
  textElement.textContent = name;

  listItemElement.appendChild(textElement);

  deleteButtonElement.addEventListener("click", () => {
    fetch(`/api/items/${id}`, { method: "DELETE" })
      .then(() => {
        loadItems();
      })
      .catch(() => {
        alert("Item failed to be deleted");
      });
  });

  return listItemElement;
};

const loadItems = () => {
  fetch("/api/items")
    .then((res) => res.json())
    .then((items) => {
      listElement.innerHTML = "";

      items.forEach((item) => {
        listElement.appendChild(createListItem(item));
      });
    })
    .catch(() => {
      alert("An error has occurred while loading the items.");
    });
};

loadItems();

addButtonElement.addEventListener("click", async () => {
  const name = inputElement.value;

  if (name.length === 0) {
    alert("Name must be at least 1 character.");
    return;
  }

  addButtonElement.disabled = true;

  try {
    const response = await fetch("/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    });

    if (!response.ok) {
      alert("An error has occurred while creating the item.");
      return;
    }

    loadItems();

    inputElement.value = "";
  } catch {
    alert("An error has occurred while creating the item.");
  } finally {
    addButtonElement.disabled = false;
  }
});
