import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native'
import {Actions} from 'react-native-router-flux'

class ScoreboardView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Total Number of Games: {this.props.numberOfGames}
        </Text>
        <Text style={styles.instructions}>
          The Last Game Score: {this.props.lastGame}
        </Text>
        <Text style={styles.instructions}>
          The Best Score: {this.props.bestScore}
        </Text>
        <Button onPress={() => this.props.numOfGamesIncrement()}
          title="Increase number of games"
        />
      </View>
    )
  }
}

export default ScoreboardView

ScoreboardView.propTypes = {
  numberOfGames: React.PropTypes.number.isRequired,
  lastGame: React.PropTypes.number.isRequired,
  bestScore: React.PropTypes.number.isRequired,
  numOfGamesIncrement: React.PropTypes.func.isRequired,
}

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
