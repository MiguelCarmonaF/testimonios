import './App.css';
import Testimonio from "./componentes/Testimonio.js"
import reaccionAlumnos from './componentes/ObjetoTestimonio.js';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio 
          nombre={reaccionAlumnos[0].nombre}
          descripcionFoto={reaccionAlumnos[0].descripcionFoto}
          pais={reaccionAlumnos[0].pais}
          imagen={reaccionAlumnos[0].imagen}
          cargo={reaccionAlumnos[0].cargo}
          empresa={reaccionAlumnos[0].empresa}
          testimonio={reaccionAlumnos[0].comentario}
        />
        <Testimonio 
          nombre={reaccionAlumnos[1].nombre}
          descripcionFoto={reaccionAlumnos[1].descripcionFoto}
          pais={reaccionAlumnos[1].pais}
          imagen={reaccionAlumnos[1].imagen}
          cargo={reaccionAlumnos[1].cargo}
          empresa={reaccionAlumnos[1].empresa}
          testimonio={reaccionAlumnos[1].comentario}
        />
        <Testimonio 
          nombre="Shawn Wang"
          descripcionFoto= "Foto de Shawn"
          pais="Singapore"
          imagen="shawn"
          cargo="Ingeniero en Software"
          empresa="Amazon"
          testimonio={<>"t's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. <strong>freeCodeCamp changed my life.</strong>"</>} 
        />
      </div>
    </div>
  );
}

export default  App;
