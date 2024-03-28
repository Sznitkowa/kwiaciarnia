const burgerBtn = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.close-btn');
const navPanel = document.querySelector('.nav-mobile__box');
const navItems = document.querySelectorAll('.nav-mobile__item');
const footerYear = document.querySelector('.footer__year');

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

const showNav = () => {
	document.body.classList.add('active');
	navPanel.classList.add('showNavPanel');
};

const hideNav = () => {
	document.body.classList.remove('active');
	navPanel.classList.remove('showNavPanel');
};

navItems.forEach((item) => {
	item.addEventListener('click', () => {
		document.body.classList.remove('active');
		navPanel.classList.remove('showNavPanel');
	});
});

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		const img = entry.target.querySelector('.contact__img');

		if (entry.isIntersecting) {
			img.classList.add('flowers-animation');
			return;
		}

		img.classList.remove('flowers-animation');
	});
});

observer.observe(document.querySelector('.contact'));

burgerBtn.addEventListener('click', showNav);
closeBtn.addEventListener('click', hideNav);

handleCurrentYear();
