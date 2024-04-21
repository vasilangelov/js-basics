// Направете работещ часовник, който показва часове, минути и секунди в реално време.
// Форматирайте го така, че ако часовете, минутите или секундите са < 9 да започват с 0 (пр 13:09:03)
// Насоки: За да достъпите датата, можете да използвате класът Date (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
// За периодични промени можете да използвате setInterval (https://developer.mozilla.org/en-US/docs/Web/API/setInterval)

const date = new Date();

console.log(date.getSeconds());
console.log(date.getMinutes());
console.log(date.getHours());
