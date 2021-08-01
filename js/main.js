// //CLASE 4 trabajo complementario
// //calculo de iva e ingresos brutos
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
let precioProducto = parseInt(prompt("Cuanto sale su producto sin impuestos"));
const iva = x => x * 0.21;
const precioDescuento = precioProducto * 0.2;
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento);
let ingresosBrutos = x => x * 0.03;
let precioFinal = suma(nuevoPrecio, ingresosBrutos(precioProducto));
console.log("Usted pagará de IVA $" + iva(precioProducto));
console.log("Usted tiene un descuento de $" + precioDescuento);
console.log("El monto a pagar por Ingresos Brutos es de $" + ingresosBrutos(precioProducto));
console.log("El precio final es $" + precioFinal);

//saber si es multiplo
const multiplos = (a, b) => a % b;
var numero = parseInt(prompt("ingrese número"));
var multiplo = parseInt(prompt("Ingrese un número para saber si es multiplo"));
let resultado = multiplos(numero, multiplo);
if (resultado == 0) {
    alert(numero + " es multiplo de " + multiplo)
} else {
    alert(numero + " no es multiplo de " + multiplo)
}


//multiplos
const calcularMultiplos = () => {
    const multiplos = (a, b) => a % b;
    let numero = parseInt(prompt("ingrese número"));
    let multiplo = parseInt(prompt("Ingrese un número para saber si es multiplo"));
    let resultado = multiplos(numero, multiplo);
    if (resultado == 0) {
        alert(numero + " es multiplo de " + multiplo)
    } else {
        alert(numero + " no es multiplo de " + multiplo)
    }
    return (console.log(numero, multiplo));
}
calcularMultiplos();
const calcularIva = () => {
    let precioProducto = parseInt(prompt("Cuanto sale su producto sin impuestos"));
    const iva = x => x * 0.21;
    const suma = (a, b) => a + b;
    const resta = (a, b) => a - b;
    const precioDescuento = precioProducto * 0.2;
    let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento);
    let ingresosBrutos = x => x * 0.03;
    let precioFinal = suma(nuevoPrecio, ingresosBrutos(precioProducto));
    console.log("Usted pagará de IVA $" + iva(precioProducto));
    console.log("Usted tiene un descuento de $" + precioDescuento);
    console.log("El monto a pagar por Ingresos Brutos es de $" + ingresosBrutos(precioProducto));
    console.log("El precio final es $" + precioFinal);
    return (precioFinal);
}
alert("El precio final es $ " + calcularIva());