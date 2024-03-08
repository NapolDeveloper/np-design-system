import React from 'react';
import type { Preview } from '@storybook/react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../src/styles/GlobalStyles';
import theme from '../src/styles/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

export default preview;
