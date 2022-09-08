import React from "react";
import styles from "./Modal.module.css";
import { useGlobalContext } from "../../context/AppProvider";

function Modal() {
    const { closeModal, score, questions } = useGlobalContext();
    const rateCorrectAnswer = ((score/questions.length)*100).toFixed();
    return(
        <main className={styles.container}>
            <div className={styles.modal}>
                <h3 className={styles.title}>Congrats!</h3>
                <p className={styles.info}>You answered {rateCorrectAnswer}% of questions correctly.</p>
                <button onClick={closeModal} className={styles.playBtn} type="button">Play Again</button>
            </div>
        </main>
    )
}

export default Modal;