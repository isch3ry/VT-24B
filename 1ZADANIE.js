// ==============================
// ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК
// ==============================

function openTab(tabName) {

    let tabs = document.querySelectorAll(".tab-content");

    tabs.forEach(function(tab) {
        tab.classList.remove("active");
    });

    document.getElementById(tabName).classList.add("active");
}


// ==============================
// TASK 1
// ==============================


// 1. Найти элемент по ID
// и изменить его текст

function changeText() {

    let element = document.getElementById("text-element");

    element.textContent = "Привет, мир!";
}


// 2. Создать новый div
// с классом new-div
// и текстом "Я новый элемент"

function createNewDiv() {

    let newDiv = document.createElement("div");

    newDiv.className = "new-div";

    newDiv.textContent = "Я новый элемент";

    document.body.appendChild(newDiv);
}


// 3. Удалить элемент
// с классом old-element

function deleteOldElement() {

    let oldElement = document.querySelector(".old-element");

    if (oldElement) {
        oldElement.remove();
    }
}


// 4. Создать элемент <p>
// и изменить его при клике

let paragraph = document.getElementById("change-paragraph");

paragraph.addEventListener("click", function() {

    paragraph.style.color = "blue";

    paragraph.style.fontSize = "24px";

});


// ==============================
// TASK 2
// ==============================

// Элемент, с которым работаем

let classElement = document.getElementById("class-element");


// Добавить класс active,
// если его нет,
// и удалить, если он есть

function toggleActive() {

    classElement.classList.toggle("active");
}


// Вывести список всех классов
// в консоль и в <p>

function showClasses() {

    let classes = classElement.classList;

    console.log(classes);

    document.getElementById("class-list").textContent =
        "Классы элемента: " + Array.from(classes).join(", ");
}