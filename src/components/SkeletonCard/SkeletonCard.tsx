import { Card, Flex, Skeleton, Text } from '@radix-ui/themes';

export const SkeletonCard = () => {
  return (
    <Skeleton>
      <Card>
        <Flex justify={'between'}>
          <Text as={'div'} size={'3'} weight={'bold'}>
            Loading...
          </Text>
          <Text as={'div'} size={'2'} weight={'light'}>
            10:00 AM
          </Text>
        </Flex>
        <Text as={'div'} color={'gray'} size={'3'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, id.
        </Text>
      </Card>
    </Skeleton>
  );
};
