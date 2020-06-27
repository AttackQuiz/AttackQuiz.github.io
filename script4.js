let btncorrectt4 = document.querySelector('#correct13');
let btnwrong13 = document.querySelector('#wrong13');
let btnwrong23 = document.querySelector('#wrong23');
let btnwrong33 = document.querySelector('#wrong33');
let btnscoree4 = document.querySelector('#one4');
let nextQuestion3 = document.querySelector('#pool4');
var correct = new Audio('correct.mp3');
var wrong = new Audio('false.mp3');
nextQuestion3.style.display = 'none';

btncorrectt4.addEventListener('click', () => btncorrectt4.style.backgroundColor = '#3cfd97');
btnwrong13.addEventListener('click', () => btnwrong13.style.backgroundColor = '#ff5c49');
btnwrong23.addEventListener('click', () => btnwrong23.style.backgroundColor = '#ff5c49');
btnwrong33.addEventListener('click', () => btnwrong33.style.backgroundColor = '#ff5c49');

if (btncorrectt4) btncorrectt4.onclick = function () {
    if (Object.isFrozen(btnscoree4)) { }
    else {
        nextQuestion3.style.display = ''
        btnwrong13.style.backgroundColor = '#ff5c49'
        btnwrong23.style.backgroundColor = '#ff5c49'
        btnwrong33.style.backgroundColor = '#ff5c49'
        btnscoree4.style.borderColor = '#3cfd97'
        Object.freeze(btnscoree4)
        correct.play();
    }
}

if (btnwrong13) btnwrong13.onclick = function () {
    if (Object.isFrozen(btnscoree4)) { }
    else {
        btncorrectt4.style.backgroundColor = '#3cfd97'
        btnwrong23.style.backgroundColor = '#ff5c49'
        btnwrong33.style.backgroundColor = '#ff5c49'
        btnscoree4.style.borderColor = '#ff5c49'
        Object.freeze(btnscoree4)
        nextQuestion3.style.display = ''
        wrong.play();
    }

};

if (btnwrong23) btnwrong23.onclick = function () {
    if (Object.isFrozen(btnscoree4)) { }
    else {
        btncorrectt4.style.backgroundColor = '#3cfd97'
        btnwrong33.style.backgroundColor = '#ff5c49'
        btnwrong13.style.backgroundColor = '#ff5c49'
        btnscoree4.style.borderColor = '#ff5c49'
        Object.freeze(btnscoree4)
        nextQuestion3.style.display = ''
        wrong.play();
    }


};

if (btnwrong33) btnwrong33.onclick = function () {
    if (Object.isFrozen(btnscoree4)) { }
    else {
        nextQuestion3.style.display = ''
        btncorrectt4.style.backgroundColor = '#3cfd97'
        btnwrong13.style.backgroundColor = '#ff5c49'
        btnwrong23.style.backgroundColor = '#ff5c49'
        btnscoree4.style.borderColor = '#ff5c49'
        Object.freeze(btnscoree4)
        wrong.play();
    }



};




