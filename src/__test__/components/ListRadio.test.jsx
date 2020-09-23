import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import ListRadio from 'components/ListRadio';
import theme from 'theme/theme';

test('render a radio list', () => {
  const mockList = [{ 
    id: "item_id", 
    key: "item_key", 
    name: "items_name",
    label: "item_label",
    value: "item_val"
  }];
  const { getByText } = render(<ThemeProvider theme={theme}>
    <ListRadio id="id_test" list={mockList} label="label_value" onChange={() => null} />
  </ThemeProvider>);
  const linkListRadio = getByText(/item_label/i);

  expect(linkListRadio).toBeInTheDocument();
});
