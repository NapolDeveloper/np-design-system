import { PropsWithChildren } from 'react';
import ThemeProvider from './ThemeProvider';

/** index Provider 컴포넌트 */
const Provider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
};

export default Provider;
