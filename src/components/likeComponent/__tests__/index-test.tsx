import 'react-native';
import React from 'react';
import LikeComponent from '..';
import renderer from 'react-test-renderer';

it('renders LikeComponent correctly', () => {
  const testRenderer = renderer.create(<LikeComponent numberOfLikes={20} />);
  const testInstance = testRenderer.root;

  expect(testInstance.findByType(LikeComponent).props.numberOfLikes).toBe(20);
  expect(testRenderer).toMatchSnapshot();
});
