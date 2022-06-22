import React from "react";
import styles from "./App.module.scss";

function App() {
  return <div className={styles.App}>{process.env.VISUAL_TEST}</div>;
}

export default App;
