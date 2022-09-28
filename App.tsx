import React, { FunctionComponent } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import RouteStack from './src/routes/appNavigator';

const App: FunctionComponent = (): JSX.Element => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RouteStack />
    </SafeAreaView>
  );
};

export default App;