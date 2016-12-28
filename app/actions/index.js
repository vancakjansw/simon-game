// import * as types from './types'

export const changeView = (id) => {
  return {
    type: 'CHANGE_VIEW',
    id
  }
}

export const numOfGamesIncrementA = () => {
  return {
    type: 'INCREMENT_NUM_OF_GAMES',
  }
}

export const setScoreA = (score) => {
  return {
    type: 'SET_SCORE',
    score
  }
}