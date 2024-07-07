import React from "react";

import { MbxUiReactiveComponent, SelectorProps } from "../../../types";

const selectorComponent: MbxUiReactiveComponent<
  number | undefined,
  SelectorProps
> = ({ elements = [], optionClassName }) =>
  elements.map((el, index) => (
    <option key={"sel_opt_" + index} value={index} className={optionClassName}>
      {el}
    </option>
  ));

export default selectorComponent;
