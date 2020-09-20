import React from 'react';
import { render } from '@testing-library/react';
import List from 'components/List';

const mockList = [{
  key: 'teste 1', label: 'teste 1', description: 'description 1', value: 'teste 1', selected: true,
}, {
  key: 'teste 2', label: 'teste 2', description: 'description 2', value: 'teste 2', selected: false,
}, {
  key: 'teste 3', label: 'teste 3', description: 'description 2', value: 'teste 3', selected: false,
}];

test('render a list', () => {
  const { getByText } = render(<List list={mockList} />);
  const linkItem1 = getByText(/teste 1/i);
  const linkItem2 = getByText(/teste 2/i);
  const linkItem3 = getByText(/teste 3/i);

  expect(linkItem1).toBeInTheDocument();
  expect(linkItem2).toBeInTheDocument();
  expect(linkItem3).toBeInTheDocument();
});
