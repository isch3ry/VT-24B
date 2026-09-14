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