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

// Hasta aca la Primer entrega


// Segunda entrega

// class Producto {
//     constructor(){
//         // this.nombre = prompt('Ingrese el nombre del producto')
//         // this.precio = parseInt(prompt('Ingrese el precio del producto'))
//     }
// }


// const stockProductos = []
// console.log(stockProductos) // para ver que se agrego al array
// let seguirComprando = true
// while(seguirComprando){
//     let productoIngresado = new Producto()
//     stockProductos.push(productoIngresado)

//     let finalizaCompra = parseInt(prompt('Quiere continuar con la compra 1:Si 2:No'))
//     if(finalizaCompra === 2){
//         seguirComprando = false;
//     }else{
//         alert('puede continuar con su compra')
//     }
// }


// function mostrarTotal(){
//     let precioTotal = 0
//     for (producto of stockProductos){
//         precioTotal = precioTotal+ producto.precio
//     }
//     return precioTotal
// }

// alert('El precio total es ' + mostrarTotal() + ' ' + 'Gracias por su compra')


// const buscar = stockProductos.find((prod)=>prod.nombre === 'velas')

// console.log(buscar)
// console.log(buscar.nombre)
// console.log(buscar.precio)

// const filtro = stockProductos.filter((prod)=>prod.precio === 200)

// console.log(filtro)

// Hasta aca la segunda entrega

// Tercer entrega

// let guardarNombre = localStorage.getItem('nombre')

// if(guardarNombre){
//     alert(`bienvenido ${guardarNombre}` )
// }else{
//     let nombre = prompt('ingrese su nombre')
//     localStorage.setItem('nombre',nombre);
// }

// const producto1 = {id: 2, producto:'arroz'};

// const enJson = JSON.stringify(producto1);
// localStorage.setItem("producto1", enJson );

// console.log(enJson);
// console.log(typeof enJson);
// let productoLocalStorage = localStorage.getItem("producto1");
// productoLocalStorage = JSON.parse(productoLocalStorage);
// console.log(productoLocalStorage)
// console.log(typeof productoLocalStorage)


// //almacenamiento
// const almacenarLocalStorage = (clave, valor) => { localStorage.setItem(clave, valor)};
// for (const producto of productos){
//     almacenarLocalStorage(producto.id, JSON.stringify(producto));
// }
// almacenarLocalStorage("listarProductos", JSON.stringify(productos));


// //metodo para mostrar
// const mostrarLocalStorage = (clave) => { console.log(JSON.parse(localStorage.getItem(clave))) };
// for (const producto of productos){
//     mostrarLocalStorage(producto.id);
// }
// mostrarLocalStorage("listarProductos");


const productos = [
    {id:1,nombre:'Difusores',precio:600},
    {id:2,nombre:'Velas',precio:800},
    {id:3,nombre:'Perfuminas',precio:500},
    {id:4,nombre:'Bombones',precio:350},
]
const carrito = []
console.log(carrito)

// const clickBoton = document.getElementById('boton')
//     clickBoton.addEventListener('click',respuestaClick)


function listaDeProductos (){
    for( const producto of productos){
    
        let boxProductos = document.createElement("div")
        boxProductos.innerHTML = (
            `
            <h3>${producto.nombre}</h3>
            <h3>$ ${producto.precio}</h3>
            <button id=${producto.id} class="btn"> + </button>
            `
            )

            boxProductos.className='card'
            let lista = document.getElementById('listProductos')
            lista.append(boxProductos);
            let botonAgregar = document.getElementById(`${producto.id}`)
            botonAgregar.addEventListener('click',agregarAlCarrito)
            
        }

}

function agregarAlCarrito(e){
    let id = Number(e.target.getAttribute('id'))
    let agregoProductoAlCarrito = productos.find((producto)=>producto.id === id)
    
    agregoProductoAlCarrito.push(carrito)



    let nuevaVariable = document.createElement('div') 
    nuevaVariable.innerHTML =(
        `
        <h3> ${agregoProductoAlCarrito.nombre} </h3>
        <h3> ${agregoProductoAlCarrito.precio} </h3>
        
        
        
        `
        )

        let muestroCarrito = document.getElementById("carrito")
        muestroCarrito.append(nuevaVariable)
        // console.log(muestroCarrito)
}






listaDeProductos ()

// function respuestaClick(){
// console.log(respuestaClick)
// }


// function respuestaClick(e){
//     // e.preventDefault();
//     let nodo = document.getElementById('contenedor')
//     nodo.innerHTML = `<div>el producto es ${productos.nombre}</div>`

// }