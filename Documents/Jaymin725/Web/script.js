let button = document.querySelector('button');
button.addEventListener('click', showMsg);

function showMsg() {
    let name = prompt('Enter your name');
    button.textContent = "Hello " + name;
}