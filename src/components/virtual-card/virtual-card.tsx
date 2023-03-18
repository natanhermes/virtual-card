import { forwardRef } from 'react';
import QRCode from 'qrcode.react';

import { Text } from '@/components/text';
import { VirtualCardProps } from './virtual-card.props';

export const VirtualCard = forwardRef<HTMLDivElement, VirtualCardProps>(
  ({ user, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className="flex flex-col w-2/4 h-full items-center justify-evenly absolute top-0 -z-50"
        {...rest}
      >
        <Text text={user.name} />

        <div className="flex flex-col items-center">
          <Text text="Scan Me" />
          <QRCode
            className="mt-6"
            value={`${import.meta.env.VITE_DOMAIN_URL}/${user.name}`}
          />
        </div>
      </div>
    );
  },
);

VirtualCard.displayName = 'VirtualCard';
