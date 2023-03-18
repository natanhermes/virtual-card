import { TitleProps } from './text.props';

export const Text = ({ text, ...rest }: TitleProps) => {
  return (
    <span className="text-lg font-bold" {...rest}>
      {text}
    </span>
  );
};
