import React from 'react';
import { render } from '@testing-library/react';
import Header from 'components/Header';

test('render a Header', () => {
  const { getByText } = render(<Header />);
  const linkHeader = getByText(/title/i);

  expect(linkHeader).toBeInTheDocument();
});
