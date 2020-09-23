import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import CustomTag from 'components/CustomTag';
import Theme from 'theme/theme';

test('render a custom tag', () => {
  const { getByText } = render(
    <ThemeProvider theme={Theme}>
      <CustomTag value={["foo", "bar"]} header="test_header"/>
    </ThemeProvider>);
  const linkCustomTagHeader = getByText(/test_header/i);

  expect(linkCustomTagHeader).toBeInTheDocument();
});
