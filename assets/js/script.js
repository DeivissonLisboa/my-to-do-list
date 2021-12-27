var mainContainer = document.getElementById("mainContainer");
var taskInput = document.getElementById("taskInput");
var submitButton = document.getElementById("submitButton");
var alertStatus = false;
var taskContainer = document.getElementById("taskContainer");
var exportBtn = document.getElementById("exportBtn")
const PLACEHOLDERS = [
    "Get a Scholarship For University",
    "Hike Marcy (5344Ft)",
    "Be in a Jacuzzi in the Snow",
    "No Fast Food For 30 Days",
    "Learn How to Decorate a Cake",
    "Give a Piggyback Ride to Someone",
    "Be in a Blizzard",
    "Do 10 Pushups For 10 Days",
    "Dive to the Titanic",
    "Go Behind the Scenes to the Making of Any Movie",
    "Live Abroad For at Least 6 Months",
    "Have my Own Company"
]; // https://www.bestrandoms.com/random-task
var taskList = []


taskInput.placeholder = randomElem(PLACEHOLDERS);


function addTask() {
    let task = taskInput.value.trim();

    if (!task || !task.trim() || taskList.includes(task)) {
        if (!alertStatus) {
            taskContainer.insertAdjacentHTML("beforebegin",
                `<div id="alertField" class="alert alert-warning" role="alert">
                    Input field cannot be empty or already exists, please type a valid task!
                </div>`
            );
        }
        alertStatus = true;
        taskInput.value = "";
        taskContainer.style.minHeight = "calc(100vh - 355px)";
    } else {
        if (alertStatus) {
            mainContainer.removeChild(alertField);
            alertStatus = false;
        }
        taskContainer.innerHTML += `
            <div class="form-check">
                <input id="` + taskList.length + `" class="form-check-input" type="checkbox" value="" onchange="changeHandler(this);">
                    <label id="` + taskList.length + `_child" class="form-check-label" for="flexCheckDefault">` + task + `</label>
            </div>`;
        taskList.push(task);
        taskInput.value = "";
        taskInput.placeholder = randomElem(PLACEHOLDERS);
        taskContainer.style.minHeight = "calc(100vh - 290px)";
    }
}


function enterSubmit(event) {
    if (event.which === 13) {
        addTask();
    }
}


function changeHandler(checkbox) {
    let label = document.getElementById(checkbox.id + "_child")
    if (checkbox.checked) {
        label.style.textDecoration = "line-through"
    } else {
        label.style.textDecoration = "none"
    }
}


function randomElem(list) {
    return list[Math.floor(Math.random() * list.length)]
}


function exportTasks() {
    let d = new Date();
    let fileName = `MyToDoList_Export-${d.getUTCDate()}-${d.getUTCMonth() + 1}-${d.getUTCFullYear()}.md`
    let exportText = "# My To Do List\n\n"
    taskList.forEach(
        (item) => {
            exportText += ` - ${item}\n`;
        }
    )
    let myFile = new File([exportText], fileName, { type: "text/plain; charset=utf-8" });
    saveAs(myFile);
}


submitButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", enterSubmit)
exportBtn.addEventListener("click", exportTasks)