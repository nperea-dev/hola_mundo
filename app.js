const cambiojs=document.getElementById("cambio");
const parafojs=document.getElementById("parafo");
let nombre="";
setTimeout(()=>{saludo()},1500);

function saludo(){
   nombre= prompt("Ingrese su nombre");
   cambiojs.innerText=nombre;
   parafojs.innerText="Dios te bendigo hoy 😍";
}