let btncorrectt7 = document.querySelector('#correct16');
let btnwrong16 = document.querySelector('#wrong16');
let btnwrong26 = document.querySelector('#wrong26');
let btnwrong36 = document.querySelector('#wrong36');
let btnscoree7 = document.querySelector('#one7');
let extQuestion6 = document.querySelector('#pool7');
var correct = new Audio('correct.mp3');
var wrong = new Audio('false.mp3');
extQuestion6.style.display = 'none';

btncorrectt7.addEventListener('click', () => btncorrectt7.style.backgroundColor = '#3cfd97');
btnwrong16.addEventListener('click', () => btnwrong16.style.backgroundColor = '#ff5c49');
btnwrong26.addEventListener('click', () => btnwrong26.style.backgroundColor = '#ff5c49');
btnwrong36.addEventListener('click', () => btnwrong36.style.backgroundColor = '#ff5c49');

if (btncorrectt7) btncorrectt7.onclick = function () {
    if (Object.isFrozen(btnscoree7)) { }
    else {
        extQuestion6.style.display = ''
        btnwrong16.style.backgroundColor = '#ff5c49'
        btnwrong26.style.backgroundColor = '#ff5c49'
        btnwrong36.style.backgroundColor = '#ff5c49'
        btnscoree7.style.borderColor = '#3cfd97'
        Object.freeze(btnscoree7)
        correct.play();
    }
}

if (btnwrong16) btnwrong16.onclick = function () {
    if (Object.isFrozen(btnscoree7)) { }
    else {
        btncorrectt7.style.backgroundColor = '#3cfd97'
        btnwrong26.style.backgroundColor = '#ff5c49'
        btnwrong36.style.backgroundColor = '#ff5c49'
        btnscoree7.style.borderColor = '#ff5c49'
        Object.freeze(btnscoree7)
        extQuestion6.style.display = ''
        wrong.play();
    }

};

if (btnwrong26) btnwrong26.onclick = function () {
    if (Object.isFrozen(btnscoree7)) { }
    else {
        btncorrectt7.style.backgroundColor = '#3cfd97'
        btnwrong36.style.backgroundColor = '#ff5c49'
        btnwrong16.style.backgroundColor = '#ff5c49'
        btnscoree7.style.borderColor = '#ff5c49'
        Object.freeze(btnscoree7)
        extQuestion6.style.display = ''
        wrong.play();
    }


};

if (btnwrong36) btnwrong36.onclick = function () {
    if (Object.isFrozen(btnscoree7)) { }
    else {
        extQuestion6.style.display = ''
        btncorrectt7.style.backgroundColor = '#3cfd97'
        btnwrong16.style.backgroundColor = '#ff5c49'
        btnwrong26.style.backgroundColor = '#ff5c49'
        btnscoree7.style.borderColor = '#ff5c49'
        Object.freeze(btnscoree7)
        wrong.play();
    }



};




