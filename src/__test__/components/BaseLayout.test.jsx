import React from 'react';
import { render } from '@testing-library/react';
import BaseLayout from 'components/BaseLayout';

test('render a BaseLayout', () => {
  const { getByText } = render(<BaseLayout><span>Base Layout</span></BaseLayout>);
  const linkBaseLayout = getByText(/Base Layout/i);

  expect(linkBaseLayout).toBeInTheDocument();
});
