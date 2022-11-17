import validator from './JS/validator.js';

const cardInput = document.getElementById('cardNum')
const replaceCardNum = document.getElementById('card-num')
const validate = document.getElementById('validate')


cardInput.addEventListener('input',function(event){
    let cardNumber = event.target.value;
    replaceCardNum.innerText=validator.maskify(cardNumber);
    let isValid = validator.isValid(cardNumber);
    if(isValid==true){
        validate.innerText="Válida";
    }else{
        validate.innerText="Inválida";
    }
})