import React, { useEffect } from 'react'

import { View, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function AuthLoadingScreen(props) {

  useEffect(() => {
    async function handleUserNextScreen() {
      const userToken = await AsyncStorage.getItem('@ListApp:userToken')

      props.navigation.navigate(userToken ? 'Home' : 'SignIn')
    }

    handleUserNextScreen();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
}

AuthLoadingScreen.navigationOptions = () => {
  return {
    header: null,
  };
};
