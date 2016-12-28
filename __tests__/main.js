import 'react-native'
import React from 'react'
import Main from '../main.js'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <Main />
  )
})
