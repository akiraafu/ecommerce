// hamburger
const hamburgers = document.getElementsByClassName("hamburger");
const navList = document.querySelector(".nav-list");

for (let hamburger of hamburgers) {
    hamburger.addEventListener("click", () => {
        navList.classList.toggle("open");
    });
}

// popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");
if (popup) {
    closePopup.addEventListener("click", () => {
        popup.classList.add("hide-popup");
    });
}
window.addEventListener("load", () => {
    setTimeout(() => {
        popup.classList.remove("hide-popup");
    }, 1000);
});
