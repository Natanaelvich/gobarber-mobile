import React, { useRef } from 'react';
import PropType from 'prop-types';

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

function SignIn({ navigation }) {
  const passwordRef = useRef();

  function handleSubmit() {}
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
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton onPress={() => {}}>Entrar</SubmitButton>
        </Form>

        <SignLink
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        >
          <SigninkText>Criar conta gratuita</SigninkText>
        </SignLink>
      </Container>
    </BackGround>
  );
}

SignIn.propTypes = {
  navigation: PropType.shape({
    navigate: PropType.func.isRequired,
  }).isRequired,
};

export default SignIn;
