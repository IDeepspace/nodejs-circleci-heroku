import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../src/components/header/index';

test('Link changes the class when hovered', () => {
  const component = renderer.create(<Header> Facebook</Header>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
