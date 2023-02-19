import React, { useState } from "react";
import Typist from "react-typist";
import Link from "@docusaurus/Link";

import styles from "./index.module.scss";

export default function Home(): JSX.Element {
  const [renderMsg, setRenderMsg] = useState(false);

  const onHeaderTyped = () => {
    setRenderMsg(true);
  };

  return (
    <div className={styles["TypistExample"]}>
      <Typist
        className={styles["TypistExample-header"]}
        avgTypingDelay={40}
        startDelay={2000}
        onTypingDone={onHeaderTyped}
      >
        <Link to="/docs/svg/有趣的svg动画">web blog</Link>
      </Typist>
      <div className={styles["TypistExample-content"]}>
        {renderMsg && (
          <Typist
            className={styles["TypistExample-message"]}
            cursor={{ hideWhenDone: true }}
          >
            * 有趣的svg
            <Typist.Delay ms={1250} />
            <br />
            * 类型约束下的js -- typescript
            <Typist.Delay ms={1250} />
            <br />
            * 学不完的java
            <Typist.Delay ms={500} />
            script
            <Typist.Backspace count={8} delay={1000} />
            <Typist.Delay ms={750} />
            vascript
            <Typist.Delay ms={1250} />
            <br />
            <span>
              *{" "}
              <Link to="/docs/svg/有趣的svg动画" className={styles.flash}>
                Let's go
              </Link>
            </span>
            <br />
          </Typist>
        )}
      </div>
    </div>
  );
}
