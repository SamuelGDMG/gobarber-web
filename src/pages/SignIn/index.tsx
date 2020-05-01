import React from 'react';

import { Container, Content, Background } from './styles';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/input/index';
import Button from '../../components/button/index';

const SignIn: React.FC = () => {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="GoBarber"/>
            
            
                <form>
                    <h1>Faça seu logon</h1>

                    <Input icon={FiMail} placeholder="E-mail" name="Email"/>

                    <Input icon={FiLock} placeholder="Senha" type="password" name="Password"/>

                    <Button type="submit">Entrar</Button>

                    <a href="forgot">Esqueci minha senha</a>

                </form>

                <a href="teste">
                    <FiLogIn/>
                    Criar Conta</a>

            </Content>
            <Background/>
        </Container>
    );

}

export default SignIn;


