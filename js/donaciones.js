function cargar(){

function Socio(nombre,apellido,donacion,gatoAdoptado){
    this.nombre=nombre;
    this.apellido=apellido;
    this.donacion=donacion;
    this.gatoAdoptado=gatoAdoptado;
}

let nombreIngresado=prompt("Ingrese su nombre")
let apellidoIngresado= prompt("Ingrese su apellido")
let donacionIngresada= prompt("Ingrese la donacion abonada")
let donacionIngresada2= parseInt(donacionIngresada)
let gatoAdoptadoIngresado=prompt("Ingrese el gatito que adopto")

nuevoSocio= new Socio(nombreIngresado,apellidoIngresado,donacionIngresada2,gatoAdoptadoIngresado)
console.log(nuevoSocio);
agregar();
}

let baseDatosSocio=[];
function agregar(){
    baseDatosSocio.push(nuevoSocio);
    console.log(baseDatosSocio);
}

for (let i=0; i<=3; i++){
    cargar()
}
    
const sumaTotalDonaciones= baseDatosSocio.reduce((acumulador, valor) => acumulador + valor.donacion, 0);
console.log(sumaTotalDonaciones); //muestra una suma total de donaciones recaudadas de cada donacion socio ingresada

const SociosQueDonaron= baseDatosSocio.filter( dono => dono.donacion != 0 );
console.log(SociosQueDonaron);  //muestro exclusivamente los socios que si donaron plata 


