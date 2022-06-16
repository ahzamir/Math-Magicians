import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import HomePage from '../pages/Home';

describe('Home Page testing', () => {
  render(<HomePage />);
  test('Testing the dom for success rendering elements on Home page', () => {
    expect(screen.queryByTestId('homePageContent')).toBeInTheDocument();
  });

  test('Testing the dom for non existing elemente on the page after rendering', () => {
    expect(screen.queryByTestId('nothing')).not.toBeInTheDocument();
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<HomePage page="just for test">HomePage</HomePage>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
