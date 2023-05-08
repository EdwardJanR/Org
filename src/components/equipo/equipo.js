import Colaborador from "../colaborador/colaborador";
import hexToRgba from "hex-to-rgba";
import "./equipo.css";

const Equipo = (props) => {

    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarFondo, like } = props;


    return <> {
        colaboradores.length > 0 &&
        <section className="equipo" style={{ backgroundColor: hexToRgba(colorPrimario, 0.6) }}>
            <input
                type="color"
                className="colorFondo"
                value={colorPrimario}
                onClick={actualizarFondo}
                onChange={(evento) => {
                    actualizarFondo(evento.target.value, id);
                }
                }
            />

            <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador) => <Colaborador
                        id={colaborador.id}
                        nombre={colaborador.nombre}
                        puesto={colaborador.puesto}
                        foto={colaborador.foto}
                        key={colaborador.nombre}
                        colorP={colorPrimario}
                        fav={colaborador.fav}
                        like={like}
                        eliminarColaborador={eliminarColaborador}
                    />)
                }
            </div>
        </section >
    }
    </>
}

export default Equipo;