const gridItems = document.querySelectorAll(".grid__item");
gridItems.forEach(item => item.addEventListener("click", () => {
    item.classList.toggle("--active");
}));
