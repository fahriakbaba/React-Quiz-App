import React from "react";
import axios from "axios";


export const AppContext = React.createContext();

export default function AppProvider( {children} ) {
    const [questions, setQuestions] = React.useState([]);
    React.useEffect(() => {
        getData();
      }, [])
     
      function getData() {
       axios.get('https://opentdb.com/api.php?amount=10&category=21')
       .then(res => setQuestions(res.data.results))
      }
     



    return(
        <AppContext.Provider value={{questions,}}>
            {children}
        </AppContext.Provider>
    )
}  

export const useGlobalContext = () => {
    return React.useContext(AppContext);
}