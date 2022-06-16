import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import QuotePage from '../pages/Quote';

describe('Quote Page Testing', () => {
  render(<QuotePage />);
  test('Testing the dom for success rendering elements on Quote page', () => {
    expect(screen.queryByTestId('quoteParagraph')).toBeInTheDocument();
  });

  test('Testing the dom for non existing elemente on the page after rendering', () => {
    expect(screen.queryByTestId('nothing')).not.toBeInTheDocument();
  });
});
