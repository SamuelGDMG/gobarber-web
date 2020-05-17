import React, {useRef, useCallback, useContext} from 'react';

import { Container, Content, Background } from './styles';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import {Form} from '@unform/web';

import {FormHandles} from '@unform/core';

import * as Yup from 'yup';

import Input from '../../components/input/index';
import Button from '../../components/button/index';

import {useAuth} from '../../context/AuthContext';

import getValidationErrors from '../../utils/getValidationErrors';

interface SignInFormData{
    email : string,
    password: string
}

const SignIn: React.FC = () => {

    const formRef = useRef<FormHandles>(null);

    const {SignIn, user} = useAuth();

    console.log(user)

    const handleSubmit = useCallback(async (data: SignInFormData) => {
        try{

            formRef.current?.setErrors({})

            const schema = Yup.object().shape({
                email : Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().min(6, 'No mínimo 6 digitos')
            });
            await schema.validate(data, {
                abortEarly: false
            });

            SignIn({
                email : data.email,
                password : data.password
            });

        }catch(err){
            
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
        }
    }, [SignIn])

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="GoBarber"/>
            
            
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu logon</h1>

                    <Input icon={FiMail} placeholder="E-mail" name="email"/>

                    <Input icon={FiLock} placeholder="Senha" type="password" name="password"/>

                    <Button type="submit">Entrar</Button>

                    <a href="forgot">Esqueci minha senha</a>

                </Form>

                <a href="teste">
                    <FiLogIn/>
                    Criar Conta</a>

            </Content>
            <Background/>
        </Container>
    );

}

export default SignIn;


