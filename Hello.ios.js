import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Hello extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.hello}>Hello from Hello.ios.js</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  hello: {
    backgroundColor: 'cornflowerblue',
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default Hello;
