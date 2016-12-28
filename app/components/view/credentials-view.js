import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native'
import {Actions} from 'react-native-router-flux'

class CredentialsView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Created by Jan Vancak
        </Text>
        <Button
          onPress={Actions.pop}
          title="Back to Menu"
          color="#841584"
        />
      </View>
    )
  }
}

export default CredentialsView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#333333',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
