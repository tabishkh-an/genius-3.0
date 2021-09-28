
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".navigation-menu");
const mainContainer = document.querySelector(".main-container")

const leftPanel = document.querySelector(".left-panel")
const leftPanelToggle = document.querySelector(".left-panel-toggle")


// **************** SHOW NAV MENU ****************
// function showMenu() {
//     navMenu.classList.toggle("show")

//     mainContainer.classList.toggle("main-container-margin")
// }

// menuToggle.addEventListener("click", showMenu)





// **************** SHOW LEFT PANEL ****************
// function showLeftPanel() {
//     leftPanel.classList.toggle("show-left-panel")
// }

// leftPanelToggle.addEventListener("click", showLeftPanel)




function showLeftPanel() {
    leftPanel.classList.toggle("show-left-panel")
}

menuToggle.addEventListener("click", showLeftPanel)