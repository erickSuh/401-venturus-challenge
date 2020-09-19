import React from 'react';
import { render } from '@testing-library/react';
import BaseColumn from 'components/BaseColumn';

test('render a BaseColumn', () => {
  const { getByText } = render(<BaseColumn><span>Base Column</span></BaseColumn>);
  const linkBaseColumn = getByText(/Base Column/i);

  expect(linkBaseColumn).toBeInTheDocument();
});
