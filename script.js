const turnOnLightsButton = document.querySelector('.turn-on-lights');
const body = document.querySelector('body');
const hiddenMessage = document.querySelector('.hidden-message');
const candle = document.querySelector('.candle');

turnOnLightsButton.addEventListener('click', () => {
    body.style.backgroundColor = '#fff';
    hiddenMessage.style.display = 'block';
    candle.src = 'lit-candle.png';
});
