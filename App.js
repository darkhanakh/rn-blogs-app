import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import store from './app/store/store';

import bootstrap from './app/bootstrap';
import MainNavigation from './app/navigation/AppNavigation';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={e => console.log(e)}
      />
    );
  }

  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}
