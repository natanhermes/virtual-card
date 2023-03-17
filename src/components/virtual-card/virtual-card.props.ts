import { HTMLProps } from 'react';

export interface VirtualCardProps extends HTMLProps<HTMLDivElement> {
  user: {
    name: string;
  };
}
