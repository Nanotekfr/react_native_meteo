import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Navigator from './app/components/Navigator';

export default class App extends Component {
  render() {
    return <View style={styles.view}>
      <Navigator/>
      <StatusBar style="auto" />
    </View>;
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginVertical: 40
  },
});
