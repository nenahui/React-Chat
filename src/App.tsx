import { ChatForm } from './components/ChatForm/ChatForm';
import { Container, Flex, Separator } from '@radix-ui/themes';
import { InfoMessage } from './components/InfoMessage/InfoMessage';
import { ChatItem } from './components/ChatItem/ChatItem';
import { useEffect, useState } from 'react';
import { Message, MessageMutation } from './types';
import axios from 'axios';

const url = 'http://146.185.154.90:8000/messages';

export const App = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [lastMessageDate, setLastMessageDate] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Message[]>(
          url + (lastMessageDate !== '' ? '?datetime=' + lastMessageDate : '')
        );
        if (response.data.length > 0) {
          setMessages((prevState) => [...prevState, ...response.data]);
          setLastMessageDate(response.data[response.data.length - 1].datetime);
        }
      } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
      }
    };

    void fetchData();

    const interval = setInterval(fetchData, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [lastMessageDate]);

  const sendMessage = async (message: MessageMutation) => {
    const data = new URLSearchParams();
    data.set('author', message.author);
    data.set('message', message.message);
    await axios.post(url, data);
  };

  const messagesList = messages
    .slice()
    .reverse()
    .map((message) => <ChatItem key={message._id} message={message} />);

  return (
    <Container size={'1'}>
      <InfoMessage
        message={
          'Let`s respect each other and avoid spamming. This chat isn`t a spam Olympics, so keep the chaos down and the meaningful conversations up! conversations up!'
        }
      />

      <Separator size={'4'} my={'4'} />

      <ChatForm onSubmit={sendMessage} />

      <Separator size={'4'} my={'4'} />

      <Flex direction={'column'} gap={'3'}>
        {messagesList}
      </Flex>
    </Container>
  );
};
