import "./colaborador.css";
import { MdDeleteForever } from "react-icons/md";
import { BsHeartPulse, BsHeartPulseFill } from "react-icons/bs"

const Colaborador = (props) => {
    const { eliminarColaborador } = props;
    return <div className="colaborador">
        <MdDeleteForever className="eliminar" onClick={() => eliminarColaborador(props.id)} />
        <div className="encabezado" style={{ backgroundColor: props.colorP }}>
            <img src={props.foto} alt={props.nombre} />
        </div>
        <div className="info">
            <h4>{props.nombre}</h4>
            <h5>{props.puesto}</h5>
            {props.fav ? <BsHeartPulseFill color="red" onClick={() => props.like(props.id)} /> : <BsHeartPulse onClick={() => props.like(props.id)} />}
        </div>
    </div>


}

export default Colaborador;