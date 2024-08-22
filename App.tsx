import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native'
import StartNavigation from './navigations/StartNavigation';
import { Provider } from 'react-redux';
import { store } from './reduxCode/Store';

const App = () => {
  return (
    <Provider store={store} >
      <StartNavigation />
    </Provider>
  )
}

export default App