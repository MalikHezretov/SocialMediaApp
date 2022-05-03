import 'react-native';
import React from 'react';
import Dashboard from '..';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import store from '../../../redux/store';

it('renders Dashboard correctly', () => {
  const testRenderer = renderer.create(
    <Provider store={store}>
      <Dashboard />
    </Provider>,
  );

  expect(testRenderer).toMatchSnapshot();
});
