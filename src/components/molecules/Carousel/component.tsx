import React from "react";
import { CarouselProps, MobrixUiReactiveComponent } from "../../../types";

import classNames from "classnames";

import { ICONS } from "../../atoms/Rater/icons";
import { arrowIcon } from "./icons";

import { Button } from "../../atoms";

const CarouselComponent: MobrixUiReactiveComponent<number, CarouselProps> = ({
  value: selectedItem,
  setValue: setItem,
  onChange = () => {},
  elements = [],
  dark,
}) => {
  const [activeClassName, setActiveClassname] = React.useState("");
  const [hoveredDot, setHoveredDot] = React.useState<number | null>(null);

  let dots: JSX.Element[] = [];
  let elementsArray: JSX.Element[] = [];
  const item =
    Number(selectedItem) < elements.length ? Number(selectedItem) : 0;
  const updateItem = (newItem: number) => {
    onChange(newItem);
    setItem(newItem);
  };

  if (elements.length > 0) {
    elements.forEach((element, index) => {
      elementsArray.push(
        <div
          key={`carousel_element_${index}`}
          className={classNames("element", {
            "component-hidden": index !== item,
            [activeClassName]: index === item,
          })}
        >
          {element}
        </div>
      );

      dots.push(
        <Button
          className="dot"
          unstyled
          testId={`dot_${index}`}
          key={`dot_${index}`}
          onMouseEnter={() => setHoveredDot(index)}
          onMouseLeave={() => setHoveredDot(null)}
          onClick={() => {
            setActiveClassname(index > item ? "from-right" : "from-left");
            updateItem(index);
          }}
        >
          {index === item || (hoveredDot != null && index === hoveredDot)
            ? ICONS.circle.FULL
            : ICONS.circle.EMPTY}
        </Button>
      );
    });
  }

  return [
    <div className="elements" key="mobrix_ui_carousel_elements">
      <Button
        dark={dark}
        testId="left_arrow"
        className={classNames("arrow prev", {
          disabled: item === 0,
        })}
        unstyled
        disabled={item === 0}
        onClick={() => {
          setActiveClassname("from-left");
          updateItem(item - 1);
        }}
      >
        {arrowIcon}
      </Button>
      {elementsArray}
      <Button
        dark={dark}
        unstyled
        className={classNames("arrow next", {
          disabled: item === elements.length - 1,
        })}
        testId="right_arrow"
        disabled={item === elements.length - 1}
        onClick={() => {
          setActiveClassname("from-right");
          updateItem(item + 1);
        }}
      >
        {arrowIcon}
      </Button>
    </div>,
    <div key="mobrix_ui_carousel_dots">
      <div className="dots">{dots}</div>
    </div>,
  ];
};

export default CarouselComponent;
