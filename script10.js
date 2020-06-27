let btncorrectt10 = document.querySelector('#correct19');
let btnwrong19 = document.querySelector('#wrong19');
let btnwrong29 = document.querySelector('#wrong29');
let btnwrong39 = document.querySelector('#wrong39');
let btnscoree10 = document.querySelector('#one10');
let extQuestion9 = document.querySelector('#pool10');
var correct = new Audio('correct.mp3');
var wrong = new Audio('false.mp3');
extQuestion9.style.display = 'none';

btncorrectt10.addEventListener('click', () => btncorrectt10.style.backgroundColor = '#3cfd97');
btnwrong19.addEventListener('click', () => btnwrong19.style.backgroundColor = '#ff5c49');
btnwrong29.addEventListener('click', () => btnwrong29.style.backgroundColor = '#ff5c49');
btnwrong39.addEventListener('click', () => btnwrong39.style.backgroundColor = '#ff5c49');

if (btncorrectt10) btncorrectt10.onclick = function () {
    if (Object.isFrozen(btnscoree10)) { }
    else {
        extQuestion9.style.display = ''
        btnwrong19.style.backgroundColor = '#ff5c49'
        btnwrong29.style.backgroundColor = '#ff5c49'
        btnwrong39.style.backgroundColor = '#ff5c49'
        btnscoree10.style.borderColor = '#3cfd97'
        Object.freeze(btnscoree10)
        correct.play();
    }
}

if (btnwrong19) btnwrong19.onclick = function () {
    if (Object.isFrozen(btnscoree10)) { }
    else {
        btncorrectt10.style.backgroundColor = '#3cfd97'
        btnwrong29.style.backgroundColor = '#ff5c49'
        btnwrong39.style.backgroundColor = '#ff5c49'
        btnscoree10.style.borderColor = '#ff5c49'
        Object.freeze(btnscoree10)
        extQuestion9.style.display = ''
        wrong.play();
    }

};

if (btnwrong29) btnwrong29.onclick = function () {
    if (Object.isFrozen(btnscoree10)) { }
    else {
        btncorrectt10.style.backgroundColor = '#3cfd97'
        btnwrong39.style.backgroundColor = '#ff5c49'
        btnwrong19.style.backgroundColor = '#ff5c49'
        btnscoree10.style.borderColor = '#ff5c49'
        Object.freeze(btnscoree10)
        extQuestion9.style.display = ''
        wrong.play();
    }


};

if (btnwrong39) btnwrong39.onclick = function () {
    if (Object.isFrozen(btnscoree10)) { }
    else {
        extQuestion9.style.display = ''
        btncorrectt10.style.backgroundColor = '#3cfd97'
        btnwrong19.style.backgroundColor = '#ff5c49'
        btnwrong29.style.backgroundColor = '#ff5c49'
        btnscoree10.style.borderColor = '#ff5c49'
        Object.freeze(btnscoree10)
        wrong.play();
    }



};




