import React from 'react';
import { Card, Flex, Text } from '@radix-ui/themes';
import { Message } from '../../types';
import { format } from 'date-fns';

interface Props {
  message: Message;
}

export const ChatItem: React.FC<Props> = ({ message }) => {
  return (
    <Card>
      <Flex justify={'between'}>
        <Text as={'div'} size={'3'} weight={'bold'}>
          {message.author}
        </Text>
        <Text as={'div'} size={'2'} weight={'light'}>
          {format(message.datetime, 'hh:mm aa')}
        </Text>
      </Flex>
      <Text as={'div'} color={'gray'} size={'3'}>
        {message.message}
      </Text>
    </Card>
  );
};
