import 'react-native';
import React from 'react';
import CardComponent from '..';
import renderer from 'react-test-renderer';

const image = 'https://picsum.photos/id/237/200/300';

it('renders CardComponent correctly', () => {
  const testRenderer = renderer.create(<CardComponent imageUrl={image} />);
  const testInstance = testRenderer.root;

  expect(testInstance.findByType(CardComponent).props.imageUrl).toBe(image);
  expect(testRenderer).toMatchSnapshot();
});
