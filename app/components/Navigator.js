import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from './Search';
import About from './About';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'chartreuse',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Search} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
}

class Navigator extends Component {
  render() {
    return <View style={styles.view}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </View>;
  }
}

const styles = StyleSheet.create({
  view: {
    flex:1,
    justifyContent: 'flex-end',
  }
});

export default Navigator;