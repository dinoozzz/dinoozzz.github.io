document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.getElementById('name');
    const name = prompt('Tulis Nama Panjang Kamu Sengg!');
    nameElement.innerText = name || 'achintya gayatri';

    const candles = document.querySelectorAll('.candle');
    candles.forEach((candle, index) => {
        setTimeout(() => {
            candle.style.animation = 'candle-blink 0,5s infinite alternate';
        }, index * 500);
    })
})