import React from 'react';
import { render } from '@testing-library/react';
import Select from 'components/Select';

const mockList = [{
  key: 'teste 1', label: 'teste 1', value: 'teste 1',
}, {
  key: 'teste 2', label: 'teste 2', value: 'teste 2',
}, {
  key: 'teste 3', label: 'teste 3', value: 'teste 3',
}];

test('render a Select', () => {
  const { getByText } = render(<Select list={mockList} />);
  const linkItem1 = getByText(/teste 1/i);
  const linkItem2 = getByText(/teste 2/i);
  const linkItem3 = getByText(/teste 3/i);

  expect(linkItem1).toBeInTheDocument();
  expect(linkItem2).toBeInTheDocument();
  expect(linkItem3).toBeInTheDocument();
});
