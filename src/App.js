import React from "react";
import Setup from "./components/QuizSetup/Setup";
import QuizForm from "./components/QuizForm/QuizForm"
import { useGlobalContext } from "./context/AppProvider"; 

function App() {
  const { turnPage } = useGlobalContext();

  return (
    <div className="App">
      { turnPage ? (<QuizForm />) : (<Setup />)}
    </div>
  );
}

export default App;


/* start button color - #FFA800 */