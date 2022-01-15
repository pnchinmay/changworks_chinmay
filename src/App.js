import logo from './logo.svg';
import './App.css';
import { GlobalHotKeys } from "react-hotkeys";
import confetti from "./confetti.js"

function App() {
  const keyMap = { 
              HotKeys: [
                      "c h a n g w o r k s",
                      "C H A N G W O R K S",
                      "h e l l o",
              ],
  };
  const handlers = {
              HotKeys: () => confetti(),
  };
 
  return (
    <GlobalHotKeys keyMap={keyMap} handlers={handlers} root={true} play>
      <div>Type "changworks"</div>
      <div className="App">
      </div>
    </GlobalHotKeys>
  );
}

export default App;