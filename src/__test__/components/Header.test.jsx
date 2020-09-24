import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import { render } from '@testing-library/react';
import Header from 'components/Header';

test('render a Header', () => {
  const { getByText } = render(<Provider store={store}><Header /></Provider>);
  const linkHeader = getByText(/title/i);

  expect(linkHeader).toBeInTheDocument();
});
