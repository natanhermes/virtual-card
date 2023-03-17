import { VStackProps } from './v-stack.props';

export function VStack({ children }: VStackProps) {
  return <div className="flex flex-col">{children}</div>;
}
