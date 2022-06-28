const toggle = document.getElementById ("toggle")

toggle.addEventListener ("click", openMenu)

function openMenu() {
    const toggleMenu = document.querySelector(".mobile-nav-container")
    toggleMenu.classList.toggle("show")
}