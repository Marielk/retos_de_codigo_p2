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

// Ejercicio 5, crear una funcion que busque dentro de un array, que numeros al sumarse dan como resultado un numero especifico.
const numbers = [3, 34, 4, 12, 5, 2];
const result = 9;   

const findPairForSum = ((numbers, result) => { 
 let okNumbers = [];  
 const compareSum = ((a, b) => {
 if (a + b === result) {okNumbers.push(a, b)} 
 return okNumbers; })
});
numbers.filter(compareSum(a, b));

console.log(findPairForSum(numbers, result)); 

/*nst findPairForSum = ((array, num)=>{
  let result=[];
  const compareSum=((a,b)=>{
      if(a+b===num){
          result.push(a,b);
      }
  });
  array.filter(compareSum);
  return result;
}); */ 

//ejercicio 6 crear una funcion llamada "filterOddElements" que devuelva solo los numeros impares de un array

const numbersArr = [1, 2, 3, 4, 5];
let numImpar = [];
const filterOddElements = ((arr) => {
  arr.forEach(num => {
    if(num % 2 !== 0) {
      numImpar.push(num);
    }  
  });
  return numImpar; 
})

console.log(filterOddElements(numbersArr))

//ejercicio 7 crea una funcion llamada findShortestWordAmongMixedElements, que devuelva la cadena mas corta dentro de un array de strings
const strArr = [4, 'two', 2, 'three']; 
let shortest = []; 
const findShortestWordAmongMixedElements = ((arr) => {
  const newArr = arr.filter(elem => typeof elem == 'string');
    for(let i = 0; i< newArr.length; i++){
      if(newArr[i].length < newArr[i++].length){
        shortest = newArr[i];
      } 
    }   
  return shortest;
})
console.log(findShortestWordAmongMixedElements(strArr));

//ejercicio 8 crea una funcion getLongestWordOfMixedElements que devuelve la cadena mas larga
const strArr2 = [3, 'word', 5, 'up', 3, 1];
let longest = [];
const getLongestWordOfMixedElements = ((arr) => {
  const newArr = arr.filter(elem => typeof elem == 'string');
  newArr.forEach(palabra => {
    if(longest.length < palabra.length){
      longest = palabra;
    }
  })
  return longest; 
})
console.log(getLongestWordOfMixedElements(strArr2));