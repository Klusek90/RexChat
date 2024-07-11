
import './App.css'

import Chatwindow from './components/MessageWindow';
import TopBar from './components/Navbar';
import TaskSideBar from './components/TaskSideBar';
import { useState } from 'react';

function App() {

  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello!', sender: 'user' },
    { id: 2, text: 'Hi there!', sender: 'bot' },
    { id: 3, text: 'How are you?', sender: 'user' },
    { id: 4, text: 'I am good, thank you!', sender: 'bot' },
    { id: 5, text: 'Bla bla!', sender: 'user' }
  ]);

const handleResponse = (message) => {
  const newMessages = [...messages, message];
  setMessages(newMessages);
};

  return (
    <div className='App'>

      <div className='content'>
        <TopBar/>
        <TaskSideBar/>
        <Chatwindow messages={messages} handleResponse={handleResponse}/>       

      </div>
        <footer className='p-4 w-full text-sm text-center'>Copyright © Datagraphic Ltd 2024</footer>
      
  </div>
  )
}

export default App
