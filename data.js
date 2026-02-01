export let tasks = JSON.parse(localStorage.getItem("tasks")) || []

export function saveData() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function renderTasks() {
    const listBox = document.getElementById("list-container")
    listBox.innerHTML = ''
    tasks.forEach((task, index) => {
        const taskHTML = `
        <li class="task-item ${task.completed ? 'checked' : ''}">
            ${task.text}
            <span class="delete-btn" data-index="${index}">\u00d7</span>
        </li>
    `
    listBox.insertAdjacentHTML("beforeend", taskHTML)
    });
}