import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

function App() {
  return (
    <div>
      <Profile />
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default App;
