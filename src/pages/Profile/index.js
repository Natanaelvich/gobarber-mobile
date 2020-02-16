import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import BackGround from '~/components/Background';

// import { Container } from './styles';

export default function Profile() {
  return (
    <BackGround>
      <Text>Profile</Text>
    </BackGround>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
