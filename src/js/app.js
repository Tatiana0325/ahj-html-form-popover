const formPop = document.querySelector('.form-popover');
const btnPop = formPop.querySelector('.button-popover');

btnPop.addEventListener('click', (event) => {
	event.preventDefault();

	formPop.classList.add('active')

	const message = document.createElement('div');
	message.setAttribute('data-widget', 'popover');
	message.classList.add('message-popover');
	message.innerHTML = `
		<div class="popover-title">Popover title</div>
		<div class="popover-body">And here's some amazing content. It's very engaging. Right?</div>
	`;

	btnPop.insertAdjacentElement("beforeend", message);
	message.classList.add('active');
	message.style.left = `${message.offsetLeft - (message.offsetLeft - btnPop.offsetLeft) + (btnPop.offsetWidth  - message.offsetWidth) / 2}px`;
	message.style.top = `${btnPop.offsetTop - (message.offsetHeight + 5)}px`
})
