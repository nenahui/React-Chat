import { ChatForm } from './components/ChatForm/ChatForm';
import { Container, Flex, Separator } from '@radix-ui/themes';
import { InfoMessage } from './components/InfoMessage/InfoMessage';
import { ChatItem } from './components/ChatItem/ChatItem';

export const App = () => {
  return (
    <Container size={'1'}>
      <InfoMessage
        message={
          'Let`s respect each other and avoid spamming. This chat isn`t a spam Olympics, so keep the chaos down and the meaningful conversations up! conversations up!'
        }
      />

      <Separator size={'4'} my={'4'} />

      <ChatForm />

      <Separator size={'4'} my={'4'} />

      <Flex direction={'column'} gap={'3'}>
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </Flex>
    </Container>
  );
};
