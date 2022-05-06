rotulo.innerHTML = "Indique la altura de la persona:";
let alturaPermitida: number = 1.3;
let alturaPersona: number = Number(dato1.value);
let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let alturaPermitida: number = 1.3;
  let alturaPersona: number = Number(dato1.value);
  if (alturaPersona <= alturaPermitida) {
    console.log("La persona no puede subir al juego");
  } else {
    console.log("La persona puede subir al juego");
  }
});
