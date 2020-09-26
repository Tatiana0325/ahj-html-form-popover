const formPop = document.querySelector('.form-popover');
const message = formPop.querySelector('.message-popover');
const btnPop = formPop.querySelector('.button-popover');

btnPop.addEventListener('click', (event) => {
	event.preventDefault();

	message.classList.remove('invisible');
	message.classList.add('active');

	message.style.left = `${message.offsetLeft + (btnPop.offsetWidth - message.offsetWidth) / 2}px`;
	message.style.top = `${btnPop.offsetTop - (message.offsetHeight + 5)}px`
})