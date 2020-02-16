import React from 'react';

import Button from '~/components/Button';
import BackGround from '~/components/Background';
import { Form, FormInput } from './styles';

export default function SignUp() {
  return (
    <BackGround>
      <Form>
        <FormInput
          icon="mail-outline"
          keyboarType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
        />
        <Button loading={false} style={{ marginTop: 20 }}>
          Entrar
        </Button>
      </Form>
    </BackGround>
  );
}
