import { ChatForm } from './components/ChatForm/ChatForm';
import { Container, Flex, Separator } from '@radix-ui/themes';
import { InfoMessage } from './components/InfoMessage/InfoMessage';
import { ChatItem } from './components/ChatItem/ChatItem';
import { useEffect, useState } from 'react';
import { Message } from './types';
import axios from 'axios';

const url = 'http://146.185.154.90:8000/messages';

export const App = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Message[]>(url);
        setMessages(response.data);
      } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
      }
    };

    void fetchData();
  }, []);

  const messagesList = messages.map((message) => (
    <ChatItem key={message._id} message={message} />
  ));

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
        {messagesList}
      </Flex>
    </Container>
  );
};
