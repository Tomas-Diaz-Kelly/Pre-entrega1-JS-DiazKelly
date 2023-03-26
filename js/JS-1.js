// Tercer entrega

const productos = [
    {id:1,nombre:'Difusores',precio:600},
    {id:2,nombre:'Velas',precio:800},
    {id:3,nombre:'Perfuminas',precio:500},
    {id:4,nombre:'Bombones',precio:350},
]

const carrito = JSON.parse(localStorage.getItem('carrito')) || []
const contenedorCarrito = document.getElementById("carrito")




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
    let producto = productos.find((producto)=>producto.id === id)
    carrito.push(producto)
    renderizarCarrito()
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

const renderizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach(producto =>{
        let productoEnCarrito = carrito.find((producto)=>producto.id === producto.id)
        let indiceDelProducto = carrito.indexOf(productoEnCarrito)
        
        carrito[indiceDelProducto].cantidad+=1

    const nuevaVariable = document.createElement('div') 
    nuevaVariable.innerHTML =
        `
        <h3> ${producto.nombre} </h3>
        <h3> ${producto.precio} </h3>       
        <h3>${carrito[indiceDelProducto]}</h3>
        `
    contenedorCarrito.append(nuevaVariable)
})
}



listaDeProductos ()

renderizarCarrito()
