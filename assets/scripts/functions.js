document.addEventListener("DOMContentLoaded", function () {
    const fieldForTask = document.getElementById("field-for-task");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    function createTask() {
        const taskText = fieldForTask.value;
        if (taskText.trim() === "") {
            alert("please enter a task first ♡");
            return;
        }

        const newTask = document.createElement("li");
        newTask.textContent = taskText;

        taskList.appendChild(newTask);
        fieldForTask.value = "";
    }

    function checkTask(event) {
        const element = event.target;
        if (element.tagName === "LI") {
            element.classList.toggle("completed");
        }
    }

    addTaskButton.addEventListener("click", createTask);
    taskList.addEventListener("click", checkTask);
});
