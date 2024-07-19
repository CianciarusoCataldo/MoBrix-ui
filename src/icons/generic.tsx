import React from "react";
import { MbxIcon } from "../types/global/global";

export const link = (
  <svg
    height="30px"
    viewBox="0 0 457.03 457.03"
    width="30px"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    data-mbx-revimg="def"
    data-mbx-img="link"
  >
    <path d="m421.512 207.074-85.795 85.767c-47.352 47.38-124.169 47.38-171.529 0-7.46-7.439-13.296-15.821-18.421-24.465l39.864-39.861c1.895-1.911 4.235-3.006 6.471-4.296 2.756 9.416 7.567 18.33 14.972 25.736 23.648 23.667 62.128 23.634 85.762 0l85.768-85.765c23.666-23.664 23.666-62.135 0-85.781-23.635-23.646-62.105-23.646-85.768 0l-30.499 30.532c-24.75-9.637-51.415-12.228-77.373-8.424l64.991-64.989c47.38-47.371 124.177-47.371 171.557 0 47.357 47.369 47.357 124.178 0 171.546zm-226.804 141.03-30.521 30.532c-23.646 23.634-62.128 23.634-85.778 0-23.648-23.667-23.648-62.138 0-85.795l85.778-85.767c23.665-23.662 62.121-23.662 85.767 0 7.388 7.39 12.204 16.302 14.986 25.706 2.249-1.307 4.56-2.369 6.454-4.266l39.861-39.845c-5.092-8.678-10.958-17.03-18.421-24.477-47.348-47.371-124.172-47.371-171.543 0L35.526 249.96c-47.366 47.385-47.366 124.172 0 171.553 47.371 47.356 124.177 47.356 171.547 0l65.008-65.003c-25.972 3.826-52.644 1.213-77.373-8.406z" />
  </svg>
);

export const Xicon: MbxIcon = ({
  fill = "var(--mbx-x)",
  disabled,
  hide,
  transform,
  hover,
  width = "1.4rem",
  height = "1.4rem",
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    version="1.0"
    height={height}
    width={width}
    data-mbx-img="x"
    style={
      {
        ...style,
        ...((!hover || disabled) && {
          "--mbx-ic-x-h": "var(--mbx-ic-x)",
        }),
        ...(hide && {
          "--mbx-ic-x": "none",
          "--mbx-ic-x-h": "none",
        }),
      } as React.CSSProperties
    }
    {...(transform && { transform })}
  >
    <path
      fill={fill}
      data-mbx-fts="fillFc"
      d="m119.7496 67.5187-52.186 52.186 69.5301 69.5012c5.9668 5.9667 5.9668 15.5958 0 21.5625l-69.53 69.53 52.186 52.186 69.53-69.53c5.9667-5.9668 15.5958-5.9668 21.5625 0l69.53 69.53 52.186-52.186-69.53-69.53c-5.9668-5.9667-5.9668-15.5958 0-21.5625l69.53-69.5013-52.186-52.186-69.53 69.5013c-5.9667 5.9667-15.5958 5.9667-21.5625 0l-69.53-69.5012z"
    />
  </svg>
);

export const ArrowIcon: MbxIcon = ({
  fill = "var(--mbx-arr)",
  disabled,
  hide,
  transform,
  hover,
  width = "30",
  height = "37",
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 11 18"
    fill={fill}
    data-mbx-img="arr"
    data-mbx-fts="fillFc"
    style={
      {
        ...style,
        ...((!hover || disabled) && {
          "--mbx-ic-arr-h": "var(--mbx-ic-arr)",
        }),
        ...(hide && {
          "--mbx-ic-arr": "none",
          "--mbx-ic-arr-h": "none",
        }),
      } as React.CSSProperties
    }
    {...(transform && { transform })}
  >
    <path d="M8.6812.1963l2.1208928 2.120293-8.484 8.4864L.1972 8.6827z" />
    <path d="M10.8032656 15.0470656l-2.1213 2.1213-8.4852-8.4852 2.1213-2.1213z" />
  </svg>
);

export const CalendarIcon: MbxIcon = ({
  fill,
  disabled,
  hide,
  transform,
  hover,
  width = "20px",
  height = "20px",
  style,
}) => (
  <svg
    width={width}
    height={height}
    data-mbx-img="cal"
    viewBox="0 -256 1850 1850"
    xmlns="http://www.w3.org/2000/svg"
    data-mbx-fts="fillFc"
    style={
      {
        ...style,
        ...((!hover || disabled) && {
          "--mbx-ic-cal-h": "var(--mbx-ic-cal)",
        }),
        ...(hide && {
          "--mbx-ic-cal": "none",
          "--mbx-ic-cal-h": "none",
        }),
      } as React.CSSProperties
    }
    {...(transform && { transform })}
  >
    <path
      d="M219.1 1425.9h288v-288h-288v288zm352 0h320v-288h-320v288zm-352-352h288v-320h-288v320zm352 0h320v-320h-320v320zm-352-384h288v-288h-288v288zm736 736h320v-288h-320v288zm-384-736h320v-288h-320v288zm768 736h288v-288h-288v288zm-384-352h320v-320h-320v320zm-352-864v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm736 864h288v-320h-288v320zm-384-384h320v-288h-320v288zm384 0h288v-288h-288v288zm32-480v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"
      fill={fill}
    />
  </svg>
);

export const CheckIcon: MbxIcon = ({ fill = "inherit" }) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1171.000000 1280.000000"
    preserveAspectRatio="xMidYMid meet"
    fill={fill}
  >
    <g
      transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
      stroke="none"
    >
      <path
        d="M11555 12694 c-1288 -888 -2591 -2076 -3945 -3594 -1475 -1656 -3026
-3783 -4315 -5918 -72 -119 -115 -180 -123 -177 -8 3 -716 474 -1575 1048
-859 574 -1568 1047 -1576 1052 -11 6 -10 2 2 -16 98 -140 3704 -5078 3709
-5079 3 0 34 66 68 148 1225 2918 2422 5234 3838 7427 1148 1777 2481 3497
3899 5028 91 97 163 177 161 177 -2 0 -67 -43 -143 -96z"
      />
    </g>
  </svg>
);

export const CopyIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 60"
    width="25px"
    height="25px"
    version="1.0"
  >
    <rect
      strokeLinejoin="round"
      fillRule="evenodd"
      stroke="#4c4c4c"
      strokeWidth="3.125"
      fill="#ccc"
      rx="2.4745"
      height="36.513"
      width="34.732"
      y="4.5767"
      x="5.0385"
    />
    <rect
      strokeLinejoin="round"
      fillRule="evenodd"
      stroke="#4c4c4c"
      strokeWidth="3.125"
      fill="#b3b3b3"
      rx="2.4745"
      height="36.513"
      width="34.732"
      y="20.161"
      x="20.178"
    />
    <path
      strokeLinejoin="round"
      fillRule="evenodd"
      stroke="#333"
      strokeLinecap="round"
      strokeWidth="3.125"
      fill="#7f7f7f"
      d="M10.971 22.475C19.445 41.064 33.797 36.69 33.934 36.69v-6.15l8.269 9.459-8.338 8.788v-6.219s-19.887 4.647-22.894-20.093z"
    />
  </svg>
);
