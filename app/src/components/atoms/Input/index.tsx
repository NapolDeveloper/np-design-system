import { ReactElement } from 'react';

import { InputProps } from './types';

import { StyledInput } from './styled';

const Input = ({ ...rest }: InputProps): ReactElement => {
  return <StyledInput {...rest}></StyledInput>;
};

export default Input;
