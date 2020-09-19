import React from 'react';
import { render } from '@testing-library/react';
import Button from 'components/Button';

test('render a button', () => {
  const { getByText } = render(<Button label="test" />);
  const linkButton = getByText(/test/i);

  expect(linkButton).toBeInTheDocument();
});
