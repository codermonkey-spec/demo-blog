import React, { useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

function Test() {
  const ref = useRef(false);
  const [styles, api] = useSpring(() => ({
    transform: "translateX(0px)",
  }));

  const handleClick = () => {
    ref.current = !ref.current;
    api.start({
      transform: ref.current ? "translateX(100px)" : "translateX(0px)",
    });
  };

  return (
    <div
      style={{
        height: 200,
        backgroundColor: "#28505d",
        display: "flex",
        alignItems: "center",
      }}
    >
      <animated.div
        style={{
          lineHeight: "40px",
          textAlign: "center",
          height: 40,
          width: 60,
          backgroundColor: "red",
          border: "1px solid darkslategrey",
          borderRadius: 8,
          cursor: "pointer",
          ...styles,
        }}
        onClick={handleClick}
      >
        click
      </animated.div>
    </div>
  );
}

export default Test;
