let btncorrectt5 = document.querySelector('#correct14');
let btnwrong14 = document.querySelector('#wrong14');
let btnwrong24 = document.querySelector('#wrong24');
let btnwrong34 = document.querySelector('#wrong34');
let btnscoree5 = document.querySelector('#one5');
let nextQuestion4 = document.querySelector('#pool5');
var correct = new Audio('correct.mp3');
var wrong = new Audio('false.mp3');
nextQuestion4.style.display = 'none';

btncorrectt5.addEventListener('click', () => btncorrectt5.style.backgroundColor = '#3cfd97');
btnwrong14.addEventListener('click', () => btnwrong14.style.backgroundColor = '#ff5c49');
btnwrong24.addEventListener('click', () => btnwrong24.style.backgroundColor = '#ff5c49');
btnwrong34.addEventListener('click', () => btnwrong34.style.backgroundColor = '#ff5c49');

if (btncorrectt5) btncorrectt5.onclick = function () {
    if (Object.isFrozen(btnscoree5)) { }
    else {
        nextQuestion4.style.display = ''
        btnwrong14.style.backgroundColor = '#ff5c49'
        btnwrong24.style.backgroundColor = '#ff5c49'
        btnwrong34.style.backgroundColor = '#ff5c49'
        btnscoree5.style.borderColor = '#3cfd97'
        Object.freeze(btnscoree5)
        correct.play();
    }
}

if (btnwrong14) btnwrong14.onclick = function () {
    if (Object.isFrozen(btnscoree5)) { }
    else {
        btncorrectt5.style.backgroundColor = '#3cfd97'
        btnwrong24.style.backgroundColor = '#ff5c49'
        btnwrong34.style.backgroundColor = '#ff5c49'
        btnscoree5.style.borderColor = '#ff5c49'
        Object.freeze(btnscoree5)
        nextQuestion4.style.display = ''
        wrong.play();
    }

};

if (btnwrong24) btnwrong24.onclick = function () {
    if (Object.isFrozen(btnscoree5)) { }
    else {
        btncorrectt5.style.backgroundColor = '#3cfd97'
        btnwrong34.style.backgroundColor = '#ff5c49'
        btnwrong14.style.backgroundColor = '#ff5c49'
        btnscoree5.style.borderColor = '#ff5c49'
        Object.freeze(btnscoree5)
        nextQuestion4.style.display = ''
        wrong.play();
    }


};

if (btnwrong34) btnwrong34.onclick = function () {
    if (Object.isFrozen(btnscoree5)) { }
    else {
        nextQuestion4.style.display = ''
        btncorrectt5.style.backgroundColor = '#3cfd97'
        btnwrong14.style.backgroundColor = '#ff5c49'
        btnwrong24.style.backgroundColor = '#ff5c49'
        btnscoree5.style.borderColor = '#ff5c49'
        Object.freeze(btnscoree5)
        wrong.play();
    }



};




