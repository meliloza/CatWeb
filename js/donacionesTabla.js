


function limpiarFormulario(){
    let campos=document.querySelectorAll("input[type='text'],input[type='number']"); //recorro una lista de inputs
    for(let x=0; x < campos.length; x++){
        campos[x].value='';

    }
}


let socios=[];

function agregarSocio(){
    
let baseDatosSocios=[];
baseDatosSocios.push(document.getElementById('txtNombre').value); 
baseDatosSocios.push(document.getElementById('txtDonacion').value);
baseDatosSocios.push(document.getElementById('txtAdoptoSiNo').value);
baseDatosSocios.push(document.getElementById('txtAdoptado').value);

let validarformulario= true;
for(let x=0; x < baseDatosSocios.length; x++){
    if(baseDatosSocios[x]==""){
        validarformulario=false;
    }
}

if(validarformulario){ //si validar formulario es true
    socios.push(baseDatosSocios);
    let datos= JSON.stringify(socios); //convierto la info en formato json 
    localStorage.setItem('listadoSocios', datos); //inserto la variable en el localStorage en listadosocios
    limpiarFormulario();
// console.log(baseDatosSocios);
    mostrarSocios();

} else {
    alert("Porfavor rellenar todos los campos requeridos");
}

}


function mostrarSocios(){
var llenarTabla=document.getElementById("tbDatos"); //capturo el dato y lleno la tabla
llenarTabla.innerHTML=""; //dentro de ahi le digo q voy a insertar algo que todavia nose, lo voy a recorrer ahora
for(i=0; i<socios.length; i++){
    tr=document.createElement('tr');
    baseDatosSocios=socios[i];

    for(j=0;j< baseDatosSocios.length; j++){
        celda=baseDatosSocios[j];
        td=document.createElement('td');
        td.innerHTML=celda;
        tr.appendChild(td);
    }
    llenarTabla.appendChild(tr);
}
}

datos=localStorage.getItem('listadoSocios');
if(datos!=""){
    socios=JSON.parse(datos);
    mostrarSocios();
}

