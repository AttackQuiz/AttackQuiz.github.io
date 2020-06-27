let btncorrectt9 = document.querySelector('#correct18');
let btnwrong18 = document.querySelector('#wrong18');
let btnwrong28 = document.querySelector('#wrong28');
let btnwrong38 = document.querySelector('#wrong38');
let btnscoree9 = document.querySelector('#one9');
let extQuestion8 = document.querySelector('#pool9');
var correct = new Audio('correct.mp3');
var wrong = new Audio('false.mp3');
extQuestion8.style.display = 'none';

btncorrectt9.addEventListener('click', () => btncorrectt9.style.backgroundColor = '#3cfd97');
btnwrong18.addEventListener('click', () => btnwrong18.style.backgroundColor = '#ff5c49');
btnwrong28.addEventListener('click', () => btnwrong28.style.backgroundColor = '#ff5c49');
btnwrong38.addEventListener('click', () => btnwrong38.style.backgroundColor = '#ff5c49');

if (btncorrectt9) btncorrectt9.onclick = function () {
    if (Object.isFrozen(btnscoree9)) { }
    else {
        extQuestion8.style.display = ''
        btnwrong18.style.backgroundColor = '#ff5c49'
        btnwrong28.style.backgroundColor = '#ff5c49'
        btnwrong38.style.backgroundColor = '#ff5c49'
        btnscoree9.style.borderColor = '#3cfd97'
        Object.freeze(btnscoree9)
        correct.play();
    }
}

if (btnwrong18) btnwrong18.onclick = function () {
    if (Object.isFrozen(btnscoree9)) { }
    else {
        btncorrectt9.style.backgroundColor = '#3cfd97'
        btnwrong28.style.backgroundColor = '#ff5c49'
        btnwrong38.style.backgroundColor = '#ff5c49'
        btnscoree9.style.borderColor = '#ff5c49'
        Object.freeze(btnscoree9)
        extQuestion8.style.display = ''
        wrong.play();
    }

};

if (btnwrong28) btnwrong28.onclick = function () {
    if (Object.isFrozen(btnscoree9)) { }
    else {
        btncorrectt9.style.backgroundColor = '#3cfd97'
        btnwrong38.style.backgroundColor = '#ff5c49'
        btnwrong18.style.backgroundColor = '#ff5c49'
        btnscoree9.style.borderColor = '#ff5c49'
        Object.freeze(btnscoree9)
        extQuestion8.style.display = ''
        wrong.play();
    }


};

if (btnwrong38) btnwrong38.onclick = function () {
    if (Object.isFrozen(btnscoree9)) { }
    else {
        extQuestion8.style.display = ''
        btncorrectt9.style.backgroundColor = '#3cfd97'
        btnwrong18.style.backgroundColor = '#ff5c49'
        btnwrong28.style.backgroundColor = '#ff5c49'
        btnscoree9.style.borderColor = '#ff5c49'
        Object.freeze(btnscoree9)
        wrong.play();
    }



};




