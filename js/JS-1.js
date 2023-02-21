


const zapatillas=1 
const bermuda=2 
const remera=3 
const jean=4 
const gorro=5 
const medias=6 
alert('hola elegi con el numero el producto que quieras 1-zapatillas 2-bermuda 3-remera 4-jean 5-gorro 6-medias')
let numeroAIngresar = parseInt(prompt('ingrese el numero'))

if (numeroAIngresar === 1){
    alert('el valor de las zapatillas es de 1500')
}else if(numeroAIngresar === 2){
    alert('el valor de las bermuda es de 2000')
}else if (numeroAIngresar === 3){
    alert('el valor de las remera es de 2500')   
}else if (numeroAIngresar === 4){
    alert('el valor de las jean es de 3000')
}else if (numeroAIngresar === 5){
    alert('el valor de las gorro es de 950')
}else if (numeroAIngresar === 6){
    alert('el valor de las medias es de 380')
}else {
    alert('el numero ingresado esta mal')
}

