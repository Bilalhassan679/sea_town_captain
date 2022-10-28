import React from 'react';
import FlashMessage from 'react-native-flash-message';
import AppTwo from './AppTwo';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/Redux/Reducer/index';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ApplicationProvider {...eva} theme={eva.light}>
          {/* <NativeBaseProvider> */}
          <AppTwo />
          {/* <AppTwo /> */}
          {/* </NativeBaseProvider> */}
        </ApplicationProvider>
        <FlashMessage position="top" />
      </PersistGate>
    </Provider>
  );
}

export default App;
