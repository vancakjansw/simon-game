import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Alert,
  Animated,
} from 'react-native'
import {styles} from './cubes-styles.js'
import {Actions} from 'react-native-router-flux'
import {getRandomArrayOfNum} from './../../utils/index.js'

class Cubes extends Component {
  constructor(props) {
    super(props)
    this.runGameCycle = this.runGameCycle.bind(this)

    this.animations = {
      startButton: new Animated.Value(1.05),
      blueCube: new Animated.Value(1),
      redCube: new Animated.Value(1),
      yellowCube: new Animated.Value(1),
      greenCube: new Animated.Value(1),
    }

    this.INFO_STATE = {
      start: 'Start',
      repeat: 'Repeat',
      watch: 'Watch',
    }

    this.GAME_STATE = {
      playing: 'playing',
      watch: 'watch',
      stop: 'stop',
    }

    this.CUBES_ORDER = [
      'blueCube',
      'redCube',
      'greenCube',
      'yellowCube',
    ]

    this.gameData = {
      gameNumCheck: 0,
      gameScore: 0,
      gameCycle: 0,
      gameFields: [],
      gameState: this.GAME_STATE.stop,
    }

    this.state = {
      gameScore: this.gameData.gameScore,
      infoCircle: this.INFO_STATE.start,
     }
  }

  animateStartButton() {
    this.animations.startButton.setValue(1.05) // fix repeating press

    Animated.spring(
      this.animations.startButton,
      {
        toValue: 1,
        friction: .6,
      }
    ).start()
  }

  animateCube(cubeIndex: number) {
    Animated.sequence([
      Animated.timing(
        this.animations[cubeIndex],
        {
          toValue: 0,
          duration: 250,
        }
      ),
      Animated.delay(80),
      Animated.timing(
        this.animations[cubeIndex],
        {
          toValue: 1,
          duration: 250,
        }
      ),
    ]).start()
  }

  updateInfoCircle() {
    let infoCircleText = ''

    switch (this.gameData.gameState) {
      case this.GAME_STATE.playing:
        infoCircleText = this.INFO_STATE.repeat
        break
      case this.GAME_STATE.watch:
        infoCircleText = this.INFO_STATE.watch
        break
      case this.GAME_STATE.stop:
        infoCircleText = this.INFO_STATE.start
        break
    }

    this.setState({
      infoCircle: infoCircleText
    })
  }

  resetGame() {
    this.props.setScore(this.gameData.gameScore)
    this.gameData = {
      gameNumCheck: 0,
      gameCycle: 0,
      gameFields: [],
      gameState: this.GAME_STATE.stop,
    }

    this.setGameScore(0)
    this.updateInfoCircle()
    Alert.alert('Game Over')
  }

  setGameScore(value): number {
    if (value === 0) {
      this.gameData.gameScore = 0
      this.setState({
        gameScore: 0
      })
    } else {
      this.gameData.gameScore += 1
      this.setState({
        gameScore: this.gameData.gameScore
      })
    }
  }

  onCubeClick(index: string) {
    if (this.gameData.gameState !== this.GAME_STATE.playing || this.gameData.gameScore > this.gameData.gameFields.length - 1) return

    let checkArray = this.gameData.gameFields[this.gameData.gameScore]
    let numToCheck = checkArray[this.gameData.gameCycle]

    this.animateCube(index)
    if (numToCheck === index) {
      this.gameData.gameCycle++

      if (this.gameData.gameCycle === checkArray.length) {
        this.gameData.gameCycle = 0
        this.setGameScore(1)
        setTimeout(this.runGameCycle, 1200)
      }
    } else {
      this.resetGame()
    }
  }

  runGame() {
    if (this.gameData.gameState === this.GAME_STATE.stop) {
      this.runGameCycle()
    } else {
      this.animateStartButton()
    }
  }

  getCubesToCheck(): Array {
    let cubes = []
    let random = getRandomArrayOfNum(this.gameData.gameScore + 1)
    random.forEach((num) => {
      cubes.push(this.CUBES_ORDER[num])
    })
    return cubes
  }

  runGameCycle() {
    this.animateStartButton()
    let cubesToCheck = this.getCubesToCheck()
    let actualGameFields = this.gameData.gameFields // workaround

    actualGameFields.push(cubesToCheck)
    this.gameData.gameState = this.GAME_STATE.watch
    this.gameData.gameFields = actualGameFields
    this.updateInfoCircle()

    let i = 0
    let nextBlick = () => {
      let promise = new Promise((resolve, reject) => {
        this.animateCube(cubesToCheck[i])
        setTimeout(resolve, 800)
      })

      promise.then(() => {
        i++
        if (i < this.gameData.gameFields.length) {
          setTimeout(nextBlick, 500)
        } else if (this.gameData.gameState === this.GAME_STATE.watch) {
          this.animateStartButton()
          this.gameData.gameState = this.GAME_STATE.playing
          this.updateInfoCircle()
        }
      })
    }
    nextBlick()
  }

  render() {
    return (
      <View style={styles.cubesContainer}>
        <View style={styles.infoCircleContainer}>
          <TouchableWithoutFeedback onPress={() => this.runGame()}>
            <Animated.View style={[styles.infoCircle, {transform: [{scale: this.animations.startButton}]}]}>
              <Text style={styles.infoCircleText}>{this.state.infoCircle}</Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.cubesContainerTop}>
          <TouchableWithoutFeedback style={styles.blueCube} onPress={() => this.onCubeClick(this.CUBES_ORDER[0])}>
            <Animated.View style={[styles.blueCube, {opacity: this.animations.blueCube}]}>
            </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback style={styles.redCube} onPress={() => this.onCubeClick(this.CUBES_ORDER[1])}>
            <Animated.View style={[styles.redCube, {opacity: this.animations.redCube}]}>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.cubesContainerBottom}>
          <TouchableWithoutFeedback style={styles.greenCube} onPress={() => this.onCubeClick(this.CUBES_ORDER[2])}>
            <Animated.View style={[styles.greenCube, {opacity: this.animations.greenCube}]}>
            </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback style={styles.yellowCube} onPress={() => this.onCubeClick(this.CUBES_ORDER[3])}>
            <Animated.View style={[styles.yellowCube, {opacity: this.animations.yellowCube}]}>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.controlContainer}>
          <View style={styles.controlContainerInnerLeft}>
            <Text style={styles.controlContainerScore}>
              Score: {this.state.gameScore}
            </Text>
          </View>
          <View>
            <Text style={styles.controlContainerScore}>
              Simon`'`s game
            </Text>
          </View>
          <TouchableOpacity style={styles.controlContainerInnerRight} onPress={Actions.HomeView}>
            <Text style={styles.controlContainerScoreButton}>Menu</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

Cubes.propTypes = {
  setScore: React.PropTypes.func,
}

export default Cubes
