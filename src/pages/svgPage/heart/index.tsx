import React from "react";

import "./style.css";

export default function Index() {
  return (
    <svg
      id="yichang"
      xmlns="http://www.w3.org/2000/svg"
      width="456"
      height="127"
      viewBox="0 0 456 127"
    >
      <defs>
        <linearGradient
          id="hy-linear-gradient"
          x1="432"
          y1="61.625"
          x2="2"
          y2="61.625"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#26cadd" />
          <stop offset="0.301" stopColor="#26a3ff" />
          <stop offset="0.624" stopColor="#26cadd" />
          <stop offset="0.994" stopColor="#26a3ff" />
          <stop offset="1" stopColor="#26a3ff" />
        </linearGradient>
        <linearGradient
          id="hy-linear-gradient-2"
          x1="432"
          y1="61.625"
          x2="2"
          y2="61.625"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#2b6bdc" />
          <stop offset="0.031" stopColor="#2b6bdc" />
          <stop offset="0.597" stopColor="#2bdcd2" />
          <stop offset="1" stopColor="#2b6bdc" />
        </linearGradient>
        <filter id="hy-filter" filterUnits="userSpaceOnUse">
          <feGaussianBlur result="blur" stdDeviation="6.667" in="SourceAlpha" />
          <feComposite result="composite" />
          <feComposite result="composite-2" />
          <feComposite result="composite-3" />
          <feFlood result="flood" floodColor="#f98800" floodOpacity="0.6" />
          <feComposite result="composite-4" operator="in" in2="composite-3" />
          <feBlend result="blend" in2="SourceGraphic" />
          <feBlend result="blend-2" in="SourceGraphic" />
        </filter>
        <filter
          id="hy-filter-2"
          x="67"
          y="-6"
          width="50"
          height="49"
          filterUnits="userSpaceOnUse"
        >
          <feGaussianBlur result="blur" stdDeviation="6.667" in="SourceAlpha" />
          <feComposite result="composite" />
          <feComposite result="composite-2" />
          <feComposite result="composite-3" />
          <feFlood result="flood" floodColor="#f98800" floodOpacity="0.6" />
          <feComposite result="composite-4" operator="in" in2="composite-3" />
          <feBlend result="blend" in2="SourceGraphic" />
          <feBlend result="blend-2" in="SourceGraphic" />
        </filter>
      </defs>
      <path
        id="curve_right"
        className="hy-cls-1"
        d="M2.006,86.083H31.461l3.006-9.664,4.208,13.288,4.208-10.268,3.006,6.644H73.541l4.208-10.872L83.76,103l7.871-82.748,10.163,71.876,3.607-6.644h11.421l3.607,13.892L124.637,72.8l5.41,20.536,3.006-7.852h46.888l4.208-15.7,6.011,28.388,5.41-19.932,4.208,7.248h37.815L241,76l4,14,5-11,3,6h27l4-11,6,29,10-69,8,57,3-6h13l3,14,4-27,6,20,2-7h46l6-16,5,29,7-20,4,7h25"
      />
      <path
        id="curve"
        className="hy-cls-2"
        d="M2.006,86.083H31.461l3.006-9.664,4.208,13.288,4.208-10.268,3.006,6.644H73.541l4.208-10.872L83.76,103l7.871-82.748,10.163,71.876,3.607-6.644h11.421l3.607,13.892L124.637,72.8l5.41,20.536,3.006-7.852h46.888l4.208-15.7,6.011,28.388,5.41-19.932,4.208,7.248h37.815L241,76l4,14,5-11,3,6h27l4-11,6,29,10-69,8,57,3-6h13l3,14,4-27,6,20,2-7h46l6-16,5,29,7-20,4,7h25"
      />
      <circle className="hy-cls-3" cx="0" cy="0" r="5">
        <animateMotion
          dur="10"
          repeatCount="indefinite"
          rotate="auto"
          begin="0"
        >
          <mpath href="#curve"></mpath>
        </animateMotion>
      </circle>
    </svg>
  );
}
