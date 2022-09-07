import React from "react";
import styles from "./Loading.module.css";

function Loading() {
  return (
    <main className={styles.container}>
      <div className="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}

export default Loading;
