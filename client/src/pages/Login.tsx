import { Input, LabelInput, TitleMain, ButtonMain } from "../style/standardStyle"
import "./Login.css"


const Login = () => {
  return (
    <div id='login'>
        <TitleMain>Faça o login no GitLeo</TitleMain>
        <form className="form-login">
            <LabelInput>
                Nome de Usuário ou Endereço de Email
                <Input type="text"/>
            </LabelInput>
            
            <LabelInput>
                Senha
                <Input type="text"/>
            </LabelInput>
            <ButtonMain>Entrar</ButtonMain>
        </form>
        <a href="/createuser" >Criar um usuário</a>
    </div>
  )
}

export default Login
