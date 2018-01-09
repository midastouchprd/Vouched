#!/bin/bash

cd ./src/components
echo $1
mkdir $1
cd $1
touch index.js $1.js $1.test.js


echo "import $1 from './$1';

export default $1;
" > index.js


echo "import React, { Component } from 'react';
import { Content, Text, Container } from 'native-base';

class $1 extends Component {
  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: '#fff', top: -1 }}
        >
          <Text>$1</Text>
        </Content>
      </Container>
    );
  }
}

export default $1;" > $1.js

echo "/* eslint-disable */

import React from 'react';
import 'react-native';
import $1 from './container';
import renderer from 'react-test-renderer';
import { createStore, combineReducers } from 'redux';

import { Provider } from 'react-redux';
import * as reducers from '../../reducers';
const reducer = combineReducers(reducers);
const testStore = createStore(reducer);

it('renders without crashing', () => {
  const rendered = renderer
    .create(
      <Provider store={testStore}>
        <$1 navigation={{ foo: 'bar' }} />
      </Provider>
    )
    .toJSON();
  expect(rendered).toBeTruthy();
  expect(rendered).toMatchSnapshot();
});" > $1.test.js
