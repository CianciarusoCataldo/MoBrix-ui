import { CommonProps } from "../../types";
import { Features } from "../../types/global/global";

export const SHARED_PROPS: CommonProps = {
  background: true,
  hover: true,
  disabled: false,
  dark: false,
  animated: true,
  shadow: true,
  props: {},
  a11y: true,
  unstyled: false,
  scl: "",
  features: {},
};
export const parseFts: (
  props: CommonProps
) => Record<
  keyof Features & CommonProps,
  { var?: string; val?: string; fkey: string } | undefined
> = (props) => ({
  opHov: !props.disabled &&
    props.hover && { var: "op-hov", val: 0.7, fkey: "_" },
  opAct: !props.disabled && { var: "op-act", val: 0.3, fkey: "_" },
  noShFc: { var: "sh-def", val: "none", fkey: "_" },
  opFc: !props.disabled && props.a11y && { fkey: "_", var: "op-f", val: 0.4 },
  fillFc: !props.disabled && props.a11y && { fkey: "fillFc" },
  colFc: !props.disabled && props.a11y && { fkey: "colFc" },
});

export const parseAtts: (
  props: CommonProps
) => Partial<Record<keyof CommonProps, string | undefined>> = (props) => ({
  dark: props.dark && "dk",
});
