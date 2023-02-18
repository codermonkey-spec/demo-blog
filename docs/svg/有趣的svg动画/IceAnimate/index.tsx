import React, { useReducer } from "react";

import "./style.css";

const Index = () => {
  const [num, forceUpdate] = useReducer((x) => x + 1, 0);
  return (
    <div>
      <svg
        key={num}
        id="popsicle"
        width="300"
        height="400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 177.3 449.1"
      >
        <g stroke="black" strokeWidth="5px">
          <path
            className="stick"
            d="M408.8,395.9V502.4a18.8,18.8,0,0,1-18.8,18.8h0a18.8,18.8,0,0,1-18.8-18.8V415.3"
            transform="translate(-301.2 -73.5)"
            fill="none"
          />
          <path
            className="drop"
            d="M359.1,453.5c0,3.1-2.1,5.6-4.7,5.6s-4.7-2.5-4.7-5.6,2.1-8.3,4.7-8.3S359.1,450.4,359.1,453.5Z"
            transform="translate(-301.2 -73.5)"
            fill="none"
          />
          <path
            className="outline"
            d="M389.9,75h0a87.4,87.4,0,0,0-87.2,87.2v218a15.7,15.7,0,0,0,15.7,15.7h12a4.3,4.3,0,0,1,4.1,4.8h0.1v17c0,8.2,9.1,7.9,9.1,0v-6c0-5.2,5.8-5.2,5.8,0v20.5c0,7.7,9.8,7.7,9.8,0V407.2c0-5.2,6.4-5.2,6.4,0v2.7c0,7.7,8.8,7.7,8.8,0v-6c0-6.4,3.9-7.8,6-8.1h80.9a15.7,15.7,0,0,0,15.7-15.7v-218A87.4,87.4,0,0,0,389.9,75Z"
            transform="translate(-301.2 -73.5)"
            fill="none"
          />

          <path
            className="inside-l"
            d="M55.5,68h0A20.2,20.2,0,0,1,75.7,88.2V276.9a4.5,4.5,0,0,1-4.5,4.5H39.8a4.5,4.5,0,0,1-4.5-4.5V88.2A20.2,20.2,0,0,1,55.5,68Z"
            fill="none"
          />
          <path
            className="inside-r"
            d="M121.8,68h0A20.2,20.2,0,0,1,142,88.2V277a4.4,4.4,0,0,1-4.4,4.4H106.1a4.4,4.4,0,0,1-4.4-4.4V88.2A20.2,20.2,0,0,1,121.8,68Z"
            fill="none"
          />
        </g>
      </svg>
      <div>
        <button onClick={forceUpdate} style={{ marginBottom: 15 }}>
          开始动画
        </button>
      </div>
    </div>
  );
};

export default Index;
