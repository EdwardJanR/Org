import "./MiOrg.css"

const MiOrg = (props) => {

    return <section className="org-Section">
        <h3>Mi Orgainzacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.actualizaEstado}></img>
    </section>
}

export default MiOrg;