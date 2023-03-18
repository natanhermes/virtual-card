import { forwardRef } from 'react';
import { VStack } from '../v-stack';
import { TextareaProps } from './textarea.props';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label = 'Textearea Label', validationErrorMessage, ...rest }, ref) => {
    return (
      <VStack>
        <span className="flex items-center rounded-l-md border border-r-0 border-gray-300 text-gray-600 bg-gray-300 sm:w-1/4 xs:w-1/3 py-2 justify-center opacity-80 xs:text-xs sm:text-sm ">
          {label}
        </span>
        <textarea
          id="message"
          rows={4}
          className="block p-2.5 mt-4 w-full resize-none rounded-none rounded-r-md border-0 bg-transparent text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-gray-400"
          ref={ref}
          {...rest}
        />
        {validationErrorMessage && (
          <p className="text-red-500 text-sm mt-1">{validationErrorMessage}</p>
        )}
      </VStack>
    );
  },
);

Textarea.displayName = 'Textarea';
