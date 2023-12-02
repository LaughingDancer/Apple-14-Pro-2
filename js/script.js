const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	const menuBody = document.querySelector('.navigation__body');
	iconMenu.addEventListener("click", function (e) {
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		document.body.classList.toggle('_lock');
	})
}