import React, { Component } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      city: 'Paris'
    }

  }

  setCity(city) {
    this.setState({
      city: city
    })
  }

  render() {
    return <View style={styles.view}>
      <TextInput style={styles.textInput}
        onChangeText={(text) => this.setCity({ text })}
        value={this.state.city}
      />
    </View>
  }
}


const styles = StyleSheet.create({
  view: {
    flex:1,
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'blue',
    borderWidth: 1,
    // Propriété qui retire la bordure par défaut sur Android
    // underlineColorAndroid: 'transparent'
  }
});

export default Home;