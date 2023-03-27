// Tercer entrega


const productos = [
    {id:1,nombre:'Difusores',precio:600},
    {id:2,nombre:'Velas',precio:800},
    {id:3,nombre:'Perfuminas',precio:500},
    {id:4,nombre:'Bombones',precio:350},
]

const carrito = JSON.parse(localStorage.getItem('carrito')) || []
const contenedorCarrito = document.getElementById("carrito")
const contenedorTotal = document.getElementById("total");


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
    let productoEnCarrito = carrito.find((producto)=>producto.id === id)
  
    if (productoEnCarrito) {
      productoEnCarrito.cantidad += 1;
      document.getElementById(`producto${productoEnCarrito.id}`).querySelector('h3:last-of-type').textContent = `Cantidad: ${productoEnCarrito.cantidad}`;
    } else {
      let productoConCantidad = {...producto, cantidad: 1};
      carrito.push(productoConCantidad);
  
      let nuevaVariable = document.createElement('div');
      nuevaVariable.innerHTML = `
        <h3>${productoConCantidad.nombre}</h3>
        <h3>$ ${productoConCantidad.precio}</h3>
        <h3>Cantidad: ${productoConCantidad.cantidad}</h3>
        <h3>Total: $ ${productoConCantidad.precio * productoConCantidad.cantidad}</h3>
        `;
        nuevaVariable.setAttribute('id',`producto${productoConCantidad.id}`);
        contenedorCarrito.append(nuevaVariable);
    }
  
    localStorage.setItem("carrito", JSON.stringify(carrito));
}




const renderizarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach((producto) => {
        const nuevaVariable = document.createElement("div");
        nuevaVariable.innerHTML = `
        <h3>${producto.nombre}</h3>
        <h3>$ ${producto.precio}</h3>
        <h3>Cantidad: ${producto.cantidad}</h3>
        <h3>Total: $ ${producto.precio * producto.cantidad}</h3>
        `;
        nuevaVariable.setAttribute("id", `producto${producto.id}`);
        contenedorCarrito.append(nuevaVariable);
    });
    
};

const calcularTotal = () => {
    const total = carrito.reduce((acumulador, producto) => {
        return acumulador + (producto.precio * producto.cantidad);
    }, 0);
    let contenedorTotal = document.createElement('div') 
    contenedorTotal.innerHTML = `Total: $ ${total}`;
    
};


listaDeProductos ()

renderizarCarrito()
calcularTotal();
