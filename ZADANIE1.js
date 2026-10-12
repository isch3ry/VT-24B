function openTab(tabName) {

    // Находим все вкладки
    let tabs = document.querySelectorAll(".tab-content");

    // Скрываем все вкладки
    tabs.forEach(function(tab) {
        tab.classList.remove("active");
    });

    // Показываем выбранную вкладку
    document.getElementById(tabName).classList.add("active");
}

// Задачи и пользователи DummyJSON
let selectedTask = null;

async function loadTasks() {
    const list = document.getElementById('tasks-list');
    try {
        const response = await fetch('https://dummyjson.com/todos?limit=30');
        if (!response.ok) throw new Error('Ошибка HTTP ' + response.status);
        const data = await response.json();
        list.replaceChildren();
        data.todos.forEach(task => {
            const button = document.createElement('button');
            button.className = 'task-item';
            button.textContent = `Задача #${task.id}: ${task.todo}`;
            button.addEventListener('click', () => showTask(task));
            list.appendChild(button);
        });
    } catch (error) {
        list.textContent = 'Не удалось загрузить задачи. Проверьте интернет. ' + error.message;
    }
}

function showTask(task) {
    selectedTask = task;
    document.getElementById('task-details').hidden = false;
    document.getElementById('user-details').hidden = true;
    document.getElementById('task-id').textContent = task.id;
    document.getElementById('task-title').textContent = task.todo;
    document.getElementById('task-user-id').textContent = task.userId;
    document.getElementById('task-status').textContent = task.completed ? 'Выполнена' : 'Не выполнена';
    document.getElementById('save-message').textContent = '';
}

function saveTask() {
    if (!selectedTask) return;
    try {
        const saved = JSON.parse(localStorage.getItem('savedTasks') || '[]');
        if (!saved.some(task => task.id === selectedTask.id)) saved.push(selectedTask);
        localStorage.setItem('savedTasks', JSON.stringify(saved));
        document.getElementById('save-message').textContent = 'Задача сохранена!';
    } catch (error) {
        document.getElementById('save-message').textContent = 'Не удалось сохранить задачу.';
    }
}

async function openTaskUser() {
    if (!selectedTask) return;
    const userId = selectedTask.userId;
    const panel = document.getElementById('user-details');
    const info = document.getElementById('user-info');
    panel.hidden = false;
    info.textContent = 'Загрузка пользователя...';
    try {
        const response = await fetch(`https://dummyjson.com/users/${userId}`);
        if (!response.ok) throw new Error('Ошибка HTTP ' + response.status);
        const user = await response.json();
        if (!selectedTask || selectedTask.userId !== userId) return;
        info.replaceChildren();
        const fields = {
            'ID': user.id,
            'ФИО': [user.firstName, user.lastName].filter(Boolean).join(' '),
            'Логин': user.username,
            'Возраст': user.age,
            'Пол': user.gender,
            'Дата рождения': user.birthDate,
            'Email': user.email,
            'Телефон': user.phone,
            'Город': user.address?.city,
            'Адрес': user.address?.address,
            'Страна': user.address?.country,
            'Университет': user.university,
            'Компания': user.company?.name,
            'Должность': user.company?.title,
            'Отдел': user.company?.department,
            'Роль': user.role
        };
        for (const [label, value] of Object.entries(fields)) {
            if (value === undefined || value === null) continue;
            const row = document.createElement('p');
            const bold = document.createElement('b');
            bold.textContent = label + ': ';
            row.append(bold, document.createTextNode(String(value)));
            info.appendChild(row);
        }
    } catch (error) {
        info.textContent = 'Не удалось загрузить пользователя. ' + error.message;
    }
}

loadTasks();
