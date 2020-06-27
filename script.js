let btncorrect = document.querySelector('#correct');
let btnwrong = document.querySelector('#wrong');
let btnwronge = document.querySelector('#wronge');
let btnwrongs = document.querySelector('#wrongs');
let btnten = document.querySelector('#one')
let nextQuestion = document.querySelector('#pool')

var correct = new Audio('correct.mp3')
var wrong = new Audio('false.mp3')

nextQuestion.style.display = 'none'

btncorrect.addEventListener('click', () => btncorrect.style.backgroundColor = '#3cfd97');
btnwrong.addEventListener('click', () => btnwrong.style.backgroundColor = '#ff5c49');
btnwronge.addEventListener('click', () => btnwronge.style.backgroundColor = '#ff5c49');
btnwrongs.addEventListener('click', () => btnwrongs.style.backgroundColor = '#ff5c49');

if (btncorrect) btncorrect.onclick = function () {
    if (Object.isFrozen(btnten)) { }
    else {
        btnwrong.style.backgroundColor = '#ff5c49'
        btnwronge.style.backgroundColor = '#ff5c49'
        btnwrongs.style.backgroundColor = '#ff5c49'
        btnten.style.borderColor = '#3cfd97'
        Object.freeze(btnten)
        nextQuestion.style.display = ''
        correct.play();
    }

}

if (btnwrong) btnwrong.onclick = function () {
    if (Object.isFrozen(btnten)) { }
    else {
        btncorrect.style.backgroundColor = '#3cfd97'
        btnwronge.style.backgroundColor = '#ff5c49'
        btnwrongs.style.backgroundColor = '#ff5c49'
        btnten.style.borderColor = '#ff5c49'
        Object.freeze(btnten)
        nextQuestion.style.display = ''
        wrong.play();
    }

};

if (btnwrongs) btnwrongs.onclick = function () {
    if (Object.isFrozen(btnten)) { }
    else {
        btncorrect.style.backgroundColor = '#3cfd97'
        btnwronge.style.backgroundColor = '#ff5c49'
        btnwrong.style.backgroundColor = '#ff5c49'
        btnten.style.borderColor = '#ff5c49'
        Object.freeze(btnten)
        nextQuestion.style.display = ''
        wrong.play();
    }


};

if (btnwronge) btnwronge.onclick = function () {
    if (Object.isFrozen(btnten)) { }
    else {
        btncorrect.style.backgroundColor = '#3cfd97'
        btnwrong.style.backgroundColor = '#ff5c49'
        btnwrongs.style.backgroundColor = '#ff5c49'
        btnten.style.borderColor = '#ff5c49'
        Object.freeze(btnten)
        nextQuestion.style.display = ''
        wrong.play();
    }


};

