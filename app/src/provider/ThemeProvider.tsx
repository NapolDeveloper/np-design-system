import { PropsWithChildren } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

import { theme } from 'styles/theme';

/** 테마 제공 컴포넌트 */
const ThemeProvider = ({ children }: PropsWithChildren) => {
  console.log(theme);
  return <StyledProvider theme={theme}>{children}</StyledProvider>;
};

export default ThemeProvider;
