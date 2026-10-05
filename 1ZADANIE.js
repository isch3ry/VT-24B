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

// 1. Изменение текста

function changeText() {

    let element = document.getElementById("text-element");

    element.textContent = "Привет, мир!";
}


// 2. Создание нового div

function createNewDiv() {

    let newDiv = document.createElement("div");

    newDiv.className = "new-div";

    newDiv.textContent = "Я новый элемент";

    document.body.appendChild(newDiv);
}


// 3. Удаление элемента

function deleteOldElement() {

    let oldElement = document.querySelector(".old-element");

    if (oldElement) {
        oldElement.remove();
    }
}


// 4. Изменение абзаца

let paragraph = document.getElementById("change-paragraph");

paragraph.addEventListener("click", function() {

    if (paragraph.style.color === "blue") {

        paragraph.style.color = "";
        paragraph.style.fontSize = "";

    } else {

        paragraph.style.color = "blue";
        paragraph.style.fontSize = "24px";
    }

});


// ==============================
// TASK 2
// ==============================

let classElement =
    document.getElementById("class-element");


function toggleActive() {

    classElement.classList.toggle("active");

    showClasses();
}


function showClasses() {

    let classes = classElement.classList;

    console.log(classes);

    document.getElementById("class-list").textContent =
        "Классы элемента: " + Array.from(classes).join(", ");
}


// ==============================
// TASK 3
// ==============================

