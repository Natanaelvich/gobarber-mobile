import React, { useRef, useState } from 'react';
import PropType from 'prop-types';

import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
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
import { signInRequest } from '~/store/modules/auth/actions';

function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }
  return (
    <BackGround>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            value={email}
            onChangeText={txt => setEmail(txt)}
            icon="mail-outline"
            keyboarType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            value={password}
            onChangeText={txt => setPassword(txt)}
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton onPress={handleSubmit} loading={loading}>
            Entrar
          </SubmitButton>
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
