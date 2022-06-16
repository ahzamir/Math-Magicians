import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Calculator from "../pages/Calculator";

describe('Calculator Page testing', () => {
  render(<Calculator />);
  test('Testing the dom for success rendering elements on Calculator page', () => {
    expect(screen.queryByTestId('calculatorPageContent')).toBeInTheDocument();
  });

  test('Testing the dom for non existing elemente on the page after rendering', () => {
    expect(screen.queryByTestId('nothing')).not.toBeInTheDocument();
  });
});