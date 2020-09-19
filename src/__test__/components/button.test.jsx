import React from 'react';
import { render } from '@testing-library/react';
import Button from 'components/Button';

test('renders learn react link', () => {
  const { getByText } = render(<Button label="teste" />);
  const linkButton = getByText(/teste/i);

  expect(linkButton).toBeInTheDocument();
});
