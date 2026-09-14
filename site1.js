function showTab(tabName) {

    // Получаем все вкладки
    const tabs = document.querySelectorAll(".tab");

    // Скрываем все вкладки
    tabs.forEach(function(tab) {
        tab.classList.remove("active");
    });

    // Показываем выбранную вкладку
    const selectedTab = document.getElementById(tabName);

    if (selectedTab) {
        selectedTab.classList.add("active");
    }
}