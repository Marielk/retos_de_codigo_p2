// ejercicio 1, crea la funcion que reciba por parametro 2 string y devuelva el promedio de la longitud de ambos string
let string1 = "Mariel Quezada";
let string2 =  "Rodrigo Vilches"; 

const computeAverageLengthOfWords = (frase1, frase2) => {
 let sizeOne = string1.length;
 console.log(sizeOne);
 let sizeTwo = string2.length;
 console.log(sizeTwo); 
 return (sizeOne + sizeTwo) %2; 
}

console.log(computeAverageLengthOfWords(string1, string2));

// ejercicio 2, crea la funcion getNthElement. que reciba 2 parametros un array y un numero entero, la funcion debe buscar que hay en ese indice del array (el indice q es igual al numero entero)
const arr = ["1", "2", "3", "4", "5"];
const numEntero = 3; 

const getNthElement = (arr, numEntero) => {
  let position = arr[numEntero]; 
  return position; 
};

console.log(getNthElement(arr, numEntero));

// Ejercicio 3, crea una funcion que al pasarle un string con doble espacio entremedio, la devuelva con espacios normales

const stringDouble = "string  with  double  spaces"; 

const convertDoubleSpaceToSingle = () => {
  let stringSimple = stringDouble.split(" "); 
  console.log(stringSimple); 
  return stringSimple.join(" "); 
}; 

console.log(convertDoubleSpaceToSingle(stringDouble)); 

//Ejercicio 4, crea una funcion que valide nombre y clave de usuario, la primera si es mayor a 3 caracteres, sera true, y la segunda minimo 8
let userName = "Mariel"; 
let password = "miclave1234";

const areValidCredentials = () => {
  let sizeUserName = userName.length;
  let sizePassword = password.length; 
  if (sizeUserName > 3 && sizePassword >= 8) {
    return true; 
  } else { return false; }
};

console.log(areValidCredentials(userName, password)); 