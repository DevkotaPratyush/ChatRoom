import {ChatEngine, } from 'react-chat-engine';
import './App.css'
import LoginForm from './Components/LoginForm'

import ChatFeed from './Components/ChatFeed';
import ChatSettings from'./Components/ChatSettings'
const App=()=>
{

    if (! localStorage.getItem("username")) return<LoginForm/>
    return(
        
        <ChatEngine
        height="100vh"
        projectID="4a9645fd-6fba-4bc1-bc0c-141acca8d425"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
        renderChatSettings={(chatAppProps)=><ChatSettings {...chatAppProps} />}
        
        />
    )
}
export default App;