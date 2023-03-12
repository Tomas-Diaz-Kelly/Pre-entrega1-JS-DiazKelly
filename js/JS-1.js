// alert('ingrese nombre y apellido ')
// function datosUsuario(){
//     let nombre = prompt('ingrese nombre')
//     let apellido = prompt('ingrese apellido')
// }


// function seleccionDeProductos(){
//     let sumaDeProductos = 0;

//     let continuarCompra = true 
//     while(continuarCompra){
//         let productoSeleccionado = parseInt(prompt('Seleccione un producto: 1:velas , 2:difusores , 3:perfuminas'));
//         switch (productoSeleccionado){
//             case 1:
//                 sumaDeProductos = sumaDeProductos + 1500
//                 break;
//             case 2:
//                 sumaDeProductos = sumaDeProductos + 1200
//                 break;
//             case 3:
//                 sumaDeProductos = sumaDeProductos + 1300
//                 break;
//             default:
//                 alert('el numero ingresado es erroneo')
//                 break;
//         }
//         alert('El total de la compra es de:' + sumaDeProductos)
        
//         let seguircomprando = parseInt(prompt('Quiere seguir realizando la compra? 1:Si 2:no'))
//         if (seguircomprando !== 1 ){
//             continuarCompra = false;
//         }else{
//             alert('gracias por tu compra')
//         }
//     }
// }


// datosUsuario()
// seleccionDeProductos()

// hasta aca la primer entrega


// segunda entrega

class Producto {
    constructor(){
        this.nombre = prompt('Ingrese el nombre del producto')
        this.precio = parseInt(prompt('Ingrese el precio del producto'))
    }
}


const stockProductos = []
console.log(stockProductos) // para ver que se agrego al array 
let seguirComprando = true
while(seguirComprando){
    let productoIngresado = new Producto()
    stockProductos.push(productoIngresado)

    let finalizaCompra = parseInt(prompt('Quiere continuar con la compra 1:Si 2:No'))
    if(finalizaCompra === 2){
        seguirComprando = false;
    }else{
        alert('puede continuar con su compra')
    }
}


function mostrarTotal(){
    let precioTotal = 0
    for (producto of stockProductos){
        precioTotal = precioTotal+ producto.precio
    }
    return precioTotal
}

alert('El precio total es ' + mostrarTotal() + ' ' + 'Gracias por su compra')


const buscar = stockProductos.find((prod)=>prod.nombre === 'velas')

console.log(buscar)
console.log(buscar.nombre)
console.log(buscar.precio)

const filtro = stockProductos.filter((prod)=>prod.precio === 200)

console.log(filtro)

