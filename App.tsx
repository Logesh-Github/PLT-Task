import React, {FunctionComponent} from 'react';
import {SafeAreaView} from 'react-native';
import RouteStack from './src/routes/appNavigator';
import {Provider} from 'react-redux';
import {store} from './src/redux-store/store';

const App: FunctionComponent = (): JSX.Element => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <RouteStack />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
