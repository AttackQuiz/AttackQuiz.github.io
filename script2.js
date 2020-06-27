let btncorrectt = document.querySelector('#correct1');
let btnwrong1 = document.querySelector('#wrong1');
let btnwrong2 = document.querySelector('#wrong2');
let btnwrong3 = document.querySelector('#wrong3');
let btnscoree = document.querySelector('#one2');
let nextQuestionn = document.querySelector('#pool2');
var correct = new Audio('correct.mp3');
var wrong = new Audio('false.mp3');
nextQuestionn.style.display = 'none';

btncorrectt.addEventListener('click', () => btncorrectt.style.backgroundColor = '#3cfd97');
btnwrong1.addEventListener('click', () => btnwrong1.style.backgroundColor = '#ff5c49');
btnwrong2.addEventListener('click', () => btnwrong2.style.backgroundColor = '#ff5c49');
btnwrong3.addEventListener('click', () => btnwrong3.style.backgroundColor = '#ff5c49');

if (btncorrectt) btncorrectt.onclick = function () {
    if (Object.isFrozen(btnscoree)) { }
    else {
        nextQuestionn.style.display = ''
        btnwrong1.style.backgroundColor = '#ff5c49'
        btnwrong2.style.backgroundColor = '#ff5c49'
        btnwrong3.style.backgroundColor = '#ff5c49'
        btnscoree.style.borderColor = '#3cfd97'
        Object.freeze(btnscoree)
        correct.play();
    }
}

if (btnwrong1) btnwrong1.onclick = function () {
    if (Object.isFrozen(btnscoree)) { }
    else {
        btncorrectt.style.backgroundColor = '#3cfd97'
        btnwrong2.style.backgroundColor = '#ff5c49'
        btnwrong3.style.backgroundColor = '#ff5c49'
        btnscoree.style.borderColor = '#ff5c49'
        Object.freeze(btnscoree)
        nextQuestionn.style.display = ''
        wrong.play();
    }

};

if (btnwrong2) btnwrong2.onclick = function () {
    if (Object.isFrozen(btnscoree)) { }
    else {
        btncorrectt.style.backgroundColor = '#3cfd97'
        btnwrong3.style.backgroundColor = '#ff5c49'
        btnwrong1.style.backgroundColor = '#ff5c49'
        btnscoree.style.borderColor = '#ff5c49'
        Object.freeze(btnscoree)
        nextQuestionn.style.display = ''
        wrong.play();
    }


};

if (btnwrong3) btnwrong3.onclick = function () {
    if (Object.isFrozen(btnscoree)) { }
    else {
        nextQuestionn.style.display = ''
        btncorrectt.style.backgroundColor = '#3cfd97'
        btnwrong1.style.backgroundColor = '#ff5c49'
        btnwrong2.style.backgroundColor = '#ff5c49'
        btnscoree.style.borderColor = '#ff5c49'
        Object.freeze(btnscoree)
        wrong.play();
    }



};




