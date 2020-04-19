/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppNavigator from "./app-navigator"

import { Provider } from "react-redux"

import configureStore from "./redux/store"

const store = configureStore()

const App: () => React$Node = () => {
  return (
    <>
      <Provider store = {store} >
          <AppNavigator />
      </Provider>
    </>
  );
};

export default App;
