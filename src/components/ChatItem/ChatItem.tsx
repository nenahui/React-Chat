import { Card, Flex, Text } from '@radix-ui/themes';

export const ChatItem = () => {
  return (
    <Card>
      <Flex justify={'between'}>
        <Text as={'div'} size={'2'} weight={'bold'}>
          Quick start
        </Text>
        <Text as={'div'} size={'1'} weight={'light'}>
          10:53 PM
        </Text>
      </Flex>
      <Text as={'div'} color={'gray'} size={'2'}>
        Start building your next project in minutes
      </Text>
    </Card>
  );
};
