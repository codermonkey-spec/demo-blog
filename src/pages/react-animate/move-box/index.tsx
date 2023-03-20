import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

function App() {
  const [open, setOpen] = useState(false);
  const styles = useSpring({
    transform: open ? "translateX(100px)" : "translateX(0px)",
  });

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#28505d",
        display: "flex",
        alignItems: "center",
        justifyContent:"center"
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
        onClick={() => setOpen((prev) => !prev)}
      >
        click
      </animated.div>
    </div>
  );
}

export default App;
