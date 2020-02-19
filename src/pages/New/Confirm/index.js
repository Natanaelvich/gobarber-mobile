import React, { useState, useEffect, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, formatRelative } from 'date-fns';
import { pt } from 'date-fns/locale';
import api from '~/services/api';

import BackGround from '~/components/Background';

import { Container, Avatar, Name, Time, SumbmitButton } from './styles';

export default function SelectDateTime({ navigation }) {
  const provider = navigation.getParam('provider');
  const time = navigation.getParam('time');

  const dateFormated = useMemo(
    () => formatRelative(parseISO(time), new Date(), { locale: pt }),
    [time]
  );

  async function addAppointment() {
    await api.post('appointments', {
      provider_id: provider.id,
      date: time,
    });

    navigation.navigate('Dashboard');
  }

  return (
    <BackGround>
      <Container>
        <Avatar
          source={{
            uri: `https://api.adorable.io/avatars/120/${provider.name}`,
          }}
        />

        <Name>{provider.name}</Name>
        <Time>{dateFormated}</Time>

        <SumbmitButton onPress={addAppointment}>
          Confirmar agendamento
        </SumbmitButton>
      </Container>
    </BackGround>
  );
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar agendamento',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
