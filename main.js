import { tasks, saveData, renderTasks } from './data.js'

function main() {
    const inputBox = document.getElementById("input-box")
    const listBox = document.getElementById("list-container")
    const addButton = document.getElementById("addButton") 

    addButton.addEventListener("click", addTask) // Тут я добавил обработчик вместо onclick на eventlistner

    inputBox.addEventListener("keypress", function(e) {
        if(e.key === "Enter") {
            addTask()
        }
    })

    function addTask() {

        const taskText = inputBox.value.trim()

        if (taskText === '') {
            alert('Введите что-то в инпут');
            return
        }

        tasks.push({
            text: taskText,
            completed: false
        });

        inputBox.value = ''
        saveData()
        renderTasks()
    }

    listBox.addEventListener("click", function(e) {
        const clickedElement = e.target

        if(clickedElement.classList.contains("task-item")) {
            const span = clickedElement.querySelector('.delete-btn');
            const index = span.dataset.index;

            tasks[index].completed = !tasks[index].completed;
        }
        else if(clickedElement.classList.contains("delete-btn")) {
            const index = clickedElement.dataset.index;
            tasks.splice(index, 1);
        }
        saveData();
        renderTasks();
    })

    renderTasks();
}

main()