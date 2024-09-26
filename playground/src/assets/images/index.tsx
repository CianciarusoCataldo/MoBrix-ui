import Logo from "./icons/commons/logo.png";

import DarkMode from "./icons/commons/dark-mode.svg";
import LightMode from "./icons/commons/light-mode.svg";

import Docs from "./icons/commons/docs.svg";

import IT_FLAG from "./icons/langs/it.svg";
import FR_FLAG from "./icons/langs/fr.svg";
import EN_FLAG from "./icons/langs/en.svg";
import DE_FLAG from "./icons/langs/de.svg";
import ES_FLAG from "./icons/langs/es.svg";

export const DrawerLogoIcon = <img alt="" src={Logo} width={50} height={50} />;

export const LogoIcon = (
  <img
    className="w-12 h-12"
    alt=""
    src={Logo}
  />
);

export const DocsIcon = <img alt="" src={Docs} width={30} height={30} />;

export const DarkModeIcon = <img alt="" src={DarkMode} width={30} />;

export const LightModeIcon = <img alt="" src={LightMode} width={30} />;

export const LANGUAGES_ICONS: Record<string, JSX.Element> = {
  it: <img alt="" width={20} height={20} src={IT_FLAG} />,
  de: <img alt="" width={20} height={20} src={DE_FLAG} />,
  fr: <img alt="" width={20} height={20} src={FR_FLAG} />,
  es: <img alt="" width={20} height={20} src={ES_FLAG} />,
  en: <img alt="" width={20} height={20} src={EN_FLAG} />,
};

export const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg
    tabIndex={0}
    className={`w-8 h-10 hover:fill-[#ff9f51] active:fill-[#fb7a10] focus-visible:fill-[#fb7a10] focus:outline-none ${className}`}
    viewBox="0 0 11 18"
  >
    <path d="M8.681.196l2.121 2.12-8.484 8.487-2.12-2.12z" />
    <path d="M10.803 15.047l-2.121 2.121L.197 8.683l2.121-2.121z" />
  </svg>
);

const size = {
  width: "30px",
  height: "30px",
};

export const ICONS = {
  FULL: (
    <svg viewBox="0 0 640 480" {...size}>
      <defs>
        <linearGradient id="prefix__a">
          <stop stopColor="#fff" offset={0} />
          <stop stopColor="#fff" stopOpacity={0} offset={1} />
        </linearGradient>
        <linearGradient
          y2={0.892}
          x2={0.5}
          y1={0}
          x1={0.5}
          id="prefix__b"
          xlinkHref="#prefix__a"
        />
      </defs>
      <g fill="#fff">
        <path d="M223.68 193.958h225.4V389h-225.4z" />
        <path d="M178.596 215.074s156.274-108.026 156.35-109.797c.075-1.772 151.033 106.496 151.033 106.496l-307.383 3.301z" />
      </g>
      <circle fill="#ff7f00" cx={330} cy={242} r={230} />
      <path
        opacity={0.75}
        fill="url(#prefix__b)"
        fillRule="evenodd"
        d="M527.64 189.227a196.774 157.93 0 11-393.549 0 196.774 157.93 0 11393.55 0z"
      />
    </svg>
  ),
  EMPTY: (
    <svg viewBox="0 0 400 400" {...size}>
      <path
        d="M349.417 199.627c0 82.844-67.16 150.003-150.004 150.003S49.41 282.471 49.41 199.627 116.57 49.624 199.413 49.624s150.004 67.158 150.004 150.003z"
        fill="#999"
      />
      <path
        transform="matrix(2.7878 0 0 2.7878 -647.405 -765.254)"
        d="M356.79 346.11c0 29.291-23.745 53.036-53.036 53.036s-53.036-23.745-53.036-53.036 23.745-53.036 53.036-53.036 53.036 23.745 53.036 53.036z"
        fill="#999"
      />
      <path
        transform="matrix(2.53784 0 0 2.53784 -571.472 -678.737)"
        d="M356.79 346.11c0 29.291-23.745 53.036-53.036 53.036s-53.036-23.745-53.036-53.036 23.745-53.036 53.036-53.036 53.036 23.745 53.036 53.036z"
        fill="#999"
        filter="url(#prefix__c)"
      />
      <path
        transform="translate(-540.441 -643.38) scale(2.43566)"
        d="M356.79 346.11c0 29.291-23.745 53.036-53.036 53.036s-53.036-23.745-53.036-53.036 23.745-53.036 53.036-53.036 53.036 23.745 53.036 53.036z"
        fill="#999"
        filter="url(#prefix__c)"
      />
      <path
        transform="matrix(2.34121 0 0 2.34121 -511.747 -610.697)"
        d="M356.79 346.11c0 29.291-23.745 53.036-53.036 53.036s-53.036-23.745-53.036-53.036 23.745-53.036 53.036-53.036 53.036 23.745 53.036 53.036z"
        fill="#999"
      />
      <path
        d="M193.79 862.76c-13.331.3-26.186 7.358-33.336 19.742-7.69 13.32-6.714 29.266 1.155 41.331.853-26.532 21.132-46.515 46.324-45.054 8.258.48 16.054 3.2 22.859 7.59a39.222 39.222 0 00-16.394-18.326 39.368 39.368 0 00-20.608-5.282z"
        fill="#970"
        opacity={0.318}
        transform="translate(-366.51 -2423.6) scale(2.9052)"
      />
    </svg>
  ),
};
