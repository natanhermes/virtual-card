import { HTMLProps } from 'react';

export interface TitleProps extends HTMLProps<HTMLHeadingElement> {
  text?: string;
}
