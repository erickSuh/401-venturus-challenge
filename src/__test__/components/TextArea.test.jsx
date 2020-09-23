import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import TextArea from 'components/TextArea';
import theme from 'theme/theme';

test('render a radio list', () => {
  const { getAllByText } = render(
  <ThemeProvider theme={theme}>
    <TextArea id="id_test" value="value" label="label_value" onChange={() => null} />
  </ThemeProvider>);
  const linkTextArea = getAllByText(/label_value/i);

  expect(linkTextArea[0]).toBeInTheDocument();
});
