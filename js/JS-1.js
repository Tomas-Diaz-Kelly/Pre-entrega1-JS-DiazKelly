alert('ingrese nombre y apellido ')
function datosUsuario(){
    let nombre = prompt('ingrese nombre')
    let apellido = prompt('ingrese apellido')
}


function seleccionDeProductos(){
    let sumaDeProductos = 0;

    let continuarCompra = true 
    while(continuarCompra){
        let productoSeleccionado = parseInt(prompt('Seleccione un producto: 1:velas , 2:difusores , 3:perfuminas'));
        switch (productoSeleccionado){
            case 1:
                sumaDeProductos = sumaDeProductos + 1500
                break;
            case 2:
                sumaDeProductos = sumaDeProductos + 1200
                break;
            case 3:
                sumaDeProductos = sumaDeProductos + 1300
                break;
            default:
                alert('el numero ingresado es erroneo')
                break;
        }
        alert('El total de la compra es de:' + sumaDeProductos)
        
        let seguircomprando = prompt('Quiere continuar con la compra ? 1:si 2:no')
        if (seguircomprando !== 1 ){
            continuarCompra = false;
        }else{
            alert('gracias por tu compra')
        }
    }
}


datosUsuario()
seleccionDeProductos()