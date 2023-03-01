const button = document.querySelector('button');
const color = document.getElementById('color');
const copyIcon = document.querySelector('.pop-up span');
const colorInput = document.querySelector('.pop-up input');

const changeBackground = () => {

    const hexVal = Math.floor(Math.random() * 0xffffff).toString(16);
    document.body.style.background = `#${hexVal}`;
    console.log(`#${hexVal}`);

    color.value = `#${hexVal}`;
}

const copyPassword = () => {
    navigator.clipboard.writeText(colorInput.value);
    copyIcon.innerText = 'check';
    setTimeout(() => {
        copyIcon.innerText = "copy"
    }, 2000)
}

copyIcon.addEventListener('click', copyPassword);
button.addEventListener('click', changeBackground);