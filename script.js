const inputBox = document.getElementById("input-box");
const listBox = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert('Введите что-то в инпут');
    } 
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listBox.appendChild(li);
        inputBox.value = '';
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    saveData()
}

listBox.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData() {
    localStorage.setItem("data", listBox.innerHTML)
}
function showData() {
    listBox.innerHTML = localStorage.getItem("data")
}
showData()