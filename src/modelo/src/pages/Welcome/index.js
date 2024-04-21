import React, { useState } from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions, useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import api from '../../services/api';
import {
  Container,
  Title,
  TextInformation,
  Error,
  Form,
  Input,
  Button,
  ButtonText,
} from './styles';

export default function Welcome() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigation = useNavigation();

  async function saveUser(user) {
    await AsyncStorage.setItem('@ListApp:userToken', JSON.stringify(user));
  }

  async function signIn() {
    if (username.length === 0) return;

    setLoading(true);

    try {
      const credentials = {
        email: username,
        password: password,
      };

      const response = await api.post('/login', credentials);
      const user = response.data;

      await saveUser(user);

      setLoading(false);

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        })
      );
    } catch (err) {
      console.log(err);

      setLoading(false);
      setErrorMessage('Usuário não existe');
    }
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" />

      <Title>Bem-vindo</Title>
      <TextInformation>
        Para continuar, precisamos que você informe seu usuário
      </TextInformation>

      {!!errorMessage && <Error>{errorMessage}</Error>}

      <Form>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu usuário"
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          value={username}
          onChangeText={setUsername}
        />

        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite sua senha"
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <Button onPress={signIn}>
          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <ButtonText>Prosseguir</ButtonText>
          )}
        </Button>
      </Form>
    </Container>
  );
}

Welcome.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};