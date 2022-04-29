const hamburgers = document.getElementsByClassName("hamburger");
const navList = document.querySelector(".nav-list");

for (let hamburger of hamburgers) {
    hamburger.addEventListener("click", () => {
        navList.classList.toggle("open");
    });
}
