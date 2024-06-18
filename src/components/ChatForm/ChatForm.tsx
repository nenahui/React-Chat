import React, { useState } from 'react';
import {
  QuestionMarkCircledIcon,
  AvatarIcon,
  ChatBubbleIcon,
} from '@radix-ui/react-icons';
import { Button, Flex, TextField, Tooltip } from '@radix-ui/themes';
import { MessageMutation } from '../../types';

const initialState = {
  author: '',
  message: '',
};

interface Props {
  onSubmit: (messageMutation: MessageMutation) => void;
}

export const ChatForm: React.FC<Props> = ({ onSubmit }) => {
  const [messageMutation, setMessageMutation] =
    useState<MessageMutation>(initialState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessageMutation((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(messageMutation);
    setMessageMutation(initialState);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Flex direction={'column'} gap={'2'}>
        <TextField.Root
          placeholder={'Username…'}
          radius={'large'}
          required={true}
          size={'3'}
          name={'author'}
          onChange={onChange}
          value={messageMutation.author}
        >
          <TextField.Slot>
            <AvatarIcon height={'20'} width={'20'} />
          </TextField.Slot>
          <TextField.Slot style={{ cursor: 'pointer' }}>
            <Tooltip content={'Enter your username'}>
              <QuestionMarkCircledIcon height={'18'} width={'18'} />
            </Tooltip>
          </TextField.Slot>
        </TextField.Root>

        <TextField.Root
          placeholder={'Message…'}
          radius={'large'}
          required={true}
          size={'3'}
          name={'message'}
          onChange={onChange}
          value={messageMutation.message}
        >
          <TextField.Slot>
            <ChatBubbleIcon height={'20'} width={'20'} />
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
