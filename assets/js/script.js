// TODO: Save tasks, delete tasks
// https://code-boxx.com/create-save-files-javascript/


var mainContainer = document.getElementById("mainContainer");
var taskInput = document.getElementById("taskInput");
var submitButton = document.getElementById("submitButton");
var taskContainer = document.getElementById("taskContainer");
const tasks = [
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

taskInput.placeholder = randomElem(tasks);
var alertStatus = false;


function addTask() {
    task = taskInput.value;

    if (task.length == 0 || task.trim().length == 0 || document.getElementById(task)) {
        if (!alertStatus) {
            taskContainer.insertAdjacentHTML("beforebegin",
                `<div id="alertt" class="alert alert-warning" role="alert">
                    Input field cannot be empty or already exists, please type a valid task!
                </div>`
            );
        };
        alertStatus = true;
        taskInput.value = "";
        taskContainer.style.minHeight = "calc(100vh - 355px)"
    } else {
        if (alertStatus) {
            mainContainer.removeChild(alertt)
            alertStatus = false
        };
        taskContainer.innerHTML += `
            <div class="form-check">
                <input id="` + task + `" class="form-check-input" type="checkbox" value="" onchange="changeHandler(this);">
                    <label id="` + task + `_child" class="form-check-label" for="flexCheckDefault">` + task + `</label>
            </div>`;
        taskInput.value = ""
        taskInput.placeholder = randomElem(tasks)
        taskContainer.style.minHeight = "calc(100vh - 290px)"

    }
}

function enterSubmit(event) {
    if (event.which === 13) {
        addTask()
    }
}


function changeHandler(checkbox) {
    label = document.getElementById(checkbox.id + "_child")
    if (checkbox.checked) {
        label.style.textDecoration = "line-through"
    } else {
        label.style.textDecoration = "none"
    }
}


function randomElem(list) {
    return list[Math.floor(Math.random() * list.length)]
}


submitButton.addEventListener("click", addTask);
taskInput; addEventListener("keypress", enterSubmit)