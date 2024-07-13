import "./styles.css";

import { FormFieldComponent } from "../../../types";

import { buildMbxReactiveComponent } from "../../../tools";
import { fieldFormatters } from "./utils";

import component from "./component";

/**
* A single form field. Depending on its `type`, a different input component is used inside
*
* @param {'boolean' | 'text' | 'numeric' | 'radio' | 'checkbox' | 'toggle' | 'rater' | 'slider' | 'input' | 'counter'} type The field type. It determines the UI component to be used to render it. Allowed types are:
- `boolean` (rendered as a CheckBox)
- `numeric` (rendered as a Counter)
- `text` (rendered as a Input)
- `radio` (rendered as a RadioButton)
- `checkbox` (rendered as a CheckBox)
- `toggle` (rendered as a Toggle)
- `rater` (rendered as a Rater)
- `slider` (rendered as a Slider)
- `input` (rendered as a Input)
- `counter` (rendered as a Counter)
* @param {boolean} required If true, the field switch to error state if its value is empty
* @param {(fieldValue: any) => boolean} validate Custom validation function called on submit
* @param {`JSX.Element` | `string`} header Form field header
* @param {string} headerClassName Custom classname applied on every header element
* @param {Record<string, any>} headerProps Custom props applied on every header element (including MoBrix-ui shared props)
* @param {`JSX.Element` | `string`} errorLabel Custom error box content, displayed when FormField is in error state
* @param {string} key - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - React key, the standard [key parameter](https://reactjs.org/docs/lists-and-keys.html)
* @param {string} className - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - custom className applied on main container
* @param {boolean} dark - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable dark mode
* @param {boolean} hide - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Hide/show component
* @param {string} id - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - [id parameter](https://www.w3schools.com/html/html_id.asp) (for styling/testing purpose, to easily find the component into the DOM)
* @param {boolean} shadow - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable shadow behind component
* @param {CSSProperties} style - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Css inline properties applied on main container
* @param {boolean} unstyled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `true`, no standard MoBrix-ui styles will be applied on the components (useful for example, with image buttons)
* @param {boolean} animated - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component animations
* @param {'fade-in' | 'slide-in-left' | 'slide-in-right' | 'slide-in-top' | 'shake'} animation - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `animated`=`true`, this parameter specifies which animation is used when component is rendered
* @param {boolean} background - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component background
* @param {boolean} hover - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component hover standard styles
* @param {boolean} disabled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If true, disable the component. The effect may vary depending on the component type
* @param {(keyEvent : any) => void} onKeyDown - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom callback triggered when a key is pressed while using the component (for example, when writing text inside an `Input` component).
* @param {() => void} onFocus - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom callback triggered when the component get the focus (for example, through tab key)
* @param {() => void} onFocusLost - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom callback triggered when the component lose the focus (for example, when user clicks outside it)
* @param {Record<string, any>} additionalProps - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom additional properties, applied to the component
* @param {boolean} a11y - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable accessibility features
* @param {string} a11yLabel - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `a11y` = `true`, is used as [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) accessibility parameter
* @param {number | string} tabIndex - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Regular [tabIndex a11y parameter](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex). If `a11y` = `true`, this parameter is passed as `tabIndex` prop to the component (if not set, its value will be `0`). If `a11y` = `false`, it is set to `-1` (so the component is not focusable through `tab` key`)
* 
*
* @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/FormField
* @see https://cianciarusocataldo.github.io/mobrix-ui/docs
*
* @since 3.0.0
*
* @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
*
* @copyright 2024 Cataldo Cianciaruso
*/
const FormField: FormFieldComponent = ({
  value: inputValue,
  type = "text",
  ...props
}) => {
  return buildMbxReactiveComponent(props, (sharedProps) => ({
    name: "field",
    commonProps: {
      ...sharedProps,
      shadow: false,
      tabIndex: -1,
      additionalProps: {
        ...sharedProps.additionalProps,
        "data-mbx-ftype": type,
      },
    },
    Component: ({ value, setValue }) =>
      component({
        value,
        setValue,
        type,
        ...props,
        ...sharedProps,
      }),
    inputValue,
    defaultValue: null,
    scl: `wfit;flxc;${fieldFormatters[type].scl.fld}`,
    fts: "noShFc",
    group: "molecule",
  }));
};

export default FormField;
