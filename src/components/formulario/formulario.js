import { useState } from "react";
import "./formulario.css";
import FormTexto from "../formTexto/formtexto";
import ListaOpciones from "../ListaOpciones/listaOpciones";
import Boton from "../Boton/boton";

const Formulario = (props) => {

    const { opciones, registrarColaborador, crearEquipo } = props;

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, setTitulo] = useState("")
    const [color, setColor] = useState("#6278F7");

    const crearColaborador = (e) => {
        e.preventDefault();
        let regDatos = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(regDatos);
    }

    const nuevoEquipo = (e) => {
        e.preventDefault();
        let regEquipo = {
            titulo,
            colorPrimario: color
        }
        console.log(regEquipo)
        crearEquipo(regEquipo);
    }

    return <section className="formulario" >
        <form onSubmit={crearColaborador}>
            <h2>Rellena el formulario para crear y colaborar</h2>
            <FormTexto
                tLabel="Nombre"
                tInput=" Ingrese Nombre"
                required
                valor={nombre}
                setValor={setNombre}
            />
            <FormTexto
                tLabel="Puesto"
                tInput=" Ingrese Puesto"
                required
                valor={puesto}
                setValor={setPuesto}
            />
            <FormTexto
                tLabel="Foto"
                tInput=" su Foto"
                required
                valor={foto}
                setValor={setFoto}
            />
            <ListaOpciones
                valor={equipo}
                setValor={setEquipo}
                opciones={opciones}
            />
            <Boton texto="crear colaborador" />
        </form>
        <form onSubmit={nuevoEquipo}>
            <h2>Rellena el formulario para crear nuevos equipos</h2>
            <FormTexto
                tLabel="Titulo"
                tInput=" Ingrese Nombre"
                required
                valor={titulo}
                setValor={setTitulo}
            />
            <FormTexto
                tLabel="FColor"
                value="#ff0000"
                required
                valor={color}
                setValor={setColor}
                type="color"
            />
            <Boton texto="crear equipo" />
        </form>
    </section>
}

export default Formulario;

/* 
https://github.com/harlandlohora.png
https://github.com/genesysaluralatam.png
https://github.com/JeanmarieAluraLatam.png
https://github.com/christianpvap.png
https://github.com/JoseDarioGonzalezCha.png
*/