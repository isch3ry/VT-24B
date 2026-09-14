function showTab(tabName) {

    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(function(tab) {
        tab.classList.remove("active");
    });

    document.getElementById(tabName).classList.add("active");
}