let mobileMenuButton = document.querySelector(".mobile_menu-block");
let burgerMenu = document.querySelector(".header__nav-list_mobile ");
let mobileMenuLine1 = document.querySelector(".mobile_menu-line:first-child");
let mobileMenuLine2 = document.querySelector(".mobile_menu-line:nth-child(2)");
let mobileMenuLine3 = document.querySelector(".mobile_menu-line:nth-child(3)");



mobileMenuButton.addEventListener("click", function () {
	burgerMenu.classList.toggle("open")
	mobileMenuLine1.classList.toggle("line1--active");
	mobileMenuLine2.classList.toggle("line2--active");
	mobileMenuLine3.classList.toggle("line3--active");
})