import { ReactElement } from 'react';
import { ButtonProps } from './types';
import { StyledButton } from './styled';

const Button = ({
  size = 'md',
  btnType = 'primary',
  children,
  ...rest
}: ButtonProps): ReactElement => {
  return (
    <StyledButton size={size} btnType={btnType} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
