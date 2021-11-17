//BUCLES  puede ser for, do y while
//Empezaremos por for
/*for(expresion incial; expresion condicional; expresion de actualizacion){
    instruccion 1;
    instruccion 2;
    ...
    instrucciones navegarSiguiente;
}*/
//Bucle va a imprmir todos los valores hasta que la condicion ya no cumpla

var i= 0;
for(i;i<10; i++) {
    alert(i);
    console.log(i)
}
for(var a=1; a<=20; a++){
    alert(a)
    console.log(a)
}
for(var a=20; a>=0; a--){
    console.log(a)
}
//se pone a+=2 porque es como que el a+2 solo le suma pero al aire, el igual es para agregar ese valor sumado a la variable a
for(var a=1; a<=10; a+=2){
    console.log(a)
}
for(var a=20; a>=0; a-=2){
    console.log(a)
}
//el ultimo valor siempre va a ser el proximo en la secuencia para que no se cumpla y pare

var cars=["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]
var cantidad= cars.length

for (i=0; cantidad<6; i++){
    console.log(cars[i])
}