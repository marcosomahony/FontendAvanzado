function app() {
    let canvas = document.querySelector('canvas');
    let c = canvas.getContext('2d');
    
    c.fillStyle = '#f2c6ff';
    c.strokeStyle = '#000000';
    c.fillRect(100, 100, 200, 200);
    c.strokeRect(91, 98, 202, 202)

    c.font = '40px Arial';
    c.fillText('Hola Mundo', 100, 350);
}

window.addEventListener('load', app);