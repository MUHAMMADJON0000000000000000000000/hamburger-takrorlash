const AKASI = document.getElementById("hump-open-btn");
const UKASI = document.getElementById("hump-close-btn");
const hamMenuPanelElement = document.getElementById("ham-menu-panel");


AKASI.addEventListener("click", () => {
    AKASI.classList.add("hid-item");
    UKASI.classList.remove("hid-item");
    hamMenuPanelElement.classList.add("activate-hum-menu");
});

UKASI.addEventListener("click", () => {
    AKASI.classList.remove("hid-item");
    UKASI.classList.add("hid-item");
    hamMenuPanelElement.classList.remove("activate-hum-menu");

});