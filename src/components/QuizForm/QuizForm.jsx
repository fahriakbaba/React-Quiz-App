import React from "react";
import styles from "./QuizForm.module.css";
import { useGlobalContext } from "../../context/AppProvider";

function QuizForm() {
  const { questions } = useGlobalContext();

  const { correct_answer, incorrect_answers, question } = questions[0];
  console.log(correct_answer, " - ", incorrect_answers, " - ",question);
  const newAnswers = [...incorrect_answers];
  newAnswers.splice(0, 0, correct_answer);
  console.log("new array: ", newAnswers);

  return (
    <main className={styles.container}>
      <section className={styles.quiz}>
        <div className={styles.score} >Score</div>
        <h2 className={styles.question}>{question}</h2>
        <div className={styles.buttons} >
          {newAnswers.map((answer, index) => (
            <button className={styles.btn} key={index}>{answer}</button>
          ))}
        </div>
        <button className={styles.nextButton}>Next Question</button>
      </section>
    </main>
  );
}

export default QuizForm;
