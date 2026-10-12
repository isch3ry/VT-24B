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

            "https\://dummyjson.com/products"

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

            `https\://dummyjson.com/products/search?q=${searchText}`

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

            "https\://dummyjson.com/products/add",

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

            `https\://dummyjson.com/products/${id}`,

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

            `https\://dummyjson.com/products/${id}`,

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
// TASK 6 — точный список из предоставленного JSON
const fixedTodos = [
    {
        "id": 1,
        "todo": "Do something nice for someone you care about",
        "completed": false,
        "userId": 152
    },
    {
        "id": 2,
        "todo": "Memorize a poem",
        "completed": true,
        "userId": 13
    },
    {
        "id": 3,
        "todo": "Watch a classic movie",
        "completed": true,
        "userId": 68
    },
    {
        "id": 4,
        "todo": "Watch a documentary",
        "completed": false,
        "userId": 84
    },
    {
        "id": 5,
        "todo": "Invest in cryptocurrency",
        "completed": false,
        "userId": 163
    },
    {
        "id": 6,
        "todo": "Contribute code or a monetary donation to an open-source software project",
        "completed": false,
        "userId": 69
    },
    {
        "id": 7,
        "todo": "Solve a Rubik's cube",
        "completed": true,
        "userId": 76
    },
    {
        "id": 8,
        "todo": "Bake pastries for yourself and neighbor",
        "completed": true,
        "userId": 198
    },
    {
        "id": 9,
        "todo": "Go see a Broadway production",
        "completed": false,
        "userId": 7
    },
    {
        "id": 10,
        "todo": "Write a thank you letter to an influential person in your life",
        "completed": true,
        "userId": 9
    },
    {
        "id": 11,
        "todo": "Invite some friends over for a game night",
        "completed": false,
        "userId": 104
    },
    {
        "id": 12,
        "todo": "Have a football scrimmage with some friends",
        "completed": false,
        "userId": 32
    },
    {
        "id": 13,
        "todo": "Text a friend you haven't talked to in a long time",
        "completed": true,
        "userId": 2
    },
    {
        "id": 14,
        "todo": "Organize pantry",
        "completed": false,
        "userId": 46
    },
    {
        "id": 15,
        "todo": "Buy a new house decoration",
        "completed": true,
        "userId": 105
    },
    {
        "id": 16,
        "todo": "Plan a vacation you've always wanted to take",
        "completed": true,
        "userId": 162
    },
    {
        "id": 17,
        "todo": "Clean out car",
        "completed": false,
        "userId": 71
    },
    {
        "id": 18,
        "todo": "Draw and color a Mandala",
        "completed": true,
        "userId": 6
    },
    {
        "id": 19,
        "todo": "Create a cookbook with favorite recipes",
        "completed": true,
        "userId": 53
    },
    {
        "id": 20,
        "todo": "Bake a pie with some friends",
        "completed": false,
        "userId": 162
    },
    {
        "id": 21,
        "todo": "Create a compost pile",
        "completed": false,
        "userId": 13
    },
    {
        "id": 22,
        "todo": "Take a hike at a local park",
        "completed": true,
        "userId": 37
    },
    {
        "id": 23,
        "todo": "Take a class at local community center that interests you",
        "completed": true,
        "userId": 65
    },
    {
        "id": 24,
        "todo": "Research a topic interested in",
        "completed": true,
        "userId": 130
    },
    {
        "id": 25,
        "todo": "Plan a trip to another country",
        "completed": false,
        "userId": 140
    },
    {
        "id": 26,
        "todo": "Improve touch typing",
        "completed": false,
        "userId": 178
    },
    {
        "id": 27,
        "todo": "Learn Express.js",
        "completed": false,
        "userId": 194
    },
    {
        "id": 28,
        "todo": "Learn calligraphy",
        "completed": false,
        "userId": 80
    },
    {
        "id": 29,
        "todo": "Have a photo session with some friends",
        "completed": true,
        "userId": 91
    },
    {
        "id": 30,
        "todo": "Go to the gym",
        "completed": true,
        "userId": 142
    }
];
// Изменения хранятся только в этом браузере, DummyJSON не изменяется.
const originalTodos = fixedTodos.map(task => ({...task}));
try {
    const stored = JSON.parse(localStorage.getItem('editedTodos30'));
    if (Array.isArray(stored)) { fixedTodos.splice(0, fixedTodos.length, ...stored); }
} catch (_) {}
let selectedTask = null;
const userCache = new Map();
function persistTodos() { localStorage.setItem('editedTodos30', JSON.stringify(fixedTodos)); }
function loadTasks() {
    const list = document.getElementById('tasks-list');
    if (!list) return;
    const q = document.getElementById('todo-search').value.toLowerCase().trim();
    const filter = document.getElementById('todo-filter').value;
    const sort = document.getElementById('todo-sort').value;
    let tasks = fixedTodos.filter(t => t.todo.toLowerCase().includes(q) && (filter === 'all' || (filter === 'done' ? t.completed : !t.completed)));
    tasks.sort((a,b) => sort === 'id-desc' ? b.id-a.id : sort === 'name-asc' ? a.todo.localeCompare(b.todo) : sort === 'name-desc' ? b.todo.localeCompare(a.todo) : sort === 'status' ? Number(a.completed)-Number(b.completed) || a.id-b.id : a.id-b.id);
    document.getElementById('todo-count').textContent = `Показано задач: ${tasks.length} из ${fixedTodos.length}`;
    list.replaceChildren();
    tasks.forEach(task => {
        const row = document.createElement('div'); row.className = 'todo-row';
        const checkbox = document.createElement('input'); checkbox.type = 'checkbox'; checkbox.checked = task.completed; checkbox.title = 'Изменить статус выполнения';
        checkbox.addEventListener('change', () => { task.completed = checkbox.checked; persistTodos(); loadTasks(); });
        const name = document.createElement('button'); name.className = 'todo-name'; name.textContent = `№${task.id} — ${task.todo}`; name.addEventListener('click', () => showTask(task));
        const edit = document.createElement('button'); edit.textContent = 'Редактировать'; edit.addEventListener('click', () => editTask(task));
        const del = document.createElement('button'); del.textContent = 'Удалить'; del.addEventListener('click', () => deleteTask(task));
        if (task.completed) name.classList.add('todo-done');
        row.append(checkbox,name,edit,del); list.appendChild(row);
    });
}
function showTask(task) {
    selectedTask = task;
    document.getElementById('task-id').textContent = task.id;
    document.getElementById('task-title').textContent = task.todo;
    document.getElementById('task-status').textContent = task.completed ? 'Выполнена' : 'Не выполнена';
    document.getElementById('save-message').textContent = '';
    document.getElementById('task-avatar').textContent = '?';
    document.getElementById('task-avatar').replaceChildren(document.createTextNode('?'));
    document.getElementById('task-user-name').textContent = 'Загрузка пользователя...';
    document.getElementById('task-modal').hidden = false;
    getTaskUser(task.userId).then(user => {
        if (selectedTask !== task || document.getElementById('task-modal').hidden) return;
        document.getElementById('task-user-name').textContent = [user.firstName,user.lastName].filter(Boolean).join(' ') || 'Пользователь';
        const avatar = document.getElementById('task-avatar');
        avatar.replaceChildren();
        if (user.image) { const img = document.createElement('img'); img.src = user.image; img.alt = 'Аватар пользователя'; avatar.appendChild(img); }
        else avatar.textContent = (user.firstName || '?')[0];
    }).catch(() => { if (selectedTask === task) document.getElementById('task-user-name').textContent = 'Не удалось загрузить пользователя'; });
}
function closeTaskModal() { document.getElementById('task-modal').hidden = true; closeUserModal(); selectedTask = null; }
function closeUserModal() { document.getElementById('user-modal').hidden = true; }
function getTaskUser(id) {
    if (!userCache.has(id)) {
        const request = fetch(`https://dummyjson.com/users/${id}`).then(r => { if (!r.ok) throw Error('Ошибка'); return r.json(); });
        userCache.set(id, request);
        request.catch(() => userCache.delete(id));
    }
    return userCache.get(id);
}
function saveTask() {
    if (!selectedTask) return;
    try {
        const tasks = JSON.parse(localStorage.getItem('savedTasks') || '[]');
        const index = tasks.findIndex(t => t.id === selectedTask.id);
        if (index < 0) tasks.push({...selectedTask}); else tasks[index] = {...selectedTask};
        localStorage.setItem('savedTasks', JSON.stringify(tasks));
        document.getElementById('save-message').textContent = 'Задача сохранена.';
    } catch (_) { document.getElementById('save-message').textContent = 'Ошибка сохранения.'; }
}
function editTask(task) {
    const value = prompt('Новое название задачи:', task.todo);
    if (value === null) return;
    if (!value.trim()) { alert('Название не может быть пустым'); return; }
    task.todo = value.trim(); persistTodos(); loadTasks();
    if (selectedTask === task) showTask(task);
}
function editSelectedTask() { if (selectedTask) editTask(selectedTask); }
function deleteTask(task) {
    if (!confirm(`Удалить задачу №${task.id}?`)) return;
    const index = fixedTodos.indexOf(task);
    if (index !== -1) fixedTodos.splice(index, 1);
    persistTodos();
    if (selectedTask === task) closeTaskModal();
    loadTasks();
}
function deleteSelectedTask() { if (selectedTask) deleteTask(selectedTask); }
async function openTaskUser() {
    if (!selectedTask) return;
    const id = selectedTask.userId;
    const panel = document.getElementById('user-modal');
    const info = document.getElementById('user-info');
    panel.hidden = false; info.textContent = 'Загрузка пользователя...';
    const tasksPanel = document.getElementById('user-tasks');
    tasksPanel.textContent = 'Загрузка задач пользователя...';
    try {
        const user = await getTaskUser(id);
        if (panel.hidden || !selectedTask || selectedTask.userId !== id) return;
        info.replaceChildren();
        if (user.image) { const img = document.createElement('img'); img.src = user.image; img.alt = 'Аватар'; img.className = 'user-photo'; info.appendChild(img); }
        const fields = [ ['ФИО', [user.firstName,user.maidenName,user.lastName].filter(Boolean).join(' ')], ['Логин', user.username], ['Возраст',user.age], ['Пол',user.gender], ['Дата рождения',user.birthDate], ['Email',user.email], ['Телефон',user.phone], ['Город',user.address?.city], ['Адрес',user.address?.address], ['Страна',user.address?.country], ['Университет',user.university], ['Компания',user.company?.name], ['Должность',user.company?.title], ['Отдел',user.company?.department] ];
        fields.forEach(([label,value]) => { if (value === undefined || value === null || value === '') return; const p = document.createElement('p'); const b = document.createElement('b'); b.textContent = label + ': '; p.append(b,document.createTextNode(String(value))); info.appendChild(p); });
    } catch (_) { info.textContent = 'Не удалось загрузить пользователя. Проверьте интернет.'; }
    try {
        const response = await fetch(`https://dummyjson.com/todos/user/${id}`);
        if (!response.ok) throw new Error('Не удалось получить задачи');
        const data = await response.json();
        if (panel.hidden || !selectedTask || selectedTask.userId !== id) return;
        const originalIds = new Set(originalTodos.map(t => t.id));
        const currentById = new Map(fixedTodos.map(t => [t.id, t]));
        const tasks = (data.todos || []).filter(t => !originalIds.has(t.id) || currentById.has(t.id))
            .map(t => currentById.get(t.id) || t);
        const list = document.createElement('ul');
        list.className = 'user-todo-list';
        tasks.forEach(task => {
            const item = document.createElement('li');
            const title = document.createElement('span');
            title.textContent = task.todo;
            const status = document.createElement('span');
            status.className = task.completed ? 'user-task-done' : 'user-task-pending';
            status.textContent = task.completed ? 'Выполнена' : 'Не выполнена';
            item.append(title, status);
            list.appendChild(item);
        });
        tasksPanel.replaceChildren();
        const heading = document.createElement('h4');
        heading.textContent = `Задачи пользователя (${tasks.length})`;
        tasksPanel.appendChild(heading);
        if (tasks.length) tasksPanel.appendChild(list);
        else { const empty = document.createElement('p'); empty.textContent = 'Задач не найдено.'; tasksPanel.appendChild(empty); }
    } catch (_) {
        if (!panel.hidden && selectedTask && selectedTask.userId === id)
            tasksPanel.textContent = 'Не удалось загрузить задачи пользователя. Проверьте интернет.';
    }
}
document.querySelectorAll('.modal-overlay').forEach(modal => modal.addEventListener('click', e => { if (e.target === modal) { if (modal.id === 'user-modal') closeUserModal(); else closeTaskModal(); } }));
document.addEventListener('keydown', e => { if (e.key === 'Escape') { if (!document.getElementById('user-modal').hidden) closeUserModal(); else if (!document.getElementById('task-modal').hidden) closeTaskModal(); } });
loadTasks();
