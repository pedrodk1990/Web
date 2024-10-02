document.addEventListener("DOMContentLoaded", loadTasks);
document.getElementById("task-form").addEventListener("submit", addTask);
document.getElementById("search-input").addEventListener("input", searchTasks);

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        createTaskElement(task);
    });
}

function addTask(e) {
    e.preventDefault();
    
    const taskInput = document.getElementById("task-input");
    const categoryInput = document.getElementById("category-input");
    
    const task = {
        id: Date.now(),
        name: taskInput.value,
        category: categoryInput.value,
    };
    
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
    createTaskElement(task);
    
    taskInput.value = "";
    categoryInput.value = "";
}

function createTaskElement(task) {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.setAttribute("data-id", task.id);
    li.innerHTML = `
        <span>${task.name} (${task.category})</span>
        <button class="btn btn-danger btn-sm" onclick="deleteTask(${task.id})">Remover</button>
    `;
    document.getElementById("task-list").appendChild(li);
}

function deleteTask(id) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
    document.querySelector(`[data-id='${id}']`).remove();
}

function searchTasks() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    const filteredTasks = tasks.filter(task => 
        task.name.toLowerCase().includes(searchTerm)
    );

    document.getElementById("task-list").innerHTML = "";
    filteredTasks.forEach(task => {
        createTaskElement(task);
    });
}
