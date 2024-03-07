import { ReactElement, ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

import { shouldNotForwardPropsWithKeys } from 'libs/shouldForwardProp';

interface Props {
  bgColor: string;
}

const Button = ({ ...rest }: Props & ComponentPropsWithoutRef<'button'>): ReactElement => {
  return <StyledButton {...rest}>asssss</StyledButton>;
};

export default Button;

const StyledButton = styled('button').withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<Props>(['bgColor']),
})<Props>`
  background-color: ${(props) => props.bgColor};
  width: 200px;
  height: 200px;
`;
