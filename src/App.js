import "./App.css";
import { GlobalHotKeys } from "react-hotkeys";
import myConfetti from "./confetti.js"

function App() {
  const keyMap = { 
              HotKeys: [
                      "c h a n g w o r k s",
                      "C H A N G W O R K S",
                      "Shift+c h a n g w o r k s",
                      "Shift+c Shift+h Shift+a Shift+n Shift+g Shift+w Shift+o Shift+r Shift+k Shift+s",
                      "h e l l o",
              ],
  };
  const handlers = {
              HotKeys: () => myConfetti(),
  };
 
  return (
    <>
    <GlobalHotKeys keyMap={keyMap} handlers={handlers}>
      <div>
        <h1>Type "changworks"</h1>
      </div>
    </GlobalHotKeys>
    </>
  );
}

export default App;