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

    if (paragraph.style.color === "blue") {

        // Возвращаем прежний вид
        paragraph.style.color = "";
        paragraph.style.fontSize = "";

    } else {

        // Изменяем вид
        paragraph.style.color = "blue";
        paragraph.style.fontSize = "24px";
    }

});

// ==============================
// ==============================
// TASK 2
// ==============================

// Элемент, с которым работаем
let classElement = document.getElementById("class-element");


// Добавить / удалить класс active
// и сразу обновить список классов

function toggleActive() {

    classElement.classList.toggle("active");

    showClasses();
}


// Вывести список всех классов
// в консоль и в <p>

function showClasses() {

    let classes = classElement.classList;

    console.log(classes);

    document.getElementById("class-list").textContent =
        "Классы элемента: " + Array.from(classes).join(", ");
}
// ==============================
// TASK 3
// ==============================

// Создание таблицы

function createTable() {

    let rows = document.getElementById("rows").value;
    let columns = document.getElementById("columns").value;

    let container = document.getElementById("table-container");

    // Удаляем старую таблицу
    container.innerHTML = "";

    // Сбрасываем счетчик
    updateCellCount();

    let table = document.createElement("table");

    for (let i = 0; i < rows; i++) {

        let row = document.createElement("tr");

        for (let j = 0; j < columns; j++) {

            let cell = document.createElement("td");

            cell.textContent = (i + 1) + ", " + (j + 1);

            // При клике меняем цвет
            cell.addEventListener("click", function() {

                cell.classList.toggle("colored-cell");

                // Сразу обновляем количество
                updateCellCount();
            });

            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    container.appendChild(table);
}


// Подсчет цветных ячеек

function updateCellCount() {

    let coloredCells =
        document.querySelectorAll(".colored-cell");

    document.getElementById("cell-count").textContent =
        "Количество цветных ячеек: " + coloredCells.length;
}


// Удаление таблицы

function deleteTable() {

    let container = document.getElementById("table-container");

    container.innerHTML = "";

    updateCellCount();
}

// Подсчет цветных ячеек

function countColoredCells() {

    let coloredCells =
        document.querySelectorAll(".colored-cell");

    document.getElementById("cell-count").textContent =
        "Количество цветных ячеек: " + coloredCells.length;
}


// ==============================
//TASK 4
// ==============================

function toggleDarkTheme() {

    document.body.classList.toggle("dark-theme");

}