
import './App.css'
import Chatbox from './components/Chatbox';
import Chatwindow from './components/MessageWindow';
import TopBar from './components/Navbar';
import TaskSideBar from './components/TaskSideBar';

function App() {

  return (
    <div>
        <footer className='absolute bottom-0 left-0 border-t-2 p-3 w-full text-sm'>Copyright © Datagraphic Ltd 2024</footer>
        <TaskSideBar/>
        <TopBar/>
        <Chatbox/>
        <Chatwindow/>
        
  </div>
  )
}

export default App
