import React from 'react'
import { Input, LabelInput, TitleMain, ButtonMain } from "../style/standardStyle"
import "./Create.css"

const Create = () => {
  return (
    <div id='create'>
        <TitleMain>Crie seu usuário</TitleMain>
        <form className="form-login">
            <LabelInput>
                Nome completo
                <Input type="text"/>
            </LabelInput>
            <LabelInput>
                Email
                <Input type="text"/>
            </LabelInput>
            <LabelInput>
                Senha
                <Input type="text"/>
            </LabelInput>
            <LabelInput>
                Confirmar senha
                <Input type="text"/>
            </LabelInput>
            <ButtonMain>Criar</ButtonMain>
        </form>
    </div>
  )
}

export default Create