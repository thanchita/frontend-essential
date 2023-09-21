const main = () => {
  const todolistInput = document.getElementById("todolist");

  const todolistButton = document.getElementById("add-todolist");

  const todoList = document.getElementById("todolist-list");

  todolistButton.addEventListener("click", (e) => {
    e.preventDefault();

    const newList = document.createElement("li");

    if (!todolistInput.value) {
      alert("Please input something!");
      return;
    }

    newList.textContent = todolistInput.value;

    todoList.appendChild(newList);

    newList.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        newList.classList.toggle("checked");
      }
    });
    const del = document.createElement("button");
    del.textContent = "x";
    del.setAttribute("id", "add-todolist");
    newList.appendChild(del);
    del.addEventListener("click", () => {
      newList.remove();
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
