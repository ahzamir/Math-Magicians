import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';

import HomePage from "../../components/pages/Home";

describe('Home', () => {
  render(<HomePage />);
  test('Testing the dom for success rendering elements', () => {
    expect(screen.queryByTestId('homePageContent')).toBeInTheDocument();
  });

  test('Testing the dom for success rendering elements', () => {
    expect(screen.queryByTestId('nothing')).not.toBeInTheDocument();
  });
});
