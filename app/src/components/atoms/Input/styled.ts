import styled from 'styled-components';

import { InputProps } from './types';

import { shouldNotForwardPropsWithKeys } from 'libs/shouldForwardProp';

export const StyledInput = styled('input').withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<InputProps>([]),
})<InputProps>`
  font-size: 1rem;
  color: ${(props) => props.theme.color.black};
  width: 300px;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.color.grey.primary};
  padding-bottom: 10px;
  padding-left: 10px;
  position: relative;
  background: none;
  z-index: 5;

  &::placeholder {
    color: ${(props) => props.theme.color.grey.primary};
  }

  &:focus {
    outline: none;
  }
`;
