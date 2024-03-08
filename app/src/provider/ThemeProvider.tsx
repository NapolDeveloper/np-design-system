import { PropsWithChildren } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';

import theme from 'styles/theme';

/** 테마 제공 컴포넌트 */
const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <StyledProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledProvider>
  );
};

export default ThemeProvider;
