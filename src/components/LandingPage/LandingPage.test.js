/* eslint-disable */

import React from 'react';
import 'react-native';
import LandingPage from './container';
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
        <LandingPage navigation={{ foo: 'bar' }} />
      </Provider>
    )
    .toJSON();
  expect(rendered).toBeTruthy();
  expect(rendered).toMatchSnapshot();
});
