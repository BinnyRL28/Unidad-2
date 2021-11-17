// el tex += i es igual a decir text = text + i
let text = "";
for(let i=0; i<10; i++){
    text += i + "<br>";
    console.log(text);
}
document.getElementById("demo").innerHTML = text;
// <br> es para saltar de espacio
// innerHTML es para modificar

const cars=["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]
for(let i=0; i<cars.length; i++){
    text += cars[i] + "<br>";
}
document.getElementById() = text

//mientras n sea menor que 3 haz... aqui solo puede ir una condicion
let n=0;
while(n<3){
    n++;
    alert(n);
}
//influye mucho el orden en el que lo pones, 
//si primero es el incremento y despues el alert entonces el maximo valor que se muestra seria 3,
//si es la reves y primero es la alert y despues el incremento entonces el maximo valor alertado seria 2;

for(var a=20; a>=0; a-=2){
    console.log(a)
}
