/**
 * @format
 */

import 'react-native';
import React from 'react';
import LikeComponent from '..';
import renderer from 'react-test-renderer';

it('renders LikeComponent correctly', () => {
  renderer.create(<LikeComponent numberOfLikes={20} />);
});
