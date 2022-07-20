
let numero= parseInt (prompt("ingrese un numero: "))

while (isNaN(numero)) { 
    numero= parseInt (prompt("No ingresaste un numero, intente nuevamente: "))
    
}
for (let i = 0; i <= 10; i++) {
    let resultado = numero*i
    console.log(numero+" x "+i+" = "+resultado)
} 