import {
  CheckBox,
  Counter,
  Input,
  RadioButton,
  Rater,
  Slider,
  Toggle,
} from "../../atoms";

/* istanbul ignore next */
export const valueFormatters = {
  text: (value: any) => {
    const result = value ? String(value) : "";
    if (result.length < 1) {
      return "";
    } else {
      return result;
    }
  },
  number: (value: any) => value as number,

  boolean: (value: any) => value as boolean,
};

/* istanbul ignore next */
export const fieldFormatters = {
  text: {
    component: Input,
    format: valueFormatters.text,
    scl: { fld: "", frm: "" },
  },
  numeric: {
    component: Counter,
    format: valueFormatters.number,
    scl: { fld: "", frm: "" },
  },
  boolean: {
    component: CheckBox,
    format: valueFormatters.boolean,
    scl: { fld: "fbox", frm: "frbox" },
  },
  checkbox: {
    component: CheckBox,
    format: valueFormatters.boolean,
    scl: { fld: "fbox", frm: "frbox" },
  },
  radio: {
    component: RadioButton,
    format: valueFormatters.boolean,
    scl: { fld: "fbox", frm: "frbox" },
  },
  toggle: {
    component: Toggle,
    format: valueFormatters.boolean,
    scl: { fld: "fbox", frm: "" },
  },
  rater: {
    component: Rater,
    format: valueFormatters.number,
    scl: { fld: "", frm: "" },
  },
  slider: {
    component: Slider,
    format: valueFormatters.number,
    scl: { fld: "", frm: "" },
  },
  counter: {
    component: Counter,
    format: valueFormatters.number,
    scl: { fld: "", frm: "" },
  },
  input: {
    component: Input,
    format: valueFormatters.text,
    scl: { fld: "", frm: "" },
  },
} as const;
