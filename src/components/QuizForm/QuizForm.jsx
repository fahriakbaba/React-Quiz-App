import React from "react";
import styles from "./QuizForm.module.css";
import { useGlobalContext } from "../../context/AppProvider";

function QuizForm() {
  const { questions, nextQuestion, count, checkAnswer, score } = useGlobalContext();

  const { correct_answer, incorrect_answers, question } = questions[count];
  const newAnswers = [...incorrect_answers];
  newAnswers.splice(0, 0, correct_answer);
  console.log("new array: ", newAnswers);

  return (
    <main className={styles.container} onSubmit={e => e.preventDefault()}>
      <section className={styles.quiz}>
        <div className={styles.score} >Score {score} of {questions.length}</div>
        <h2 className={styles.question} dangerouslySetInnerHTML={{__html: question}} />
        <div className={styles.buttons} >
          {newAnswers.map((answer, index) => (
            <button onClick={() => checkAnswer(answer===correct_answer)} className={styles.btn} key={index} dangerouslySetInnerHTML={{__html: answer}} />
          ))}
        </div>
        <button onClick={nextQuestion} className={styles.nextButton} >Next Question</button>
      </section>
    </main>
  );
}

export default QuizForm;
