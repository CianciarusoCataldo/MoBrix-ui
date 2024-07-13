import React from "react";

import {
  CalendarDate,
  CalendarProps,
  DeepPartial,
  MbxUiReactiveComponent,
} from "../../../types";

import { defaultDays, defaultMonths } from "./constants";

import { getMonthsDuration, getDateMatrix } from "./utils";

import { IconButton, Label } from "../../atoms";
import { Table } from "../../molecules";
import { ArrowIcon } from "../../../icons";

const CalendarComponent: MbxUiReactiveComponent<
  DeepPartial<CalendarDate>,
  CalendarProps & { today: CalendarDate & { dayOfTheMonth: number } }
> = ({
  value,
  shadow,
  disabled,
  today: todayDate,
  hideArrows,
  days = defaultDays,
  months: customMonths = defaultMonths,
  onViewChange = () => {},
  onChange = () => {},
  startYear,
  startMonth,
  fromToday = true,
  dayLabel = true,
  setValue,
  labelClassName,
  labelProps = {},
  hover,
  arrowClassName,
  ...commonProps
}) => {
  const customProps = labelClassName
    ? { className: arrowClassName, ...labelProps }
    : labelProps;
  const year = startYear && startYear > 0 ? startYear : todayDate.year;
  const month =
    startMonth !== undefined && startMonth >= 0 && startMonth <= 11
      ? startMonth
      : todayDate.month;

  const [scrDate, show] = React.useState<{
    month: number;
    year: number;
  }>({
    year,
    month,
  });

  React.useEffect(() => {
    const actualYear = startYear && startYear > 0 ? startYear : todayDate.year;
    const actualMonth =
      startMonth !== undefined && startMonth >= 0 && startMonth <= 11
        ? startMonth
        : todayDate.month;

    show({ month: actualMonth, year: actualYear });
  }, [startMonth, startYear]);

  const months = getMonthsDuration(scrDate.year);

  const basicMatrix = getDateMatrix({ ...scrDate, day: 1 }, months);

  const arrowActions: Record<"left" | "right", () => void> = {
    left: () =>
      scrDate.month > 0
        ? show({
            ...scrDate,
            month: scrDate.month - 1,
          })
        : show({ year: scrDate.year - 1, month: 11 }),
    right: () =>
      scrDate.month < 11
        ? show({
            ...scrDate,
            month: scrDate.month + 1,
          })
        : show({ year: scrDate.year + 1, month: 0 }),
  };

  const getArrowButton = (direction: "left" | "right") => (
    <IconButton
      disabled={disabled}
      onClick={() => {
        arrowActions[direction]();
        onViewChange({ ...scrDate, day: 1 });
      }}
      hide={hideArrows}
      hover={hover}
      dark={commonProps.dark}
      key={"arrow_" + direction}
      additionalProps={{
        "data-mbx-carr": direction,
      }}
      scl="myauto"
      features={{ fillFc: true, noShFc: true }}
      {...customProps}
    >
      <ArrowIcon />
    </IconButton>
  );

  let components: JSX.Element[] = [];

  dayLabel &&
    components.push(
      <div key="cal_top_sel" data-mbx-scl="flxr:mauto;wfu" data-mbx-cls="t-sel">
        {getArrowButton("left")}
        <Label
          disabled={disabled}
          scl="mxauto"
          mbxClass="act-dt"
          dark={commonProps.dark}
          {...customProps}
        >{`${customMonths[scrDate.month]} ${scrDate.year}`}</Label>
        {getArrowButton("right")}
      </div>
    );

  components.push(
    <Table
      disabled={disabled}
      key="cal_tb"
      scl="mauto;wfu"
      propsCallback={(row, column) => {
        if (row > 0) {
          const isDisabled = fromToday
            ? scrDate.year < todayDate.year ||
              (scrDate.year === todayDate.year &&
                scrDate.month < todayDate.month) ||
              (scrDate.year === todayDate.year &&
                scrDate.month === todayDate.month &&
                basicMatrix[row - 1][column] < todayDate.dayOfTheMonth)
            : false;

          const isNotDay = basicMatrix[row - 1][column] <= 0;

          const onClick = () => {
            onChange({
              ...scrDate,
              dayOfTheMonth: basicMatrix[row - 1][column],
              day: basicMatrix[row - 1][column],
            });
            setValue({
              month: scrDate.month,
              year: scrDate.year,
              day: basicMatrix[row - 1][column],
            });
          };

          const extraProps =
            !disabled && !isDisabled && !isNotDay
              ? {
                  onClick,
                  onKeyDown: (e) => {
                    if (e.key === "Enter") {
                      onClick();
                    }
                  },
                }
              : {};

          return {
            "data-mbx-ctoday":
              fromToday &&
              basicMatrix[row - 1][column] === todayDate.dayOfTheMonth &&
              scrDate.month === todayDate.month &&
              scrDate.year === todayDate.year,
            "data-mbx-scal":
              value.year === scrDate.year &&
              value.month === scrDate.month &&
              value.day === basicMatrix[row - 1][column],
            ...((isDisabled || isNotDay) && { "data-mbx-cls": "dsb" }),
            ...extraProps,
          };
        } else return {};
      }}
      background={commonProps.background}
      shadow={shadow}
      dark={commonProps.dark}
      headers
      rows={[
        days.map((dayName) => dayName.slice(0, 3)),
        ...basicMatrix.map((row) =>
          row.map((element) => (element > 0 ? String(element) : ""))
        ),
      ]}
    />
  );

  return components;
};

export default CalendarComponent;
