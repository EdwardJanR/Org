import "./listaOpciones.css"

const ListaOpciones = (props) => {

    const cambioValores = (e) => props.setValor(e.target.value);

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={cambioValores}>
            <option value="" disable defaultValue="" hidden>Seleccionar equipo</option>
            {props.opciones.map((equipo) => <option key={equipo} value={equipo}>{equipo}</option>
            )}
        </select>
    </div>
}

export default ListaOpciones;