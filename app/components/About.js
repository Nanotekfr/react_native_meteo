import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class About extends Component {
  render() {
    return <View style={styles.view}>
      <Text style={styles.title}>A propos de moi</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor, turpis in mollis faucibus, arcu mauris mattis augue, quis consectetur libero ex in nisi. Donec in venenatis leo, eget maximus lectus. Quisque non consectetur lorem. Sed volutpat augue nec lacus malesuada dictum. Cras tincidunt non nisl eu semper. Integer purus enim, malesuada placerat scelerisque quis, euismod id ex. Integer iaculis orci vel massa ultricies, ut lacinia tellus pharetra. Praesent tempus felis vitae metus pulvinar tempus. Pellentesque condimentum et enim a faucibus. Pellentesque eget orci laoreet, hendrerit odio sed, maximus odio. Nunc eu augue eget purus laoreet consequat. Donec eleifend enim elementum mollis cursus. Vivamus pretium dui purus, nec accumsan leo feugiat vel.
      </Text>
    </View>
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    margin: 20
  },
  title: {
    fontSize: 22,
    marginBottom: 20
  }
});

export default About;