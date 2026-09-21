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