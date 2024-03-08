import { ComponentPropsWithoutRef } from 'react';
import { sizeStyles } from './styled';

export type Size = 'sm' | 'md' | 'lg';

export type BtnType = 'primary' | 'success' | 'error' | 'cancel';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  size?: Size;
  btnType?: BtnType;
  children?: React.ReactNode;
}
