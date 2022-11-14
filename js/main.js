let bienvenido = alert ("Bienvenido/a a Arakur Ushuaia Resort & Spa");
let edadUser = parseInt( prompt ("Ingrese su edad."));
const edad = 18;
let esMenor = true;

function coincide (edadUser) {
    return (18 <= edadUser)
};

if (coincide(edadUser)) {
   alert ("Puedes realizar tu reserva en nuestra página");
   esMenor = false;
}
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

   const habitacionDisponible = [
         {
               id: 1,
               categoria: "Deluxe",
               ocupacion: 2,
         },
         {
            id: 2,
            categoria: "Superior",
            ocupacion: 2,
         },
         {
            id: 3,
            categoria: "Triple",
            ocupacion: 3,
         },
         {
            id: 4,
            categoria: "Family",
            ocupacion: 4,
         },
      ];


      let valorBuscado = "Deluxe"
      const busqueda = habitacionDisponible.find(habitacionDisponible=> habitacionDisponible.categoria === valorBuscado)
      console.log(busqueda)