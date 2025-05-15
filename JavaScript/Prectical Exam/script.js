let title = document.querySelector("#title");
let description = document.querySelector("#description");
let dueDate = document.querySelector("#dueDate");
let priority = document.querySelector("#priority");
let btn = document.querySelector("#btn");
let list = document.querySelector("#taskList");
let editId = null;

btn.addEventListener("click", () => {
    let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    let taskObj = {
        id: editId || Date.now(),
        title: title.value,
        description: description.value,
        dueDate: dueDate.value,
        priority: priority.value
    };

    if (editId === null) {
        allTasks.push(taskObj);
    } else {
        allTasks = allTasks.map(item => item.id === editId ? taskObj : item);
        editId = null;
        btn.innerHTML = "Add Task";
    }

    localStorage.setItem("tasks", JSON.stringify(allTasks));

    title.value = "";
    description.value = "";
    dueDate.value = "";
    priority.value = "low";

    getData();
});

function getData() {
    let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    list.innerHTML = "";

    allTasks.forEach((item, index) => {
        let div = document.createElement("div");
        div.className = `task ${item.priority}`;

        let h4 = document.createElement("h4");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let delBtn = document.createElement("button");
        let editBtn = document.createElement("button");

        h4.innerHTML = (index + 1) + ". " + item.title;
        p1.innerHTML = item.description;
        p2.innerHTML = "Due: " + item.dueDate;
        p3.innerHTML = "Priority: " + item.priority;

        delBtn.innerHTML = "Delete";
        editBtn.innerHTML = "Edit";

        delBtn.setAttribute("data-id", item.id);
        editBtn.setAttribute("data-id", item.id);
        delBtn.classList = "delete-btn";
        editBtn.classList = "edit-btn";

        div.append(h4, p1, p2, p3, editBtn, delBtn);
        list.appendChild(div);
    });

    // Call reusable functions here
    handleDeleteEvents();
    handleEditEvents();
}

// 🔴 DELETE
function handleDeleteEvents() {
    document.querySelectorAll(".delete-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            let btnId = btn.getAttribute("data-id");
            let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
            let newTasks = allTasks.filter(item => item.id != btnId);
            localStorage.setItem("tasks", JSON.stringify(newTasks));
            getData();
        });
    });
}

// 🟡 EDIT
function handleEditEvents() {
    document.querySelectorAll(".edit-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            let btnId = btn.getAttribute("data-id");
            let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
            let oneTask = allTasks.find(item => item.id == btnId);

            title.value = oneTask.title;
            description.value = oneTask.description;
            dueDate.value = oneTask.dueDate;
            priority.value = oneTask.priority;

            editId = oneTask.id;
            btn.innerHTML = "Update Task";
        });
    });
}

getData();
