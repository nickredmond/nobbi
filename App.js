import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Home } from './app/views/Home';

const AppRoutes = createStackNavigator(
  {
    HomeRoute: {
      screen: Home
    }
  },
  {
    initialRouteName: 'HomeRoute'
  }
);

export default class App extends React.Component {
  render() {
    return (
      <AppRoutes />
    );
  }
}
