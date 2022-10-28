let loginButton = document.querySelector('.login-button');
let loginPopup = document.querySelector('.login-popup');
let popupBack = document.querySelector('.page');

loginButton.addEventListener('click', showPopup);

function showPopup(evt){
    console.log(evt);
    evt.preventDefault();
    loginPopup.classList.toggle('show-popup');
    popupBack.classList.toggle('popup-backdrop');
}

let choiceButton = document.querySelector('.button');
let choicePopup = document.querySelector('.choice-popup');

choiceButton.addEventListener('click', showchoicePopup);

function showchoicePopup(evt){
    console.log(evt);
    evt.preventDefault();
    choicePopup.classList.toggle('show-choice-popup');
}