import * as yup from "yup";
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom"
import {useHistory} from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react"
import PersonCard  from "../PersonCard"
import "./style.css"

const Form = ({setUser}) => {

const history = useHistory()


const schema = yup.object().shape({
    //Regras do form
    username: yup.string().required("Nome de usuário obrigatório"),
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório"),
    confirmEmail: yup.string().oneOf([yup.ref("email"), null], "Os Emails devem corresponder"),
    password: yup.string()
              .required("Nenhuma senha fornecida.")
              .min(8, "Senha invalida")
              .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, "Senha não é válida"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "As senhas devem corresponder"),
    checkbox: yup.boolean().oneOf([true], "Seleção obrigatória"),
})

const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
})
const onSubmitFunction = (data) => {    
    setUser(data)
    history.push("/person")
  
} 



return (
    <div className="container__form">
      <div className = "title-form">
        <h1>Faça seu cadastro</h1>
      </div>
        
    <form className = "form" onSubmit = {handleSubmit(onSubmitFunction)}>

        <div className = "form-group">
            <input type= "text" {...register("username")} required />
            <span>Nome de usuário *</span>
            {errors.username?.message}
        </div>

        <div className = "form-group">
           <input type= "text"  {...register("name")} required/>
           <span>Nome completo *</span>
            {errors.name?.message}
        </div>
        
        <div className = "form-group">
            <input type= "text"  {...register("email")} required/>
            <span>Endereço de Email *</span>
            {errors.email?.message}
        </div>
        <div className = "form-group">
            <input type= "text"  {...register("confirmEmail")} required/>
            <span>Confirme seu Email *</span>
            {errors.confirmEmail?.message}
        </div>
        <div className = "form-senha">

                <div className = "form-group">
                        <input  type = "password"   {...register("password")} required/>
                        <span>Senha *</span>
                        {errors.password?.message}
                </div>
                <div className = "form-group" >
                    <input type ="password"   {...register("confirmPassword")} required />
                    <span>Confirme sua senha *</span>
                    {errors.confirmPassword?.message}
                </div>

        </div>
                <div className = "form__checkbox">
                    <input id = "termos" type="checkbox" {...register("checkbox")}/> 
                    <label for = "termos" >Eu aceito os termos de uso da aplicação</label>
                    {errors.checkbox?.message}
                </div>

            <button type="submit"> Enviar </button>
            <a href = "#">Já possui uma conta?</a>
    </form>

    </div>
)
}

export default Form