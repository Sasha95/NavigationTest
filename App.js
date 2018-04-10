import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Домашняя страница </Text>
        <Text></Text>      
        <Button
          title="Первая сущность"
          onPress={() => navigate('Two', { name: 'первый' })}
        />
        <Text></Text> 
        <Button 
          title="Вторая сущность" 
          onPress={() => navigate('Two', { name: 'второй' })}
        />
        <Text></Text> 
        <Button
          title="Третья сущность"
          onPress={() => navigate('Two', { name: 'третий' })}
        />
      </View>
    );
  }
}

class TwoScreen extends React.Component {
  render() {
    const { goBack } = this.props.navigation;
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Привет, я {this.props.navigation.state.params.name} экран ;)</Text>
        <Button
          title="вернись на первый с параметром"
          onPress={() => goBack()}
        />
               
      </View>
    );
  } 
}


const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Two: {
      screen: TwoScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}