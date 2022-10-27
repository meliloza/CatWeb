/*---------------------------DESCRIPCION---------------------------------*/ 

/* 

Se cuenta con un array de objetos ya precargado con todos los gatos que ya 
fueron adoptados recientemente y los que todavia no fueron adoptados. 

Al ingresar a la pagina de adopciones, se le pide al usuario su nombre y el 
nombre del gato que desea adoptar. (Donde estos datos del usuario pedidos, 
se van cargando en un array de Socios a su vez)
Se hace un proceso interno iterativo, donde se verifica si el gato ingresado, 
se encuentra dentro del array de gatos, si se encuentra, entonces se pasa a 
preguntar si ese gato esta disponible para adoptar. Si es así, se le pregunta al 
usuario si quiere continuar con la adopcion, si el usuario responde que si => 
se informa al usuario, que el gato Tal tiene Tal nuevo dueño, y se cambia el el 
estado del gato a adoptado en el array.
En caso de que no este disponible para adoptar ese gato, porque ya fue adoptado, 
se le informa al usuario que no esta disponible el gato.  

Ademas se implementa el almacenamiento de todos los gatos del array con su estado 
de adopcion Actualizado luego de la ejecuccion del adopciones nuevas,
en el Local Storage a traves de Json. 

Otras funciones/metodos que se implementan (push, filter, length): 

-Se puede conocer la cantidad total de gatos adoptados y cuales son al final 
-Se puede conocer la cantidad total de gatos que quedaron sin adoptar todavia y cuales son al final

*/

const gatos = [ { id: 1, nombre: "Matute", adoptado: false },
                { id: 2, nombre: "Hachi", adoptado: true },
                { id: 3, nombre: "Pepon", adoptado: false },
                { id: 4, nombre: "Jero", adoptado: true },
                { id: 5, nombre: "Lolo", adoptado: false },
                { id: 6, nombre: "Lalita", adoptado: true },];


function cargarData(){

    function Socio(nombre,gatoElegido){
        this.nombre=nombre;
        this.gatoElegido=gatoElegido;
    }

    let nombreIngresado=prompt("Ingrese nombre de usuario")
    let gatoIngresado= prompt("Ingrese nombre gato que quiere adoptar")

    nuevoSocio= new Socio(nombreIngresado,gatoIngresado)
    console.log(nuevoSocio);
    agregar();
}

let baseDatosSocio=[];

function agregar(){
    baseDatosSocio.push(nuevoSocio);
    console.log(baseDatosSocio);
}

for(let j=0; j< 3; j++){
    cargarData()
for (let i=0; i<gatos.length; i++){
        if(baseDatosSocio[j].gatoElegido==gatos[i].nombre){
            alert("Coincide el nombre del gato buscado ")
            if(gatos[i].adoptado==false){
                alert("El gato esta disponible para adoptar")
                let respuesta=prompt("Desea proseguir con la adopcion?")
                if(respuesta== "Si" || respuesta=="si"){
                console.log("El gato: " + gatos[i].nombre + " tiene nuevo dueño: " + baseDatosSocio[j].nombre)
                 //cambio su estado a adoptado
                 let cambiarestado=gatos[i].adoptado=true
                 gatos[i].adoptado=cambiarestado
            }
            }
            else{
                alert("Lo siento, el gato seleccionado no se encuentra disponible para adoptar, ya se le asigno un hogar")
            }
    }

}
}


//Almacena localmente todos los gatos adoptados y no adoptamos actualizados
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
guardarLocal("listaGatos", JSON.stringify(gatos));

let rta= prompt("Desea saber que gatos fueron adoptados hasta el momento y cuales no?")
if(rta=="si"|| rta=="Si"||rta=="SI"){
    const gatosAdoptados= gatos.filter( gato=> gato.adoptado==true);
    console.log("Los gatos adoptados son los siguientes: ");
    console.log(gatosAdoptados);
    console.log("La cantidad total de gatos adoptados son: " + gatosAdoptados.length);

    const gatosNoAdoptados= gatos.filter( gato=> gato.adoptado==false);
    console.log("Los gatos No adoptados son los siguientes: ");
    console.log(gatosNoAdoptados);


    console.log("La cantidad total de gatos no adoptados son: " + gatosNoAdoptados.length);
}

alert("Gracias por elegirnos, te esperamos en la proxima adopcion! :)")





let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');
let headers = ['ID', 'Gato', 'Estado Adopcion'];
btnGet.addEventListener('click', () => {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    gatos.forEach(emp => {
        let row = document.createElement('tr');
        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })
        table.appendChild(row);
    });
    myTable.appendChild(table);
});