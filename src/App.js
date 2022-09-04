import React from "react";
import Setup from "./components/QuizSetup.jsx/Setup";
import { useGlobalContext } from "./context/AppProvider";


function App() {
  const { questions } = useGlobalContext();

  console.log(questions);

  return (
    <div className="App">
      <Setup />
    </div>
  );
}

export default App;


/* start button color - #FFA800 */