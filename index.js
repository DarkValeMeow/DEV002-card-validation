//Se importa el validator desde su respectivo archivo para darle uso
import validator from './JS/validator.js';

//Se crean los los selectors del DOM para obtener los datos del sitio web mediante las ids que contienen cada componente que hace uso de codigo de javascript
const cardInput = document.getElementById('cardNum')  //Selector para obtener el numero de la tarjeta que el usuario ingresa
const replaceCardNum = document.getElementById('card-num') //Selector para reemplazar el numero que el usuario insertó haciendo uso de la función maskify
const validate = document.getElementById('validate') // Selector para poder generar el texto que especifique si la tarjeta ingresada por el usuario es válida o no

/*
 Se crea un listener mediante el selector del numero de la tarjeta de tipo input y hace uso de una función que recibe
 un evento para poder realizar el reemplazo y procesamiento de la información
*/
cardInput.addEventListener('input',function(event){ 
    let cardNumber = event.target.value; // Se crea una variable que almacene el valor del input el cual es el numero de la tarjeta.
    // Se hace uso del selector para reemplazar el texto de la tarjeta haciendo uso de la función maskify proveniente de validator
    replaceCardNum.innerText=validator.maskify(cardNumber); 
    let isValid = validator.isValid(cardNumber); // Se crea variable para corraborar el valor que retorna la función isValid al enviarle el numero de la tarjeta.
    
    // Se evaLúa el valor de isValid, si es verdadero retornar el texto "Valida" de lo contrario "Invalida"
    if(isValid==true){
        validate.innerText="Válida"; //Insertar el texto en HTML con la leyenda "válida" al campo que use el selector validate en el código
    }else{
        validate.innerText="Inválida"; //Insertar el texto en HTML con la leyenda "válida" al campo que use el selector validate en el código
    }
})

