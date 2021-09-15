import "./style.css"
import {Link} from "react-router-dom"

const PersonCard = ({state}) => {
console.log(state)
    return (
        <div className = "PersonCard">
            <h2>Boas vindas, {state.username}</h2>
            <span><strong>E-mail</strong>: {state.email}</span>
            <span><strong>Senha:</strong> : {state.password}</span>

        <Link to = "/" >
            Voltar
        </Link>
        </div>

    )

}

export default PersonCard

