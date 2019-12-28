import AppNavigator from "./AppNavigator";
import React from 'react';
import { createAppContainer } from 'react-navigation';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
 

const App: () => React$Node = () => {
  return (
    <AppNavigator/> 
  );
};

export default createAppContainer(AppNavigator);
