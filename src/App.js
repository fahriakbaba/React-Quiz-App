import React from "react";
import { useGlobalContext } from "./context/AppProvider";


function App() {
  const { questions } = useGlobalContext();

  console.log(questions);

  return (
    <div className="App">
      <h3>my quiz</h3>
    </div>
  );
}

export default App;


/* start button color - #FFA800 */