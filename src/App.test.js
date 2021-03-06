import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders loading text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/LOADING/i);
  expect(linkElement).toBeInTheDocument();
});
