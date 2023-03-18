import { HStackProps } from './h-stack.props';

export function HStack({ children }: HStackProps) {
  return <div className="flex flex-row">{children}</div>;
}
