import {
  QuestionMarkCircledIcon,
  AvatarIcon,
  ChatBubbleIcon,
} from '@radix-ui/react-icons';
import { Button, Flex, TextField, Tooltip } from '@radix-ui/themes';

export const ChatForm = () => {
  return (
    <form>
      <Flex direction={'column'} gap={'2'}>
        <TextField.Root placeholder={'Username…'} radius={'large'}>
          <TextField.Slot>
            <ChatBubbleIcon height={'16'} width={'16'} />
          </TextField.Slot>
          <TextField.Slot style={{ cursor: 'pointer' }}>
            <Tooltip content={'Enter your username'}>
              <QuestionMarkCircledIcon height={'16'} width={'16'} />
            </Tooltip>
          </TextField.Slot>
        </TextField.Root>

        <TextField.Root placeholder={'Message…'} radius={'large'}>
          <TextField.Slot>
            <AvatarIcon height={'16'} width={'16'} />
          </TextField.Slot>
          <TextField.Slot style={{ cursor: 'pointer' }}>
            <Tooltip content={'Enter your username'}>
              <QuestionMarkCircledIcon height={'16'} width={'16'} />
            </Tooltip>
          </TextField.Slot>
        </TextField.Root>

        <Button variant={'surface'} type={'submit'}>
          Send a message
        </Button>
      </Flex>
    </form>
  );
};
