/* CLASE 04/06/2024 */

// 1. Imprimir los nros del 1 al 100 con un bucle for
// bastic `` imprimir  ${}

/* Bucle for
for (let i = 1; i <= 100; i++){
    document.write(`${1} : `);

}
*/

// Bucle while
/*
let i = 1;
while(i <= 100){
    document.write(`${i} :`);
    i++;

}
*/

// Bucle Do while
// Diferencia entre while y do while
/*
let j = 0;
do {
    document.write(`${j} :`);
    j++;
}while(j <= 100)
*/

//Ejercicio

/* 2. Pedir al usuario que teclee un un nro entero 1 y 5, si
escribe algun nro que este fuera de este rango, debera pedir el 
numero nuevamente*/
/*
let min = 1, max = 5, numero = parseInt(prompt("Por favor teclee un numero del 1 al 5"));

while (numero < min || numero > max){
    numero = parseInt(prompt("Error teclee un numero entre 1 y 5"));

}
    document.write(numero)
*/

/* 3. Preguntar al usuario si desea continuar con el
programa. Si el usuario teclea n, el programa finaliza. 
Cualquier otro valor repetira la pregunta 

let respuesta;

while (respuesta != 'n' && respuesta !='N'){
    respuesta = prompt("Desea Continuar con el programa");
} 

document.write(respuesta)

alert("El programa ha finalizado")
*/

/* 4. Solicitar al usuario solicitar contraseña. Si la 
contraseña coincide con la clave definida por el sistema
imprimir un mensaje que diga "Acceso concedido" y si no
coincide devolvera "Acceso denegado", si el usuario falla 3 veces
retornaremos "Alerta intruso". Recomendaciones usar while,
if else*/

let contraseña, falla = 0, clave = "0305", msg;
while (contraseña != clave && falla < 3){
    contraseña = prompt("Por favor Ingrese contraseña");
    if (contraseña == clave){
         alert("Acceso concedido")
    }
    else{
         alert("Acceso denegado")
        falla++;
    }
}
if (falla == 3){
     alert("Alerta se ha detectado un Intruso");
}