import React from 'react';
import { Callout, Flex } from '@radix-ui/themes';
import { InfoCircledIcon } from '@radix-ui/react-icons';

interface Props {
  message: string;
}

export const InfoMessage: React.FC<Props> = ({ message }) => {
  return (
    <Callout.Root>
      <Flex align={'center'} gap={'3'}>
        <Callout.Icon>
          <InfoCircledIcon width={22} height={22} />
        </Callout.Icon>
        <Callout.Text size={'3'}>{message}</Callout.Text>
      </Flex>
    </Callout.Root>
  );
};
