import { ChangeEvent, FormEvent, useState } from 'react'
import { Input, LabelInput, TitleMain, ButtonMain } from "../style/standardStyle"
import "./Create.css"
import { UsePost } from '../hooks/useRequisition';
import config from '../config';
import { error } from 'console';

const Create = () => {
    type Input = string | null
    const [name, setName] = useState<Input>('');
    const [email, setEmail] = useState<Input>('');
    const [password, setPassword] = useState<Input>('');
    const [confirmPassword, setConfirmePassword] = useState<Input>('');
    const [createUserError, setCreateUserError] = useState<boolean>(false);
    const [msgResponse, setMsgResponse] = useState<string | null>('')

    const saveUser = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(name && email && password && password === confirmPassword) {
            const res: string = await UsePost(`${config.domain}/user/create`, {
                name: name,
                email: email,
                password: password,
                role: "user"
            })
            setMsgResponse(res);
        } else {
            setCreateUserError(true)
        }
    }
  return (
    <div id='create'>
        <TitleMain>Crie seu usuário</TitleMain>
        <form className="form-login" onSubmit={saveUser}>
            <LabelInput>
                Nome completo
                <Input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
            </LabelInput>
            <LabelInput>
                Email
                <Input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
            </LabelInput>
            <LabelInput>
                Senha
                <Input type="password" onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
            </LabelInput>
            <LabelInput>
                Confirmar senha
                <Input type="password" onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmePassword(e.target.value)}/>
            </LabelInput>
            {msgResponse && <p className='confirme-user'>{msgResponse}</p>}
            {createUserError === true && <p className='error-user'>Não foi possível criar o usuário!</p>}
            <ButtonMain>Criar</ButtonMain>
        </form>
    </div>
  )
}

export default Create