import { connect } from 'react-redux'
import { numOfGamesIncrementA } from '../../actions'
import ScoreboardView from './scoreboard-view'

const mapStateToProps = (state) => {
  return {
    numberOfGames: state.score.numberOfGames,
    lastGame: state.score.lastGame,
    bestScore: state.score.bestScore,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    numOfGamesIncrement: () => {
      dispatch(numOfGamesIncrementA())
    }
  }
}

const ScoreboardViewConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScoreboardView)

export default ScoreboardViewConnected
