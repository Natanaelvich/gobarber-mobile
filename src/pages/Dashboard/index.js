import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import BackGround from '~/components/Background';
import Appointment from '~/components/Appoiment';

import { Container, Title, List } from './styles';

const data = [1, 2, 3, 4, 5, 6];
export default function Dashboard() {
  return (
    <BackGround>
      <Container>
        <Title>Agendamentos </Title>

        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Appointment data={item} />}
        />
      </Container>
    </BackGround>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
