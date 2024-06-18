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
        <TextField.Root placeholder={'Username…'} radius={'large'} size={'3'}>
          <TextField.Slot>
            <ChatBubbleIcon height={'20'} width={'20'} />
          </TextField.Slot>
          <TextField.Slot style={{ cursor: 'pointer' }}>
            <Tooltip content={'Enter your username'}>
              <QuestionMarkCircledIcon height={'18'} width={'18'} />
            </Tooltip>
          </TextField.Slot>
        </TextField.Root>

        <TextField.Root placeholder={'Message…'} radius={'large'} size={'3'}>
          <TextField.Slot>
            <AvatarIcon height={'20'} width={'20'} />
          </TextField.Slot>
          <TextField.Slot style={{ cursor: 'pointer' }}>
            <Tooltip content={'Enter your username'}>
              <QuestionMarkCircledIcon height={'18'} width={'18'} />
            </Tooltip>
          </TextField.Slot>
        </TextField.Root>

        <Button variant={'surface'} type={'submit'} size={'3'}>
          Send a message
        </Button>
      </Flex>
    </form>
  );
};
