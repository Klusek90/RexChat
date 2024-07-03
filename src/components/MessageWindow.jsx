import React, { useState } from 'react'

const Chatwindow = () => {

    const [messages, setMessages] = useState([
        { id: 1, text: 'Hello!', sender: 'user' },
        { id: 2, text: 'Hi there!', sender: 'bot' },
        { id: 3, text: 'How are you?', sender: 'user' },
        { id: 4, text: 'I am good, thank you!', sender: 'bot' },
        { id: 4, text: 'Bla bla!', sender: 'user' }
      ]);

  return (
 <div className='w-full'>
      <div className=" bg-transparent p-4 rounded shadow-xl">
       
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-3 p-3 rounded ${
                message.sender === 'user' ? 'bg-blue-500 text-right' : 'bg-gray-700 text-left'
              }`}
            >
              {message.text}
            </div>
          ))}
        
      </div>
    </div>
  )
}

export default Chatwindow