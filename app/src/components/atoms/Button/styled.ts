import styled, { css } from 'styled-components';

import { ButtonProps, Size, BtnType } from './types';

import { shouldNotForwardPropsWithKeys } from 'libs/shouldForwardProp';

export const StyledButton = styled('button').withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<ButtonProps>(['size', 'btnType']),
})<ButtonProps>`
  border: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;

  color: ${(props) => props.theme.color.white};

  ${({ size }) => getSizeStyles(size)}
  ${({ btnType }) => getTypeStyles(btnType)}
`;

const getSizeStyles = (size?: Size) => {
  switch (size) {
    case 'sm':
      return css`
        padding: 5px 10px;
        font-size: 12px;
      `;
    case 'md':
      return css`
        padding: 10px 20px;
        font-size: 14px;
      `;
    case 'lg':
      return css`
        padding: 15px 30px;
        font-size: 16px;
      `;
    default:
      return css``;
  }
};

const getTypeStyles = (btnType?: BtnType) => {
  switch (btnType) {
    case 'primary':
      return css`
        background-color: ${(props) => props.theme.color.blue.primary};
        &:hover:not(:disabled) {
          background-color: ${(props) => props.theme.color.blue.hover};
        }
      `;
    case 'success':
      return css`
        background-color: ${(props) => props.theme.color.green.primary};
        &:hover:not(:disabled) {
          background-color: ${(props) => props.theme.color.green.hover};
        }
      `;
    case 'error':
      return css`
        background-color: ${(props) => props.theme.color.red.primary};
        &:hover:not(:disabled) {
          background-color: ${(props) => props.theme.color.red.hover};
        }
      `;
    case 'cancel':
      return css`
        background-color: ${(props) => props.theme.color.grey.primary};
        &:hover:not(:disabled) {
          background-color: ${(props) => props.theme.color.grey.hover};
        }
      `;
    default:
      return css``;
  }
};
