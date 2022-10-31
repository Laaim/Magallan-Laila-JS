let bienvenido = alert ("Bienvenido/a a Arakur Ushuaia Resort & Spa");

let edadUser= parseInt(prompt('Ingrese su edad'));
const edad=18;
let esMenor =true

while (esMenor){
if(edadUser>=18){alert("Puedes alojarte con nosotros");
    console.log('Podes alojarte en nuestro hotel')
    esMenor=false;}
    else {
        edadUser = parseInt( prompt ("Debe ser mayor de edad para poder alojarse con nosotros"))
        esMenor=true;
        console.log('No puedes reservar siendo menor, por favor contacta a un mayor')
    }
}
