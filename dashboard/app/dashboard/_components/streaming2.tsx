import React, { useState, useEffect } from 'react';

const Stream = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    var configuration = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };
var peerConnection = new RTCPeerConnection(configuration);

// Handle incoming stream from server
peerConnection.ontrack = function(event) {
  var stream = event.streams[0];
  var videoElement = document.getElementById('remote-video');
  if(videoElement)
  if ('srcObject' in videoElement) {
    videoElement.srcObject = stream;
  } else {
    //videoElement.src = window.URL.createObjectURL(stream);
  }
};
    
    return () => {

    };
  }, []); // Empty dependency array ensures effect runs only once

  return (
    <div>
      <h1>Streaming Data</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Stream;
