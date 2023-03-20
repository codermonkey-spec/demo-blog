import React, { useState } from "react";
import { useSprings, animated } from "react-spring";

import styles from "./index.module.scss";

export const categorys = [
  {
    color: "red",
    from: {
      width: "1px",
    },
    to: {
      width: "160px",
    },
    config: {
      mass: 20,
    },
  },
  {
    color: "green",
    from: {
      width: "1px",
    },
    to: {
      width: "160px",
    },
    config: {
      mass: 1,
    },
  },
  {
    color: "blue",
    from: {
      width: "1px",
    },
    to: {
      width: "160px",
    },
    config: {
      mass: 6,
    },
  },
  {
    color: "orange",
    from: {
      width: "1px",
    },
    to: {
      width: "240px",
    },
    config: {
      mass: 13,
    },
  },
  {
    color: "purple",
    from: {
      width: "1px",
    },
    to: {
      width: "200px",
    },
    config: {
      mass: 13,
      clamp: true,
    },
  },
  {
    color: "yellow",
    from: {
      width: "1px",
    },
    to: {
      width: "260px",
    },
    config: {
      mass: 10,
    },
  },
];

export default function App() {
  const [visible, setVisible] = useState(true);
  const springs = useSprings(
    categorys.length,
    categorys.map(({ color, ...config }) => ({
      ...config,
      // reset: true,
      reverse: visible,
    }))
  );
  return (
    <div>
      {springs.map((spring, index) => {
        return (
          <animated.div
            key={categorys[index].color}
            className={styles.spring}
            style={{
              ...spring,
              backgroundColor: categorys[index].color,
            }}
          ></animated.div>
        );
      })}
      <button onClick={() => setVisible((v) => !v)} className="mybtn">
        切换
      </button>
    </div>
  );
}
