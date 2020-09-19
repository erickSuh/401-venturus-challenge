import React from 'react';
import { render } from '@testing-library/react';
import Panel from 'components/Panel';

test('render a Panel', () => {
  const { getByText } = render(<Panel><span>Panel</span></Panel>);
  const linkPanel = getByText(/Panel/i);

  expect(linkPanel).toBeInTheDocument();
});
