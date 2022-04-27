/**
 * @format
 */

import 'react-native';
import React from 'react';
import CardComponent from '..';
import renderer from 'react-test-renderer';

const image = 'https://picsum.photos/id/237/200/300';

it('renders CardComponent correctly', () => {
  renderer.create(<CardComponent imageUrl={image} />);
});
