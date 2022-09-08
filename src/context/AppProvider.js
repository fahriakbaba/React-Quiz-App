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
    const [count, setCount] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [isModal, setIsModal] = React.useState(false);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const URL = `https://opentdb.com/api.php?amount=${quiz.amount}&category=${quiz.category}&difficulty=${quiz.difficulty}`;
        getData(URL);
    }

    const nextQuestion = () => {
        let index = count + 1;
        if (index > (questions.length - 1)) {
            index = 0;
            openModal();
        }
        setCount(index);
    }

    const checkAnswer = (check) => {

        if (check) {
            setScore(oldScore => oldScore + 1);
            nextQuestion();
        } else {
            nextQuestion();
        }
    }

    const openModal = () => {
        setIsModal(true);
    }

    const closeModal = () => {
        setIsModal(false);
        setLoading(false);
        setTurnPage(false);
        setScore(0);
    }

    return (
        <AppContext.Provider
            value={{
                questions,
                quiz,
                turnPage,
                loading,
                error,
                count,
                score,
                isModal,
                handleChange,
                handleSubmit,
                nextQuestion,
                checkAnswer,
                openModal,
                closeModal,
            }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return React.useContext(AppContext);
}