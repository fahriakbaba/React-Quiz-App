import React from "react";
import axios from "axios";


export const AppContext = React.createContext();

export default function AppProvider({ children }) {
    const [questions, setQuestions] = React.useState([]);
    const [quiz, setQuiz] = React.useState({
        amount: 10,
        category: "21",
        difficulty: "easy"
    });
    const [loading, setLoading] = React.useState(false);
    const [turnPage, setTurnPage] = React.useState(false);
    const [error, setError] = React.useState(false);
    // const [score, setSocre] = React.useState(0);

    const getData = async (url) => {
        setLoading(true);
        setTurnPage(false);
        try {
            const res = await axios.get(url);
            if (res.status === 200 && (res.data.results.length > 0)) {
                setQuestions(res.data.results);
                setLoading(false);
                setTurnPage(true);
            } else {
                setLoading(false);
                setError(true);
                throw new Error("Don't show data!");
                
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setQuiz(oldState => ({
            ...oldState,
            [name]: value,
        }))
    }
    console.log(quiz);

    const handleSubmit = (e) => {
        e.preventDefault();
        const URL = `https://opentdb.com/api.php?amount=${quiz.amount}&category=${quiz.category}&difficulty=${quiz.difficulty}`;
        getData(URL);
    }

    return (
        <AppContext.Provider value={{ questions, quiz, turnPage, loading, error, handleChange, handleSubmit }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return React.useContext(AppContext);
}