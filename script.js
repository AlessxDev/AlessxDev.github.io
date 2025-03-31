// Funciones básicas
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

// Funciones avanzadas
function calculatePercentage() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value) / 100;
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateSquareRoot() {
    let display = document.getElementById('display');
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateLog() {
    let display = document.getElementById('display');
    try {
        display.value = Math.log(eval(display.value));
    } catch (e) {
        display.value = 'Error';
    }
}

// Cambiar tema (claro/oscuro)
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
}