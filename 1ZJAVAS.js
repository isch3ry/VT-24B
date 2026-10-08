
// TASK 3

function createTable() {

    let rows = document.getElementById("rows").value;
    let columns = document.getElementById("columns").value;

    let container = document.getElementById("table-container");

    container.innerHTML = "";

    updateCellCount();

    let table = document.createElement("table");

    for (let i = 0; i < rows; i++) {

        let row = document.createElement("tr");

        for (let j = 0; j < columns; j++) {

            let cell = document.createElement("td");

            cell.textContent = (i + 1) + ", " + (j + 1);

            cell.addEventListener("click", function() {

                cell.classList.toggle("colored-cell");

                
                updateCellCount();
            });

            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    container.appendChild(table);
}


function updateCellCount() {

    let coloredCells =
        document.querySelectorAll(".colored-cell");

    document.getElementById("cell-count").textContent =
        "Количество цветных ячеек: " + coloredCells.length;
}


function deleteTable() {

    let container = document.getElementById("table-container");

    container.innerHTML = "";

    updateCellCount();
}


function countColoredCells() {

    let coloredCells =
        document.querySelectorAll(".colored-cell");

    document.getElementById("cell-count").textContent =
        "Количество цветных ячеек: " + coloredCells.length;
}


// TASK 4


function toggleDarkTheme() {

    document.body.classList.toggle("dark-theme");

}