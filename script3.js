let btncorrectt3 = document.querySelector('#correct12');
let btnwrong12 = document.querySelector('#wrong12');
let btnwrong22 = document.querySelector('#wrong22');
let btnwrong32 = document.querySelector('#wrong32');
let btnscoree3 = document.querySelector('#one3');
let nextQuestionnn = document.querySelector('#pool3');
var correct = new Audio('correct.mp3');
var wrong = new Audio('false.mp3');
nextQuestionnn.style.display = 'none';

btncorrectt3.addEventListener('click', () => btncorrectt3.style.backgroundColor = '#3cfd97');
btnwrong12.addEventListener('click', () => btnwrong12.style.backgroundColor = '#ff5c49');
btnwrong22.addEventListener('click', () => btnwrong22.style.backgroundColor = '#ff5c49');
btnwrong32.addEventListener('click', () => btnwrong32.style.backgroundColor = '#ff5c49');

if (btncorrectt3) btncorrectt3.onclick = function () {
    if (Object.isFrozen(btnscoree3)) { }
    else {
        nextQuestionnn.style.display = ''
        btnwrong12.style.backgroundColor = '#ff5c49'
        btnwrong22.style.backgroundColor = '#ff5c49'
        btnwrong32.style.backgroundColor = '#ff5c49'
        btnscoree3.style.borderColor = '#3cfd97'
        Object.freeze(btnscoree3)
        correct.play();
    }
}

if (btnwrong12) btnwrong12.onclick = function () {
    if (Object.isFrozen(btnscoree3)) { }
    else {
        btncorrectt3.style.backgroundColor = '#3cfd97'
        btnwrong22.style.backgroundColor = '#ff5c49'
        btnwrong32.style.backgroundColor = '#ff5c49'
        btnscoree3.style.borderColor = '#ff5c49'
        Object.freeze(btnscoree3)
        nextQuestionnn.style.display = ''
        wrong.play();
    }

};

if (btnwrong22) btnwrong22.onclick = function () {
    if (Object.isFrozen(btnscoree3)) { }
    else {
        btncorrectt3.style.backgroundColor = '#3cfd97'
        btnwrong32.style.backgroundColor = '#ff5c49'
        btnwrong12.style.backgroundColor = '#ff5c49'
        btnscoree3.style.borderColor = '#ff5c49'
        Object.freeze(btnscoree3)
        nextQuestionnn.style.display = ''
        wrong.play();
    }


};

if (btnwrong32) btnwrong32.onclick = function () {
    if (Object.isFrozen(btnscoree3)) { }
    else {
        nextQuestionnn.style.display = ''
        btncorrectt3.style.backgroundColor = '#3cfd97'
        btnwrong12.style.backgroundColor = '#ff5c49'
        btnwrong22.style.backgroundColor = '#ff5c49'
        btnscoree3.style.borderColor = '#ff5c49'
        Object.freeze(btnscoree3)
        wrong.play();
    }



};




