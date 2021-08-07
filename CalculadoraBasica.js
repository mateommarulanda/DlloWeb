/**
 * Reslizar una claculadora con unos datos entrantes
 * @author Mateo Martinez Marulanda
 * @version 1.0.0
 * 
 */

let numberOne = 0;
let numberTwo = 3;
let numberTree = 5;
let resultSuma, resultResta, resultMulti, resultDivi = 0;


console.log(numberOne);
console.log(numberTwo);
console.log(numberTree);

//Funciones

/**
 * 
 * @param {*} numberOne 
 * @param {*} numberTwo 
 * @param {*} numberTree 
 */
function sumaNumero (numberOne,numberTwo,numberTree)
{
    numberTree = numberOne + numberTwo + numberTree;

    return numberTree;
}

/**
 * 
 * @param {*} numberOne 
 * @param {*} numberTwo 
 * @param {*} numberTree 
 */
function restaNumero (numberOne,numberTwo,numberTree)
{
    resultResta = numberOne - numberTwo - numberTree;

    return resultResta;

}

/**
 * 
 * @param {*} numberOne 
 * @param {*} numberTwo 
 * @param {*} numberTree 
 */
function multiplicarNumero (numberTwo,numberTree)
{
    resultMulti= numberTwo * numberTree;

    return resultMulti;

}

/**
 * 
 * @param {*} numberOne 
 * @param {*} numberTwo 
 * @param {*} numberTree 
 */
function dividirNumero (numberTwo,numberTree){

    resultDivi = numberTwo / numberTree;

    return resultDivi;
}

console.log("El resultado de la suma entre el numero " +numberOne+ ", el numero " +numberTwo+ " y el numero " +numberTree+ " con un resultado de " + sumaNumero(numberOne, numberTwo, numberTree));
console.log("El resultado de la resta entre el numero " +numberOne+ " , el numero " +numberTwo+ " y el numero " +numberTree+ " con un resultado de " + restaNumero(numberOne, numberTwo, numberTree));
console.log("El resultado de la multiplicacion entre el numero " + numberTwo + " y el numero " + numberTree + " con un resultado de " + multiplicarNumero( numberTwo, numberTree));
console.log("El resultado de la division entre el numero " + numberTwo + " y el numero " + numberTree + " con un resultado de " + dividirNumero( numberTwo, numberTree));