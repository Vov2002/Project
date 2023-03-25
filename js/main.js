let theInput = document.querySelector(".add-task input");//
let theAddButton = document.querySelector(".add-task .plus");//
let taskContainer = document.querySelector(".tasks-content");//Поиск элементов из HTML
let tasksCount = document.querySelector(".tasks-count span");//
let taskCompleted = document.querySelector(".tasks-completed span");//


theAddButton.onclick = function () {
if (theInput.value === "") {
    alert("Поля для ввода не может быть пустым");//Если поле ввода пустое то выводит это сообщение
} else {
    let noTasksMsg = document.querySelector(".no-tasks-message");
    if (document.body.contains(document.querySelector(".no-tasks-message"))) {//проверка на наличие класса если содержит удаляем
    noTasksMsg.remove();
}
let mainSpan = document.createElement("span");//создание спана
let text = document.createTextNode(theInput.value);//созданием текста со значением инпута

mainSpan.appendChild(text);
taskContainer.appendChild(mainSpan);//добавление в ul текста из инпута

mainSpan.setAttribute("class", "task-box");//Задание класса
let deleteElement = document.createElement("span");//добавление кнопки удаления
let deleteText = document.createTextNode("Delete");//внутрь спана добавили текст Delete
deleteElement.appendChild(deleteText);//помещение в deleteElement
mainSpan.appendChild(deleteElement);
deleteElement.setAttribute("class", "delete");//добавление классов делетэлементу

theInput.value = "";//очищение инпута после нажатия на кнопку добавить
theInput.focus();
calculateTasks();
}
};

document.addEventListener("click", function (e) {//удаление при нажатии на кнопку delete по клику
if (e.target.className == "delete") {
e.target.parentNode.remove();
if (taskContainer.childElementCount == 0) {
createTaskNo();//после удаления появится текст No Tasks To Show если счётчик равен 0
}
calculateTasks();
}

if (e.target.classList.contains("task-box")) {
e.target.classList.toggle("finished");//смена классов
}
calculateTasks();//подсчёт
});

function createTaskNo() {//создание текста No Tasks To Show после удаления если счётчик равен 0
let msgSpan = document.createElement("span");

let msgText = document.createTextNode("No Tasks To Show");

msgSpan.appendChild(msgText);

msgSpan.className = "no-tasks-message";

taskContainer.appendChild(msgSpan);
}

function calculateTasks() {//задачи и выполнено 

tasksCount.innerText = document.querySelectorAll(
".tasks-content .task-box"
).length;

taskCompleted.innerText = document.querySelectorAll(
".tasks-content .finished"
).length;
//поиск классов и вывод их вместе с длиной(length)
}