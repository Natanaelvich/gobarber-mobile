import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container } from './styles';
import BackGround from '~/components/Background';

export default function Dashboard() {
  return <BackGround />;
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
