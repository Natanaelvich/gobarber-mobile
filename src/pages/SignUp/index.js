import React, { useRef } from 'react';
import PropType from 'prop-types';

import BackGround from '~/components/Background';
import {
  Form,
  FormInput,
  Container,
  SignLink,
  SigninkText,
  SubmitButton,
} from './styles';

function SignUp({ navigation }) {
  const email = useRef();
  const passwrod = useRef();

  function handleSubmit() {}
  return (
    <BackGround>
      <Container>
        <Form>
          <FormInput
            icon="mail-outline"
            keyboarType="email-address"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => email.current.focus()}
          />
          <FormInput
            icon="person-outline"
            placeholder="Seu nome Completo"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            ref={email}
            onSubmitEditing={() => passwrod.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwrod}
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton onPress={() => {}}>Cadastrar</SubmitButton>
        </Form>

        <SignLink
          onPress={() => {
            navigation.navigate('SignIn');
          }}
        >
          <SigninkText>ja tenho uma conta login</SigninkText>
        </SignLink>
      </Container>
    </BackGround>
  );
}

SignUp.propTypes = {
  navigation: PropType.shape({
    navigate: PropType.func.isRequired,
  }).isRequired,
};

export default SignUp;
