import React, { useState, useRef, useEffect } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import BackGround from '~/components/Background';

import {
  Container,
  FormInput,
  Form,
  Title,
  Separator,
  SubmitButton,
  LogoutButton,
} from './Styles';
import { updateProfleRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const passwordRef = useRef();
  const oldPasswordRef = useRef();
  const confirpasswordRef = useRef();
  const emailRef = useRef();

  const [email, setEmail] = useState(profile.email);
  const [name, setName] = useState(profile.name);
  const [password, setPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfleRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      })
    );
  }

  function handleLogout() {
    dispatch(signOut());
  }
  return (
    <BackGround>
      <Container>
        <Title>Meu perfil</Title>
        <Form>
          <FormInput
            value={name}
            onChangeText={txt => setName(txt)}
            icon="person-outline"
            placeholder="Digite seu Nome"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            value={email}
            onChangeText={txt => setEmail(txt)}
            icon="mail-outline"
            keyboarType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            ref={emailRef}
            onSubmitEditing={() => oldPasswordRef.current.focus()}
          />
          <Separator />

          <FormInput
            value={oldPassword}
            onChangeText={txt => setOldPassword(txt)}
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha antiga"
            ref={oldPasswordRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            value={password}
            onChangeText={txt => setPassword(txt)}
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua nova senha"
            returnKeyType="next"
            ref={passwordRef}
            onSubmitEditing={() => confirpasswordRef.current.focus()}
          />
          <FormInput
            value={confirmPassword}
            onChangeText={txt => setConfirmPassword(txt)}
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirme sua senha"
            ref={confirpasswordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}> Atualizar perfil</SubmitButton>
          <LogoutButton onPress={handleLogout}> Sair </LogoutButton>
        </Form>
      </Container>
    </BackGround>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
