import React from "react";
import Setup from "./components/QuizSetup/Setup";
import QuizForm from "./components/QuizForm/QuizForm";
import Loading from "./components/Loading";
import { useGlobalContext } from "./context/AppProvider"; 

function App() {
  const { turnPage, loading } = useGlobalContext();

  if (loading) {
    return <Loading />
  }

  return (
    <div className="App">
      { turnPage ? (<QuizForm />) : (<Setup />)}
    </div>
  );
}

export default App;


/* start button color - #FFA800 */