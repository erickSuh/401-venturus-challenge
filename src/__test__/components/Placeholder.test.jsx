import React from 'react';
import { render } from '@testing-library/react';
import Placeholder from 'components/Placeholder';

test('render a Placeholder', () => {
  const { getByText } = render(<Placeholder />);
  const linkPlaceholder = getByText(/Not Implemented/i);

  expect(linkPlaceholder).toBeInTheDocument();
});
