import { ComponentPropsWithRef, ReactElement } from 'react';
import styled from 'styled-components';
import { shouldNotForwardPropsWithKeys } from 'libs/shouldForwardProp';

interface InputProps extends ComponentPropsWithRef<'input'> {
  label?: string;
}

const InputWithText = ({ label, ...rest }: InputProps): ReactElement => {
  return (
    <StyledInputWrap>
      <StyledInput type="text" {...rest}></StyledInput>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledUnderline className="span-area" />
    </StyledInputWrap>
  );
};

export default InputWithText;

const StyledInputWrap = styled('div')`
  position: relative;
`;

const StyledInput = styled('input').withConfig({
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

const StyledLabel = styled.label`
  position: absolute;
  color: #aaa;
  left: 10px;
  font-size: 1rem;
  bottom: 8px;
  transition: all 0.3s ease;

  ${StyledInput}:focus ~ &, ${StyledInput}:invalid ~ & {
    font-size: 1rem;
    bottom: 40px;
    color: #666666;
    font-weight: 600;
  }
`;

const StyledUnderline = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0%;
  background-color: #666;
  width: 0;
  height: 2px;
  border-radius: 2px;
  transition: 0.5s;

  ${StyledInput}:focus ~ &,
  ${StyledInput}:valid ~ & {
    width: 100%;
  }

  ${StyledInput}:invalid ~ & {
    width: 100%;
    background-color: ${(props) => props.theme.color.red.primary};
  }
`;
