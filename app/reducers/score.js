import * as types from '../actions'

let initialState = {
  numberOfGames: 0,
  lastGame: 0,
  bestScore: 0,
}

const getScore = (state, actualScore): number => {
  if (actualScore > state.bestScore) {
    return actualScore
  }
  return state.bestScore
}

const score = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_NUM_OF_GAMES':
      return Object.assign({}, state, {
        numberOfGames: state.numberOfGames + 1,
      })
    case 'SET_SCORE':
      return Object.assign({}, state, {
        numberOfGames: state.numberOfGames + 1,
        lastGame: action.score,
        bestScore: getScore(state, action.score),
      })
    default:
      return state
  }
}

export default score
