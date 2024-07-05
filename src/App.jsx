
import './App.css'
import Chatbox from './components/Chatbox';
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

const addmessage= () =>{
  const newMessage = { id: 6, text: 'New message!', sender: 'user' }; 
  const newMessages = [...messages, newMessage];
  setMessages(newMessages);
}

  return (
    <div className='App'>

      <div className='content'>
        <footer className='absolute bottom-0 left-0 border-t-2 p-3 w-full text-sm'>Copyright © Datagraphic Ltd 2024</footer>
        <TopBar/>
        <TaskSideBar/>
        <Chatbox addmessage={addmessage}/>
        <Chatwindow messages={messages }/>     
      </div>
      
  </div>
  )
}

export default App