function createTable() {

    let rows =
        document.getElementById("rows").value;

    let columns =
        document.getElementById("columns").value;

    let container =
        document.getElementById("table-container");

    container.innerHTML = "";

    updateCellCount();

    let table =
        document.createElement("table");

    for (let i = 0; i < rows; i++) {

        let row =
            document.createElement("tr");

        for (let j = 0; j < columns; j++) {

            let cell =
                document.createElement("td");

            cell.textContent =
                (i + 1) + ", " + (j + 1);

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
        "Количество цветных ячеек: " +
        coloredCells.length;
}


function deleteTable() {

    let container =
        document.getElementById("table-container");

    container.innerHTML = "";

    updateCellCount();
}


function countColoredCells() {

    let coloredCells =
        document.querySelectorAll(".colored-cell");

    document.getElementById("cell-count").textContent =
        "Количество цветных ячеек: " +
        coloredCells.length;
}


// ==============================
// TASK 4
// ==============================

function toggleDarkTheme() {

    document.body.classList.toggle("dark-theme");

}


// ==============================
// TASK 5 — DummyJSON
// ==============================


// Текущий язык

let currentLanguage = "ru";


// ==============================
// ВЫБОР ЯЗЫКА
// ==============================

function changeLanguage() {

    currentLanguage =
        document.getElementById("languageSelect").value;

    loadProducts();
}


// ==============================
// СОЗДАНИЕ ЗВЁЗД
// ==============================

function createStars(rating) {

    let fullStars =
        Math.round(rating);

    let stars = "";

    for (let i = 1; i <= 5; i++) {

        if (i <= fullStars) {

            stars += "★";

        } else {

            stars += "☆";
        }
    }

    return stars;
}


// ==============================
// ПОЛУЧЕНИЕ ТОВАРОВ
// ==============================

async function loadProducts() {

    const response =
        await fetch(
            "https://dummyjson.com/products"
        );

    const data =
        await response.json();

    displayProducts(data.products);
}


// ==============================
// ОТОБРАЖЕНИЕ ТОВАРОВ
// ==============================

function displayProducts(products) {

    const container =
        document.getElementById("products");

    container.innerHTML = "";

    products.forEach(product => {

        const div =
            document.createElement("div");

        div.className =
            "product-card";


        // Перевод подписей

        let priceText;
        let categoryText;
        let descriptionText;
        let ratingText;
        let editText;
        let deleteText;


        if (currentLanguage === "ru") {

            priceText = "Цена";
            categoryText = "Категория";
            descriptionText = "Описание";
            ratingText = "Рейтинг";
            editText = "Изменить";
            deleteText = "Удалить";

        } else {

            priceText = "Price";
            categoryText = "Category";
            descriptionText = "Description";
            ratingText = "Rating";
            editText = "Edit";
            deleteText = "Delete";
        }


        div.innerHTML = `

            <img
                src="${product.thumbnail}"
                alt="${product.title}"
                class="product-image"
            >

            <h3>
                ${product.title}
            </h3>


            <p>
                <strong>${priceText}:</strong>
                $${product.price}
            </p>


            <p>
                <strong>${categoryText}:</strong>
                ${product.category}
            </p>


            <p>
                <strong>${descriptionText}:</strong>
                ${product.description}
            </p>


            <p>
                <strong>${ratingText}:</strong>

                <span class="product-rating">
                    ${createStars(product.rating)}
                </span>

                ${product.rating}
            </p>


            <button
                onclick="editProduct(${product.id})"
            >
                ${editText}
            </button>


            <button
                onclick="deleteProduct(${product.id})"
            >
                ${deleteText}
            </button>

        `;


        container.appendChild(div);
    });
}


// ==============================
// ПОИСК ТОВАРА
// ==============================

async function searchProducts() {

    const searchText =
        document.getElementById(
            "searchInput"
        ).value;


    const response =
        await fetch(
            `https://dummyjson.com/products/search?q=${searchText}`
        );


    const data =
        await response.json();


    displayProducts(data.products);
}


// ==============================
// ДОБАВЛЕНИЕ ТОВАРА
// ==============================

async function addProduct() {

    const title =
        document.getElementById(
            "productTitle"
        ).value;


    const price =
        document.getElementById(
            "productPrice"
        ).value;


    if (title === "" || price === "") {

        alert(
            "Заполните название и цену"
        );

        return;
    }


    const response =
        await fetch(
            "https://dummyjson.com/products/add",
            {

                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({

                    title: title,

                    price: Number(price)

                })
            }
        );


    const product =
        await response.json();


    // Создаём карточку нового товара

    const container =
        document.getElementById(
            "products"
        );


    const div =
        document.createElement("div");


    div.className =
        "product-card";


    let editText =
        currentLanguage === "ru"
            ? "Изменить"
            : "Edit";


    let deleteText =
        currentLanguage === "ru"
            ? "Удалить"
            : "Delete";


    div.innerHTML = `

        <h3>
            ${product.title}
        </h3>

        <p>
            <strong>
                ${currentLanguage === "ru"
                    ? "Цена"
                    : "Price"}:
            </strong>

            $${product.price}
        </p>

        <p>
            <strong>
                ${currentLanguage === "ru"
                    ? "Категория"
                    : "Category"}:
            </strong>

            ${currentLanguage === "ru"
                ? "Новый товар"
                : "New product"}
        </p>

        <p>
            <strong>
                ${currentLanguage === "ru"
                    ? "Описание"
                    : "Description"}:
            </strong>

            ${currentLanguage === "ru"
                ? "Описание отсутствует"
                : "No description"}
        </p>

        <p>
            <strong>
                ${currentLanguage === "ru"
                    ? "Рейтинг"
                    : "Rating"}:
            </strong>

            <span class="product-rating">
                ☆☆☆☆☆
            </span>
        </p>

        <button
            onclick="editProduct(${product.id})"
        >
            ${editText}
        </button>

        <button
            onclick="deleteProduct(${product.id})"
        >
            ${deleteText}
        </button>

    `;


    container.prepend(div);


    alert(
        "Товар добавлен: " +
        product.title
    );


    // Очищаем поля

    document.getElementById(
        "productTitle"
    ).value = "";


    document.getElementById(
        "productPrice"
    ).value = "";
}


// ==============================
// ИЗМЕНЕНИЕ ТОВАРА
// ==============================

async function editProduct(id) {

    const newTitle =
        prompt(
            "Введите новое название товара:"
        );


    const newPrice =
        prompt(
            "Введите новую цену:"
        );


    if (
        newTitle === null ||
        newPrice === null
    ) {

        return;
    }


    const response =
        await fetch(
            `https://dummyjson.com/products/${id}`,
            {

                method: "PUT",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({

                    title: newTitle,

                    price: Number(newPrice)

                })
            }
        );


    const product =
        await response.json();


    alert(
        "Товар изменён: " +
        product.title
    );


    // Находим карточку товара

    const cards =
        document.querySelectorAll(
            ".product-card"
        );


    cards.forEach(card => {

        const button =
            card.querySelector(
                `button[onclick="editProduct(${id})"]`
            );


        if (button) {

            // Меняем название

            const title =
                card.querySelector("h3");

            title.textContent =
                product.title;


            // Меняем цену

            const paragraphs =
                card.querySelectorAll("p");


            paragraphs[0].innerHTML =
                `<strong>Цена:</strong> $${product.price}`;
        }

    });
}


// ==============================
// УДАЛЕНИЕ ТОВАРА
// ==============================

async function deleteProduct(id) {

    const response =
        await fetch(
            `https://dummyjson.com/products/${id}`,
            {
                method: "DELETE"
            }
        );


    const product =
        await response.json();


    alert(
        "Товар удалён: " +
        product.title
    );


    // Удаляем карточку со страницы

    const cards =
        document.querySelectorAll(
            ".product-card"
        );


    cards.forEach(card => {

        const button =
            card.querySelector(
                `button[onclick="deleteProduct(${id})"]`
            );


        if (button) {

            card.remove();
        }

    });

}