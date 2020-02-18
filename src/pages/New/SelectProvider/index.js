import React from 'react';

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container } from './styles';
import BackGround from '~/components/Background';

export default function SelectProvider() {
  return <BackGround />;
}

SelectProvider.navigationOptions = ({ navigation: { navigate } }) => ({
  title: 'Selecione o prestador',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigate('Dashboard')}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
