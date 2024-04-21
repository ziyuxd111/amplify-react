import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const sendMessageToBackend = (message) => {
    const url = '/prod/hello'; // Make sure you have a proxy set up in package.json for this to work
    const headers = {
      "Content-Type": "application/json"
    };

    const data = JSON.stringify({
      "user": "User",
      "content": message
    });

    const payload = { body: data };

    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload),
    })
    .then(response => response.json())
    .then(data => {
      // The response body is a stringified JSON, so parse it to get the actual message
      const messageFromBackend = JSON.parse(data.body);
      const responseMessage = createChatBotMessage(`Dr.Oesto: ${messageFromBackend}`);
      setState(prevState => ({
        ...prevState,
        messages: [...prevState.messages, responseMessage],
      }));
    })
    .catch((error) => {
      console.error('Request failed:', error);
    });
  };

  const handleMessage = (message) => {
    sendMessageToBackend(message);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleMessage,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
