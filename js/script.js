// бургер меню
const burger = document.querySelector('[data-burger]');
const nav = document.querySelector('[data-nav]');
const body = document.body;
const navItems = nav.querySelectorAll('a');

burger.addEventListener('click', () => {
	body.classList.toggle('stop--scroll')
	burger.classList.toggle('burger--active');
	nav.classList.toggle('nav--visible');
});

navItems.forEach(el => {
	el.addEventListener('click', () => {
		body.classList.remove('stop--scroll')
		burger.classList.remove('burger--active');
		nav.classList.remove('nav--visible');
	});
});
// бургер меню

// аккаордион
document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.accordion');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.accordion__control');
			const content = self.querySelector('.accordion__content');

			self.classList.toggle('open');

			// если открыт аккордеон
			if (self.classList.contains('open')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null;
			}
		});
	});
});
// аккаордион