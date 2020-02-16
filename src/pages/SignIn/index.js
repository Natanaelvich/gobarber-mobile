import React from 'react';

import { Image } from 'react-native';
import BackGround from '~/components/Background';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SigninkText,
} from './styles';

import logo from '~/assets/logo.png';

export default function SignIn() {
  return (
    <BackGround>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboarType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
          />
          <SubmitButton onPress={() => {}}>Entrar</SubmitButton>
        </Form>

        <SignLink onPress={() => {}}>
          <SigninkText>Criar conta gratuita</SigninkText>
        </SignLink>
      </Container>
    </BackGround>
  );
}
