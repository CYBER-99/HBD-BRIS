const turnOnLightsButton = document.querySelector('.turn-on-lights');
const body = document.querySelector('body');
const hiddenMessage = document.querySelector('.hidden-message');
const candle = document.querySelector('.candle');
const balloon = document.querySelector('.balloon');
const birthdaySong = document.querySelector('#birthday-song');

turnOnLightsButton.addEventListener('click', () => {
    body.style.backgroundColor = '#fff';
    hiddenMessage.style.display = 'block';
    candle.src = 'lit-candle.png';
    balloon.style.display = 'block';
    birthdaySong.play();
});
