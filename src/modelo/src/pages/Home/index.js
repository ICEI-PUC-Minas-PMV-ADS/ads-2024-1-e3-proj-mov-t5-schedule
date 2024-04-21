import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { deleteUser } from '../../utils';
import { Container, Title, Button, ButtonText } from './styles';

export default function Home({ navigation }) {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Aqui você pode carregar as informações do usuário logado, como o email, do AsyncStorage ou de onde estiver armazenado
    // Exemplo: const userEmail = await AsyncStorage.getItem('@ListApp:userEmail');
    // setUserEmail(userEmail);
  }, []);

  const handleLogout = async () => {
    try {
      await deleteUser();
      navigation.navigate('AuthLoading');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Title>Bem-vindo, {userEmail}</Title>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </Container>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

Home.navigationOptions = {
  title: 'Home',
  headerBackTitleVisible: true,
};
