
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';



export default function App() {
  const store = require('./src/redux/store').default;
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Navigation />
        <FlashMessage duration={6000} color={'#ffffff'} />
      </Provider>
    </NavigationContainer>
  );
}