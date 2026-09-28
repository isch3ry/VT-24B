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
// TASK 4
// ==============================

function toggleDarkTheme() {

    document.body.classList.toggle("dark-theme");

}