import React, { useRef, useState } from 'react';
import PropType from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import BackGround from '~/components/Background';
import {
  Form,
  FormInput,
  Container,
  SignLink,
  SigninkText,
  SubmitButton,
} from './styles';
import { signUpRequest } from '~/store/modules/auth/actions';

function SignUp({ navigation }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const emailRef = useRef();
  const passwrodRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <BackGround>
      <Container>
        <Form>
          <FormInput
            value={name}
            onChangeText={txt => setName(txt)}
            icon="person-outline"
            placeholder="Seu nome Completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            icon="mail-outline"
            keyboarType="email-address"
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={txt => setEmail(txt)}
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            ref={emailRef}
            onSubmitEditing={() => passwrodRef.current.focus()}
          />
          <FormInput
            value={password}
            onChangeText={txt => setPassword(txt)}
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwrodRef}
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>
            Cadastrar
          </SubmitButton>
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
