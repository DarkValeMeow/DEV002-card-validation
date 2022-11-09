/*
Algoritmo de Luhn

 Mision y objetivo del algoritmo: Introducir una cadena de maximo 16 caracteres y retornar de salida si la tarjeta es valida o no.

1. Se identifican los numeros pares dentro de la cadena y se duplican.
2. Si el resultado de duplicar este numero es mas grande que nueve, se suman los digitos Ejemplo 8x2=16 → 1+6 = 7
3. Se hace la sumatoria de todos los digitos.
4. Si la sumatoria termina con un 0, entonces es un numero de tarjeta valido, de lo contrario no lo es. (Modulo 10 )

*/

function validator(){
  const tarjeta = document.getElementById("tarjeta").value;

  let arregloTarjeta=[];
  
  for(let i=0; i<tarjeta.length; i++){
    arregloTarjeta[i] = tarjeta[i];
  }

  



  console.log(arregloTarjeta)

}
export default validator;
    













































