let btncorrectt8 = document.querySelector('#correct17');
let btnwrong17 = document.querySelector('#wrong17');
let btnwrong27 = document.querySelector('#wrong27');
let btnwrong37 = document.querySelector('#wrong37');
let btnscoree8 = document.querySelector('#one8');
let extQuestion7 = document.querySelector('#pool8');
var correct = new Audio('correct.mp3');
var wrong = new Audio('false.mp3');
extQuestion7.style.display = 'none';

btncorrectt8.addEventListener('click', () => btncorrectt8.style.backgroundColor = '#3cfd97');
btnwrong17.addEventListener('click', () => btnwrong17.style.backgroundColor = '#ff5c49');
btnwrong27.addEventListener('click', () => btnwrong27.style.backgroundColor = '#ff5c49');
btnwrong37.addEventListener('click', () => btnwrong37.style.backgroundColor = '#ff5c49');

if (btncorrectt8) btncorrectt8.onclick = function () {
    if (Object.isFrozen(btnscoree8)) { }
    else {
        extQuestion7.style.display = ''
        btnwrong17.style.backgroundColor = '#ff5c49'
        btnwrong27.style.backgroundColor = '#ff5c49'
        btnwrong37.style.backgroundColor = '#ff5c49'
        btnscoree8.style.borderColor = '#3cfd97'
        Object.freeze(btnscoree8)
        correct.play();
    }
}

if (btnwrong17) btnwrong17.onclick = function () {
    if (Object.isFrozen(btnscoree8)) { }
    else {
        btncorrectt8.style.backgroundColor = '#3cfd97'
        btnwrong27.style.backgroundColor = '#ff5c49'
        btnwrong37.style.backgroundColor = '#ff5c49'
        btnscoree8.style.borderColor = '#ff5c49'
        Object.freeze(btnscoree8)
        extQuestion7.style.display = ''
        wrong.play();
    }

};

if (btnwrong27) btnwrong27.onclick = function () {
    if (Object.isFrozen(btnscoree8)) { }
    else {
        btncorrectt8.style.backgroundColor = '#3cfd97'
        btnwrong37.style.backgroundColor = '#ff5c49'
        btnwrong17.style.backgroundColor = '#ff5c49'
        btnscoree8.style.borderColor = '#ff5c49'
        Object.freeze(btnscoree8)
        extQuestion7.style.display = ''
        wrong.play();
    }


};

if (btnwrong37) btnwrong37.onclick = function () {
    if (Object.isFrozen(btnscoree8)) { }
    else {
        extQuestion7.style.display = ''
        btncorrectt8.style.backgroundColor = '#3cfd97'
        btnwrong17.style.backgroundColor = '#ff5c49'
        btnwrong27.style.backgroundColor = '#ff5c49'
        btnscoree8.style.borderColor = '#ff5c49'
        Object.freeze(btnscoree8)
        wrong.play();
    }



};




