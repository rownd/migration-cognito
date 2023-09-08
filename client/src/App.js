import './App.css';
import Login from './components/Login';
import { Account } from './components/Account';
import Status from './components/Status';
// import Settings from './components/Settings';
function App() {
  return (

      <Account>
      <Status/>
      {/* <SignUp/> */}
      <Login/>
      {/* <Settings/> */}
      </Account>
  );
}

export default App;
