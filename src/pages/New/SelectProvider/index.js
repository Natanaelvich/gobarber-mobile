import React, { useEffect, useState } from 'react';

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';
import { Container, ProviderFlat, Provier, Name, Avatar } from './styles';
import BackGround from '~/components/Background';

export default function SelectProvider({ navigation: { navigate } }) {
  const [providers, setProviders] = useState([]);
  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers');
      setProviders(response.data);
    }
    loadProviders();
  }, []);

  return (
    <BackGround>
      <Container>
        <ProviderFlat
          data={providers}
          key={provider => String(provider.id)}
          renderItem={({ item }) => (
            <Provier onPress={() => navigate('SelectDateTime', { item })}>
              <Avatar
                source={{
                  uri: `https://api.adorable.io/avatars/50/${item.name}`,
                }}
              />
              <Name>{item.name}</Name>
            </Provier>
          )}
        />
      </Container>
    </BackGround>
  );
}

SelectProvider.navigationOptions = ({ navigation: { navigate } }) => ({
  title: 'Selecione o prestador',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigate('Dashboard')}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
