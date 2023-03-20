import React, { useState } from "react";
import { useTrail, animated } from "react-spring";

import styles from "./index.module.scss";

const categorysColor = ["red", "green", "blue", "orange", "purple", "yellow"];

export default function Index() {
  const [visible, setVisible] = useState(false);
  const springValues = useTrail(categorysColor.length, {
    from: {
      width: "1px",
    },
    to: {
      width: "200px",
    },
    // reset: true,
    reverse: visible,
  });
  return (
    <div style={{ height: 200, background: "#28505d" }}>
      {springValues.map((spring, index) => {
        return (
          <animated.div
            key={categorysColor[index]}
            className={styles.spring}
            style={{
              ...spring,
              backgroundColor: categorysColor[index],
            }}
          />
        );
      })}
      <button onClick={() => setVisible((v) => !v)}>click</button>
    </div>
  );
}
