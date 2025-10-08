const addBtn = document.getElementById("add-btn");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.style.marginLeft = "10px";

  li.addEventListener("click", () => li.classList.toggle("completed"));
  delBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(delBtn);
  list.appendChild(li);
  input.value = "";
}
