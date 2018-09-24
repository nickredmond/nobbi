import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Home } from './app/views/Home';
import { Random } from './app/views/Random';

const AppRoutes = createStackNavigator(
  {
    HomeRoute: {
      screen: Home
    },
    RandomRoute: {
      screen: Random
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
