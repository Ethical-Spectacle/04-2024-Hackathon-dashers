import React, { useState, useEffect } from 'react';

const Stream = () => {
  const [messages, setMessages] = useState([]);
  const [imageSrc, setImageSrc] = useState('');

  // useEffect(() => {
  //   // Establish WebSocket connection when component mounts
  //   const socket = new WebSocket("ws://localhost:8000/ws");

  //   // Event listener for incoming messages
  //   socket.onmessage = (event) => {
  //     // Parse incoming message
  //     const frame_base64 = event.data;
  //     setImageSrc(`data:image/jpeg;base64,${frame_base64}`);
  //     const message = JSON.parse(event.data);
  //     // Update state with new message
  //     const prevMessage = [];
  //     console.log(message)
  //     //setMessages((prevMessages) => [...prevMessages, message]);
  //   };

  //   // Cleanup function to close WebSocket connection
  //   return () => {
  //     socket.close();
  //   };
  // }, []); // Empty dependency array ensures effect runs only once

  return (
    <div>
      <h1>Streaming Data</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <img src={imageSrc} alt="Video Feed" />
    </div>
  );
};

export default Stream;
