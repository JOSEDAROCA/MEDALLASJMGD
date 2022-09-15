import "./styles.css";

let rotulo = document.getElementById("rotulo");
let btnEnv = document.getElementById("btnEnv");

rotulo.innerHTML = "Ingrese la posición de llegada del competidor: ";

btnEnv.addEventListener("click", () => {
  let dato = document.getElementById("dato");

  let datoNumber = Number(dato.value);

  let posicionLlegada: number = datoNumber;

  switch (posicionLlegada) {
    case 1:
      console.log("Entregar medalla de oro");
      break;
    case 2:
      console.log("Entregar medalla de plata");
      break;
    case 3:
      console.log("Entregar medalla de bronce");
      break;

    default:
      console.log("Entregar mención de participación");
  }
});
