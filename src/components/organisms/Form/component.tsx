import React from "react";

import { BuilderComponent, FormProps, MbxUiComponent } from "../../../types";

import Button from "../../atoms/Button";
import FormField from "../../molecules/FormField";
import { Label } from "../../atoms";

const Component: MbxUiComponent<FormProps, BuilderComponent[]> = ({
  title,
  fields,
  onSubmit,
  submitLabel,
  children,
  fieldClassName = "",
  dark,
  disabled,
  hover,
  shadow,
}) => {
  const d_fields: Record<string, string | boolean | number> = fields
    ? Object.keys(fields).reduce(
        (o, key) => ({
          ...o,
          [key]: undefined,
        }),
        {},
      )
    : {};

  const [values, setValues] =
    React.useState<Record<string, string | boolean | number>>(d_fields);

  const cmps = [
    <Label disabled={disabled} key="frm_tl" dark={dark} data-mbx-cls="title">
      {title}
    </Label>,
    ...Object.keys(d_fields).map((field, index) => {
      const fSetts = fields![field];

      const type = fSetts.type || "text";

      const callBack = (vl: any) => {
        setValues({ ...values, [field]: vl });
      };

      return (
        <div className={fieldClassName} key={`f_fld_${index}`}>
          <FormField
            shadow={shadow}
            disabled={disabled}
            value={values[field]}
            header={fSetts.header}
            type={type}
            onChange={callBack}
            hover={hover}
            headerProps={{ dark }}
          />
        </div>
      );
    }),
  ];

  children && cmps.push(children);

  cmps.push(
    <Button
      disabled={disabled}
      animated={false}
      hover={hover}
      shadow={shadow}
      key="form_s_bt"
      dark={!dark}
      onClick={() => {
        onSubmit && onSubmit(values);
      }}
      data-mbx-cls="s-bt"
    >
      {submitLabel}
    </Button>,
  );

  return cmps;
};

export default Component;
