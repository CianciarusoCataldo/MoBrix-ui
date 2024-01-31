import React from "react";

import "./styles.css";

import { DrawerComponent } from "../../../types";

import { buildMobrixUiStandardComponent } from "../../../tools";

import drawerComponent from "./component";
import { buildMbxStandardComponent } from "../../../tools/utils";

const ALLOWED_POSITIONS = [
  "right",
  "left",
  "top",
  "bottom",
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
];

/**
 *
 *
 * @param {`left` | `right` | `top` | `bottom` | `top-left` | `top-right` | `bottom-left` | `bottom-right`} position Drawer position, relative to the entire window
 * @param {() => void} onClose callback triggered when Drawer is closed
 * @param {`(JSX.Element` | `string`) | (JSX.Element` | `string`)[]} children Drawer content
 * @param {string} key - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - React key, the standard [key parameter](https://reactjs.org/docs/lists-and-keys.html)
 * @param {string} className - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - custom className applied on main container
 * @param {boolean} dark - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable dark mode
 * @param {boolean} hide - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Hide/show component
 * @param {string} id - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - [id parameter](https://www.w3schools.com/html/html_id.asp) (for styling/testing purpose, to easily find the component into the DOM)
 * @param {boolean} shadow - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable shadow behind component
 * @param {CSSProperties} style - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Css inline properties applied on main container
 * @param {boolean} unstyled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `true`, no standard MoBrix-ui styles will be applied on the components (useful for example, with image buttons)
 * @param {boolean} animated - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component animations
 * @param {boolean} background - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component background
 * @param {boolean} hover - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component hover standard styles
 * @param {boolean} disabled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If true, disable the component. The effect may vary depending on the component type
 * @param {Record<string, any>} additionalProps - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom additional properties, applied to the component
 *
 *
 * @example MBX_EXAMPLE
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/organisms/Drawer
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs
 *
 * @since
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
const Drawer: DrawerComponent = ({
  position,
  hide,
  animated,
  children,
  /* istanbul ignore next */
  onClose = () => {},
  /* istanbul ignore next */
  onFocusLost = () => {},
  ...commonProps
}) => {
  const drawerLocation =
    position && ALLOWED_POSITIONS.includes(position) ? position : "left";

  const [value, setValue] = React.useState("");

  /* istanbul ignore next */
  const onCloseCallback = () => {
    setValue("ease-out");
    setTimeout(() => {
      setValue("");
      onClose();
    }, 200);
  };

  /* istanbul ignore next */
  const customProps = {
    onFocusLost: () => {
      if (!hide) {
        onFocusLost();
        onCloseCallback();
      }
    },
    animation: value.length === 0 ? (hide ? "" : "ease-in") : value,
  };

  return buildMbxStandardComponent(commonProps, (props) => ({
    name: "drawer",
    commonProps: {
      ...props,
      hide: value.length === 0 && hide,
      onFocusLost: customProps.onFocusLost,
    },
    additionalProps: {
      "data-mbx-drawer-location": drawerLocation,
      "data-mbx-drawer-animation": customProps.animation,
    },
    Component: drawerComponent({
      children,
      hide,
      onClose: onCloseCallback,
      ...props,
    }),
  }));
};

export default Drawer;
