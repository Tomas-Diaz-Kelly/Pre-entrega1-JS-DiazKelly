// Proyecto final 

let form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let nombre = e.target[0].value
    let apellido = e.target[1].value
    let modal = document.createElement('div')
    modal.innerHTML = `Bienvenido: ${nombre} ${apellido}`
    document.body.appendChild(modal)
    setTimeout(() => {
        document.body.removeChild(modal)
    }, 3000)

})
const productos = [
    {id:1,nombre:'Difusores',precio:600},
    {id:2,nombre:'Velas',precio:800},
    {id:3,nombre:'Perfuminas',precio:500},
    {id:4,nombre:'Bombones',precio:350},
]


let carritoLocal = JSON.parse(localStorage.getItem('carrito'))
let carrito = []
function iniciarPrograma(){
    if (carritoLocal){
        carrito = carritoLocal
        console.log(carrito)
        renderizarCarrito()
    }
    listaDeProductos ()
    
}

const contenedorCarrito = document.getElementById("carrito")
const contenedorTotal = document.getElementById("total");

function listaDeProductos (){
    for( const producto of productos){
    
        let boxProductos = document.createElement("div")
        boxProductos.innerHTML = (
            `
            
            <div class="card bg-secondary">
                <div class="card-body">
                    <h3>${producto.nombre}</h3>
                    <h3>$ ${producto.precio}</h3>
                    <button id=${producto.id} class="btn btn-light">+</button>
                </div>
            </div>
            
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
      document.getElementById(`producto${productoEnCarrito.id}`)
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
    renderizarCarrito() 
    calcularTotal();
    

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto agregado correctamente',
        showConfirmButton: false,
        timer: 800
      })
}

const renderizarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach((producto) => {
        const nuevaVariable = document.createElement("div");
        nuevaVariable.innerHTML = `
        <div class='card mi-card'>
            <h3 class="card-title">${producto.nombre}</h3>
            <h3 class="card-price">$ ${producto.precio}</h3>
            <h3 class="card-quantity">Cantidad: ${producto.cantidad}</h3>
            <h3 class="card-total">Total: $ ${producto.precio * producto.cantidad}</h3>
            <button id="eliminar${producto.id}" class="btn btn-danger">Eliminar</button>
        </div>

        `;
        nuevaVariable.setAttribute("id", `producto${producto.id}`);
        contenedorCarrito.append(nuevaVariable);

        const botonEliminar = document.getElementById(`eliminar${producto.id}`)
        botonEliminar.addEventListener('click', eliminarDelCarrito)

        
    });
    
};

const calcularTotal = () => {
    const total = carrito.reduce((acumulador, producto) => {
        return acumulador + (producto.precio * producto.cantidad);
    }, 0);
    let contenedorTotal = document.createElement('div') 
    contenedorTotal.innerHTML = `Total: $ ${total}`;
    
    cajaTotal()
    
};


function eliminarDelCarrito(e){
    const id = Number(e.target.getAttribute('id').replace('eliminar', ''));
    const productoIndex = carrito.findIndex((producto) => producto.id === id);
    carrito.splice(productoIndex, 1);
    const elementoProducto = document.getElementById(`producto${id}`);
    elementoProducto.parentNode.removeChild(elementoProducto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    calcularTotal();

    Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Producto eliminado correctamente',
        showConfirmButton: false,
        timer: 800
      })
}

const cajaTotal = () => {
    let cajaPrecioTotal = document.getElementById("boxCajaTotal");
    let boxTotal = document.createElement("div");
    cajaPrecioTotal.innerHTML = "";
  
    const precioTotal = carrito.reduce(
      (acc, el) => (acc += el.precio * el.cantidad),
      0
    );
  
    boxTotal.innerHTML = `<h3>El precio total es: ${precioTotal}</h3>`;
  
    cajaPrecioTotal.appendChild(boxTotal);
};



const cambioValorADolar = () => {
    let botonCambiarDolar = document.createElement('div')
    botonCambiarDolar.innerHTML = `
      <button id="pasarValor">Cambiar valor a dolar</button>
      `
      let btnCD = document.getElementById('botonCambioADolar')
      btnCD.appendChild(botonCambiarDolar)
      
      let cambio = document.getElementById('pasarValor')
      cambio.addEventListener('click', cambioDeMoneda)
    }
    cambioValorADolar()




function cambioDeMoneda(){

    fetch(`https://v6.exchangerate-api.com/v6/508010b8a9f48bb21104f9ac/pair/ARS/USD `)
        .then(response => response.json())
        .then(data =>  {
            variableGlobal(data)
        })
        .catch(err => console.error(err));

}

function variableGlobal(data){
        let muestra = document.createElement('div')
        muestra.innerHTML = `
            <h3>${precioTotal}</h3>
        `
        let ht = document.getElementById('valorDolar')
        ht.appendChild(muestra)
}


iniciarPrograma()

