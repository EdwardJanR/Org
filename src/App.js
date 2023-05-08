import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from "./components/header/header";
import Formulario from "./components/formulario/formulario";
import MiOrg from './components/MiOrg/MiOrg';
import Equipo from './components/equipo/equipo';
import Footer from './components/footer/footer';

function App() {

  const [estadoForm, actEstado] = useState(false);
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://i.pinimg.com/736x/f1/20/c3/f120c3c743bd076ef9b8716329803231.jpg",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: true
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: true
    },
    {
      id: uuidv4(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false
    },
    {
      id: uuidv4(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: true
    }
  ]);
  const [equipos, setEquipo] = useState(
    [

      {
        id: uuidv4(),
        titulo: "Programación",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9"
      },
      {
        id: uuidv4(),
        titulo: "Front End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF"
      },
      {
        id: uuidv4(),
        titulo: "Data Science",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2"
      },
      {
        id: uuidv4(),
        titulo: "Devops",
        colorPrimario: "#E08B69",
        colorSecundario: "#FDE7E8"
      },
      {
        id: uuidv4(),
        titulo: "UX y Diseño",
        colorPrimario: "#DB6EBF",
        colorSecundario: "#FAE9F5"
      },
      {
        id: uuidv4(),
        titulo: "Movil",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFF5D9"
      },
      {
        id: uuidv4(),
        titulo: "Innovación y Gestión",
        colorPrimario: "#FF8A29",
        colorSecundario: "#FFEEDF"
      }
    ]
  )


  const actualizaEstado = () => actEstado(!estadoForm);

  const registrarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id);
    const newColabaradores = colaboradores.filter((colaborador) => colaborador.id != id);
    setColaboradores(newColabaradores);
  }

  const actualizarFondo = (color, id) => {
    console.log("Actualizar fondo", color, id);
    const colorActualizado = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    })

    setEquipo(colorActualizado);
  }

  const crearEquipo = (nuevoEquipo) => {
    setEquipo([...equipos, { ...nuevoEquipo, id: uuidv4() }])
  }

  const like = (id) => {
    const actLike = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        console.log(colaborador.fav);
        colaborador.fav = !colaborador.fav
        console.log(colaborador.fav);
      }
      return colaborador;
    })
    setColaboradores(actLike);
  }


  return (
    <div >
      <Header />
      {/* {estadoForm === true ? <Formulario /> : <div>se fue formulario</div>} */}
      {estadoForm &&
        <Formulario
          opciones={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }
      <MiOrg actualizaEstado={actualizaEstado} />
      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          key={equipo.titulo}
          eliminarColaborador={eliminarColaborador}
          actualizarFondo={actualizarFondo}
          like={like}
        />)
      }
      <Footer />
    </div >
  );
}

export default App;
