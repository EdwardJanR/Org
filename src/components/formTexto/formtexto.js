import "./formtexto.css";

const FormTexto = (props) => {


    const { type = "text" } = props;
    const cambioValores = (e) => props.setValor(e.target.value);

    return <div className={`campo campo-${type}`}>
        <label>{props.tLabel}</label>
        <input
            placeholder={props.tInput}
            required={props.required}
            value={props.valor}
            onChange={cambioValores}
            type={type}
        />
    </div>
}

export default FormTexto;