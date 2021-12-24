// var main_container = document.getElementById("main_container")
var task_input = document.getElementById("task_input")
var submit_button = document.getElementById("submit_button");
var task_container = document.getElementById("task_container");
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
    ] // https://www.bestrandoms.com/random-task

task_input.placeholder = randomElem(tasks)


function addTask() {
    task = task_input.value

    if (task.length == 0) {
        console.log("Input field cannot be empty, please type a task!");
    } else if (document.getElementById(task)) {
        console.log("Task already exists!");
        task_input.value = ""
    } else {
        task_container.innerHTML += `
            <div class="form-check">
                <input id="` + task + `" class="form-check-input" type="checkbox" value="" onchange="changeHandler(this);">
                    <label id="` + task + `_child" class="form-check-label" for="flexCheckDefault">`+ task + `</label>
            </div>`;
        task_input.value = ""
        task_input.placeholder = randomElem(tasks)
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


submit_button.addEventListener("click", addTask);