import './App.css';
import SignUp from './components/Signup';
import Login from './components/Login';
import { Account } from './components/Account';
import Status from './components/Status';
import { useRownd } from "@rownd/react";
// import Settings from './components/Settings';
function App() {

  const { is_authenticated } = useRownd();

  return (

      <Account>
      <Status/>
      {/* <SignUp/> */}
      {is_authenticated ? 'welcome': <Login/>}
    
      {/* <Settings/> */}
      </Account>
  );
}

export default App;
