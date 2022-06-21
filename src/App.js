import React from "react";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      Developers write tests to gain confidence. Confidence that their
      application or site is working as expected for every user. Confidence that
      every logical flow has a proper ending. And confidence that when they
      modify existing code, they aren’t accidentally breaking something else. Of
      all the different testing strategies, one of the least mentioned methods
      is that of visually confirming that the design looks as intended. It’s
      much easier to write unit, integration, or end-to-end tests to confirm
      that user flows are functional. All these tests are written with more
      code, and as developers, we’re comfortable with this. But it’s
      traditionally been a manual process to go through the application to
      visually check that the application appears as your designers intended.
      This article looks at new approaches to automating visual regression tests
      and unlocking greater confidence in releasing.
    </div>
  );
}

export default App;
