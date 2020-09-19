import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkHome = getByText(/Home/i);
  const linkVenturus = getByText(/Squad Management Tool/i);
  const linkMyAccount = getByText(/My Account/i);

  expect(linkHome).toBeInTheDocument();
  expect(linkVenturus).toBeInTheDocument();
  expect(linkMyAccount).toBeInTheDocument();
});
