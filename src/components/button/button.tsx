import { ButtonProps } from './button.props';

export function Button({ label, ...rest }: ButtonProps) {
  return (
    <button
      className="bg-transparent py-2.5 w-full justify-center rounded-lg border-2 font-bold border-black inline-flex items-center disabled:bg-gray-300 disabled:border-0"
      {...rest}
    >
      {label}
    </button>
  );
}
