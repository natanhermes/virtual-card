import { InputProps } from './input.props';

import { forwardRef } from 'react';
import { VStack } from '../v-stack';
import { HStack } from '../h-stack';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, type, validationErrorMessage, ...rest }, ref) => {
    return (
      <VStack>
        <HStack>
          <span className="flex items-center rounded-l-md border border-r-0 border-gray-300 text-gray-600 bg-gray-300 sm:w-1/4 xs:w-1/3 px-2 justify-center opacity-80 xs:text-xs sm:text-sm">
            {label}
          </span>
          <input
            autoComplete="off"
            className="w-full flex-1 rounded-none rounded-r-md border-0 py-2 px-2 bg-transparent text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-gray-400 xs:text-xs sm:text-sm sm:leading-6"
            ref={ref}
            type={type || 'text'}
            name={name}
            id={name}
            {...rest}
          />
        </HStack>
        {validationErrorMessage && (
          <p className="text-red-500 text-sm mt-1">{validationErrorMessage}</p>
        )}
      </VStack>
    );
  },
);

Input.displayName = 'Input';
