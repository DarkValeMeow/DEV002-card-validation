/*
Algoritmo de Luhn

 Mision y objetivo del algoritmo: Introducir una cadena de maximo 16 caracteres y retornar de salida si la tarjeta es valida o no.

1. Se identifican los numeros pares dentro de la cadena y se duplican.
2. Si el resultado de duplicar este numero es mas grande que nueve, se suman los digitos Ejemplo 8x2=16 → 1+6 = 7
3. Se hace la sumatoria de todos los digitos.
4. Si la sumatoria termina con un 0, entonces es un numero de tarjeta valido, de lo contrario no lo es. (Modulo 10 )

*/
const validator = {
  isValid: (cardNumber) => {
    if (cardNumber.length == 16) {
      //Se crea un arreglo vacio para ser rellenado con la tarjeta
      let creditCardNumber = [];
      //Se evalua si el campo esta rellenado con solamente numeros, de lo contrario soltara una alerta solicitando el llenado con numeros

      //Funcion interna para determinar si la cadena de texto donde va nuestra tarjeta solamente recibe numeros, retorna verdadero si solo hay numeros en la cadena
      // y retorna falso si hay algun punto, letra o caracter que no sea un numero
<<<<<<< HEAD
      if (/^\d+$/.test(cardNumber)) {//
        for (let i = 0; i < cardNumber.length; i++) {
          creditCardNumber[i] = parseInt(cardNumber[i]);
=======
      if (/^\d+$/.test(cardNumber)) {
        for (let i = 0; i < cardNumber.length; i++) {
          creditCardNumber[i] = parseInt(creditCardNumber[i]);
>>>>>>> ba1d3c97cd6a2d56cf3bfe2b0f682d3788ef054d
        }

        //Se hace la variable para almacenar la sumatoria
        let sumatoria = 0;

        //Ciclo for para poder acceder a las posiciones del arreglo generado por la cadena de texto
        for (let index = 0; index < creditCardNumber.length; index++) {
          /* 
          Variable de control del ciclo index, se inicializa en 0 por ser el 
          inicio del arreglo y termina hasta la posicion 15 (longitud del arreglo), aumenta en 1 con cada iteracion    
          */
          if (index % 2 == 0) { //Se buscan las posiciones pares del arreglo evaluando si son multiplos de 2.
            creditCardNumber[index] *= 2 //Se duplica el elemento del arreglo en la posicion par dada por la variable index haciendo caso al algoritmo de Luhn 
            //Ejemplo numeroTarjeta[0] ← La posicion 0 del arreglo, numeroTarjeta[0]*=2 → numeroTarjeta[0] = numeroTarjeta[0]*2 
            //Con numeros en lugar de algebra numeroTarjeta[0] = 2, por lo tanto numeroTarjeta[0] = 2*2=4

            //Reevaluar nuestro numero para hacer el segundo paso del algoritmo, es decir, partirlo y sumarlo en caso de que sea mayor a 9

            if (creditCardNumber[index] > 9) {
              //Crear una variable temporal que almacene el numero en la posicion del indice, convertirlo en cadena y separarlos
              let numTemporal = creditCardNumber[index].toString().split('')
              //Se convierten el arreglo de cadenas en arreglo de numeros
              numTemporal = numTemporal.map(Number)
              //Sumar los digitos y reemplazar el valor original en el arreglo por la suma
              const suma = parseInt(numTemporal[0] + numTemporal[1])
              creditCardNumber[index] = suma
            }
          }
          //Se almacena la sumatoria
          sumatoria = sumatoria + creditCardNumber[index]
        }
        //se evalua que la sumatoria sea multiplo de 10, si es entonces retornar verdadero, de lo contrario retornar falso
        if (sumatoria % 10 == 0) {
          return true
        } else return false

      } else {
<<<<<<< HEAD
        return false
      }
    } else {
      return false
=======
        alert("Por favor introduzca solamente numeros enteros")
      }
    } else {
      alert("Debe completar el total de 16 digitos")
>>>>>>> ba1d3c97cd6a2d56cf3bfe2b0f682d3788ef054d
    }

  },

  maskify: (cardNumber) =>{
    if(cardNumber.length>4){
      //
    }
  }

}
export default validator;
