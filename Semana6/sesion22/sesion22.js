//var cuadro = document.getElementById("valor").value

//let number = 3;
while(number<=5){
    console.log(number);
    number += 1;
}

//let number = 0;
while(number<=100){
    if(number/2 == 0){
        console.log(number)
    }
}
//let number = 0;
while(number<= 100){
    console.log(number);
    number+=2;
}
//let number = 1;
while (number<=12){
    console.log(number)
    number+=2;
}
/*let number = 1;
while(number<=12){
    console.log(number);
    number ++;
}
let number = 0;
while(number<12){
    number ++;
    console.log(number);
}*/

//const paises = ["peru", "uruguay" ,"chile"]
let i=0;
while (paises.length > i){
    console.log(paises[i]);
    i = i+1;
}

// DO - WHILE
//Do es similar al while, pero lo que está dentro de los corchetes va a pasar minimo una vez y
//si segui cumpliendo va a seguir mostrando.

let i= 0;
do{
    i += 1;
    console.log(i);
}while(i<5);

//Funcion PROMPT
//Expresiones Regulares

// ^ es con lo que se debe empezar, el & delimita el fin
// todos los patrones deben ser entre //
// Es igual = test
const patron =/hola[0-9]mundo/
const patron =/hola[0-9]+mundo/
const patron =/^hola&/
const patron =/^[1-8]&/ /*aqui indica que no importa el fin, y puede iniciar por cualquier numero mayor o igual que 1*/
const patron =/^[1-8]+&/
const patron = /hola/
let dato;
do{
    dato = prompt('Ingresa el valor:')
}while(!patron.test(dato));

do {
    console.log('Hello world');
  } while (2 > 3);

  for (let i = 0; i <= 10; i++) {
    if (i == 0) {
      continue;
    } else {
      console.log(i);
    }
  }


  for (let number = 1; number < 8; number = number * 3) {
    console.log(number);
  }

// VERSION DEL PROFE


/*
let number = 0;
while(number <= 5) {  
  console.log(number);
  number += 1; //explicar a las estudiantes que esta linea de lee de izquierda a derecha  
}
*/

//comentario de una linea

/*
comentario
de
varias 
lineas
*/

/*

//solucion reto 1
let number = 0;
while (number <= 100) {
  console.log(number);
  number += 2;
}
// → 0
// → 2
//   … etcetera hasta 100
*/
/*
//solucion reto 2
let number = 1;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
// → 1
// → 3
//   … etcetera hasta 11
8/
*/
/*
////solucion reto 3
let number = 1;
while (number <= 12) {
  console.log(number);
  number = number + 1;
}

// → 1
// → 2
//   … etcetera hasta 12
*/

/*
//recorriendo arreglos
const paises = ['peru', 'uruguay', 'chile','venezuela'];
let i = 0;
while (i < paises.length) {
  
  console.log(paises[i]);
  i = i+1;
}

*/
/*

let i = 0;
do {
  i = i + 1;
  console.log(i);
} while (i < 5);

*/


//ejercicio de expresiones regulares
//const patron = /hola/;
//const patron = /hola[0-9]mundo/;
//const patron = /hola[0-9]+mundo/;
//const patron = /^hola$/;
//const patron = /^[0-9]+$/;
let dato;
do {
  dato = prompt('Ingresa el valor: ');
} while(!patron.test(dato));
