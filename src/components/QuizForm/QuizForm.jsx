import React from "react";
import styles from "./QuizForm.module.css";
import { useGlobalContext } from "../../context/AppProvider";
import Modal from "../Modal/Modal";

function QuizForm() {
  const { questions, nextQuestion, count, checkAnswer, score, isModal } =
    useGlobalContext();

  const { correct_answer, incorrect_answers, question } = questions[count];
  const newAnswers = [...incorrect_answers];
  const randonQueue = Math.floor(Math.random() * (newAnswers.length + 1));
  newAnswers.splice(randonQueue, 0, correct_answer);

  return (
    <main className={styles.container}>
      <section className={styles.quiz}>
        <div className={styles.score}>
          Score {score} of {questions.length}
        </div>
        <h2
          className={styles.question}
          dangerouslySetInnerHTML={{ __html: question }}
        />
        <div className={styles.buttons}>
          {newAnswers.map((answer, index) => (
            <button
              type="button"
              onClick={() => checkAnswer(answer === correct_answer)}
              className={styles.btn}
              key={index}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={nextQuestion}
          className={styles.nextButton}
        >
          Next Question
        </button>
      </section>
      {isModal && <Modal />}
    </main>
  );
}

export default QuizForm;
