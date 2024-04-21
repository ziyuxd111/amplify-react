// in the config
import React from 'react';
import {
  createChatBotMessage,
  createCustomMessage,
} from 'react-chatbot-kit';
import CustomMessage from './CustomMessage';

const botName = 'Doctor Oesto';

const config = {
  botName: botName,
  lang: 'no',
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5fbfe8',
    },
  },
  initialMessages: [
    createChatBotMessage(
      `Hi I'm ${botName}!. I'm here to help!`
    ),
    createChatBotMessage(
      "Do tell me what can i help you today?",
      {
        withAvatar: false,
        delay: 500,
      }
    ),
    createCustomMessage('Test', 'custom'),
  ],
  state: {
    gist: '',
    infoBox: '',
  },
  customComponents: {},
  customMessages: {
    custom: (props) => <CustomMessage {...props} />,
  },
  widgets: [],
};

export default config;