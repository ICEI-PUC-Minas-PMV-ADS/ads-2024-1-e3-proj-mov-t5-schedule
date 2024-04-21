import Reactotron from 'reactotron-react-native'

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect({
      server: '10.0.2.2',
      port: 8081,
      enabled: true,
    });

  tron.clear()

  console.tron = tron
}
