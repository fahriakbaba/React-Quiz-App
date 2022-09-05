import React from "react";
import styles from "./Setup.module.css";
import { useGlobalContext } from "../../context/AppProvider";

function Setup() {
  const { quiz, handleChange, handleSubmit } = useGlobalContext();

  return (
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit} >
        <div className={styles.group}>
          <label className={styles.label} htmlFor="number">
            Number Of Questions
          </label>
          <input
            value={quiz.amount}
            onChange={handleChange}
            className={styles.input}
            type="number"
            name="amount"
            id="number"
            placeholder="10"
          />
        </div>
        <div className={styles.group}>
          <label className={styles.label} htmlFor="category">
            Category
          </label>
          <select
            value={quiz.category}
            onChange={handleChange}
            className={styles.select}
            name="category"
            id=""
          >
            <option value="21">Sports</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="27">Animals</option>
            <option value="25">Art</option>
            <option value="19">Science: Mathematics</option>
          </select>
        </div>
        <div className={styles.group}>
          <label className={styles.label} htmlFor="category">
            Select Difficulty
          </label>
          <select
            value={quiz.difficulty}
            onChange={handleChange}
            className={styles.select}
            name="difficulty"
            id=""
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button className={styles.button} type="submit">
          Start
        </button>
      </form>
    </main>
  );
}

export default Setup;
