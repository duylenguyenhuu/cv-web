import "./App.css";
import { LanguageContextProvider } from "./components";
import MainCV from "./page/mainCV";

function App() {
  return (
    <LanguageContextProvider>
      <MainCV />
    </LanguageContextProvider>
  );
}

export default App;
