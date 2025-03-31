const turnOnLightsButton = document.querySelector('.turn-on-lights');
const body = document.querySelector('body');
const hiddenMessage = document.querySelector('.hidden-message');

turnOnLightsButton.addEventListener('click', () => {
    body.style.backgroundColor = '#fff';
    hiddenMessage.style.display = 'block';
});

