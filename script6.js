let btncorrectt6 = document.querySelector('#correct15');
let btnwrong15 = document.querySelector('#wrong15');
let btnwrong25 = document.querySelector('#wrong25');
let btnwrong35 = document.querySelector('#wrong35');
let btnscoree6 = document.querySelector('#one6');
let nextQuestion5 = document.querySelector('#pool6');
var correct = new Audio('correct.mp3');
var wrong = new Audio('false.mp3');
nextQuestion5.style.display = 'none';

btncorrectt6.addEventListener('click', () => btncorrectt6.style.backgroundColor = '#3cfd97');
btnwrong15.addEventListener('click', () => btnwrong15.style.backgroundColor = '#ff5c49');
btnwrong25.addEventListener('click', () => btnwrong25.style.backgroundColor = '#ff5c49');
btnwrong35.addEventListener('click', () => btnwrong35.style.backgroundColor = '#ff5c49');

if (btncorrectt6) btncorrectt6.onclick = function () {
    if (Object.isFrozen(btnscoree6)) { }
    else {
        nextQuestion5.style.display = ''
        btnwrong15.style.backgroundColor = '#ff5c49'
        btnwrong25.style.backgroundColor = '#ff5c49'
        btnwrong35.style.backgroundColor = '#ff5c49'
        btnscoree6.style.borderColor = '#3cfd97'
        Object.freeze(btnscoree6)
        correct.play();
    }
}

if (btnwrong15) btnwrong15.onclick = function () {
    if (Object.isFrozen(btnscoree6)) { }
    else {
        btncorrectt6.style.backgroundColor = '#3cfd97'
        btnwrong25.style.backgroundColor = '#ff5c49'
        btnwrong35.style.backgroundColor = '#ff5c49'
        btnscoree6.style.borderColor = '#ff5c49'
        Object.freeze(btnscoree6)
        nextQuestion5.style.display = ''
        wrong.play();
    }

};

if (btnwrong25) btnwrong25.onclick = function () {
    if (Object.isFrozen(btnscoree6)) { }
    else {
        btncorrectt6.style.backgroundColor = '#3cfd97'
        btnwrong35.style.backgroundColor = '#ff5c49'
        btnwrong15.style.backgroundColor = '#ff5c49'
        btnscoree6.style.borderColor = '#ff5c49'
        Object.freeze(btnscoree6)
        nextQuestion5.style.display = ''
        wrong.play();
    }


};

if (btnwrong35) btnwrong35.onclick = function () {
    if (Object.isFrozen(btnscoree6)) { }
    else {
        nextQuestion5.style.display = ''
        btncorrectt6.style.backgroundColor = '#3cfd97'
        btnwrong15.style.backgroundColor = '#ff5c49'
        btnwrong25.style.backgroundColor = '#ff5c49'
        btnscoree6.style.borderColor = '#ff5c49'
        Object.freeze(btnscoree6)
        wrong.play();
    }



};




