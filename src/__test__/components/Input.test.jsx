import React from 'react';
import { render } from '@testing-library/react';
import Input from 'components/Input';

test('render a input', () => {
  const { getByText } = render(<Input id="id_test" label="label_value" />);
  const linkInput = getByText(/label_value/i);

  expect(linkInput).toBeInTheDocument();
});
