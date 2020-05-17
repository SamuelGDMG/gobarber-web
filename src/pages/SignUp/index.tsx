import React, {useCallback, useRef} from 'react';

import { Form } from '@unform/web';

import { Container, Content, Background } from './styles';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
//import logoImg from '../../assets/logo.svg';

import getValidationErrors from '../../utils/getValidationErrors';

import * as Yup from 'yup';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/input/index';
import Button from '../../components/button/index';

import { FormHandles } from '@unform/core';

const SignIn: React.FC = () => {

    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: object) => {
        try{

            formRef.current?.setErrors({})

            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email : Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().min(6, 'No mínimo 6 digitos')
            });
            await schema.validate(data, {
                abortEarly: false
            });

        }catch(err){
            
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
        }
    }, [])

    

    return (
        <Container>

            <Background/>

            <Content>
                <img src={logoImg} alt="GoBarber"/>
            
            
                <Form ref={formRef} initialData={{name:"Samuel"}} onSubmit={handleSubmit}>
                    <h1>Faça seu cadastro</h1>

                    <Input icon={FiUser} placeholder="Nome" name="name"/>

                    <Input icon={FiMail} placeholder="E-mail" name="email"/>

                    <Input icon={FiLock} placeholder="Senha" type="password" name="password"/>

                    <Button type="submit">Cadastrar</Button>

                </Form>

                <a href="teste">
                    <FiArrowLeft/>
                    Voltar para logon
                </a>

            </Content>
        </Container>
    );

}

export default SignIn;


