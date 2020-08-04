const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['red', 'green', 'yellow', 'purple', 'blue', 'black', 'orange', 'grey', 'white']; 

body.style.backgroundColor = 'violet';
button.addEventListener('click', changeBackground);

let changeBackground = () => {
    const colorsIndex = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorsIndex];
};

