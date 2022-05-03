import 'react-native';
import React from 'react';
import TextComponent from '..';
import renderer from 'react-test-renderer';

it('renders TextComponent correctly', () => {
  const testRenderer = renderer.create(
    <TextComponent title="test" description="description" />,
  );
  const testInstance = testRenderer.root;

  expect(testInstance.findByType(TextComponent).props.title).toBe('test');
  expect(testInstance.findByType(TextComponent).props.description).toBe(
    'description',
  );
  expect(testRenderer).toMatchSnapshot();
});

it('renders TextComponent with empty description', () => {
  const testRenderer = renderer.create(<TextComponent description="" />);
  const testInstance = testRenderer.root;

  expect(testInstance.findByType(TextComponent).props.description).toBe('');
  expect(testRenderer).toMatchSnapshot();
});
