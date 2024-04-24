
function Evento({ titulo, descricao, horario, local }) {

    return (
        <div className="sessao">
            <div className="evento">
                <h1>{titulo}</h1>
                <p>{descricao}</p>
                <p>{horario}</p>
                <p>{local}</p>
            </div>
            <img className="ing" src="gojo.jpeg"/>
        </div>
    )

}

export default Evento