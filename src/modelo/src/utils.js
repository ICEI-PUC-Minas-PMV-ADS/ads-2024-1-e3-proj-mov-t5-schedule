import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';

let navigatorRef;

export async function getUser() {
  try {
    return await AsyncStorage.getItem('@ListApp:userToken');
  } catch (error) {
    throw error;
  }
}

export async function storeUser(userToken) {
  try {
    return await AsyncStorage.setItem('@ListApp:userToken', JSON.stringify(userToken));
  } catch (error) {
    throw error;
  }
}

export async function deleteUser() {
  try {
    return await AsyncStorage.removeItem('@ListApp:userToken');
  } catch (error) {
    throw error;
  }
}

export function setTopLevelNavigator(navigator) {
  navigatorRef = navigator;
}

export function navigate(routeName, params) {
  navigatorRef.dispatch(
    CommonActions.navigate({
      name: routeName,
      params: params,
    }),
  );
}
