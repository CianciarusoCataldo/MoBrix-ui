import "./styles.css";

import React from "react";
import classNames from "classnames";

import { RaterComponent } from "./types";

import { buildBoxComponent } from "../../../utils";
import { ICONS } from "./icons";

import Button from "../../atoms/Button";

/**
 * A vote manager component, really useful to let the user leave a review
 *
 * @since 1.0.0
 *
 * @param {number} value actual vote
 * @param {number} max max vote (max number of icons showed)
 * @param {boolean} readonly if true, the rate can't be changed by clicking on the icons
 * @param {"star"|"circle"} type vote icons type
 * @param {(newVote:number)=>void} onChange callback triggered when user select a vote
 * @param {JSX.Element | string} label `common MoBrix-ui prop` - Component top label
 * @param {string} className `common MoBrix-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common MoBrix-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common MoBrix-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common MoBrix-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common MoBrix-ui prop` - Hide/show component
 * @param {boolean} shadow `common MoBrix-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 * @example <caption>Example Rater usage</caption>
 * import { render } from "react-dom";
 * import { Rater } from 'mobrix-ui';
 *
 * render(<Rater type="circle" value={3} />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Rater
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Rater: RaterComponent = ({
  value,
  max,
  type,
  onChange,
  className,
  vertical,
  label,
  readonly,
  ...commonProps
}) => {
  const voteType = type || "star";
  let startMax = max || 5;

  return buildBoxComponent<number>({
    callBack: (actualValue, setValue) => {
      const [hoveredElement, setHover] = React.useState<number | null>(null);
      const [maxValue, setMax] = React.useState<number>(startMax);

      React.useEffect(() => {
        if (max) {
          setMax(Number.parseInt(String(max)));
        }
      }, [max]);

      let iconArray: JSX.Element[] = [];

      for (let i: number = 0; i < maxValue; ++i) {
        let iconToShow: "FULL" | "EMPTY" = "EMPTY";

        if (hoveredElement || hoveredElement === 0) {
          iconToShow = hoveredElement >= i ? "FULL" : "EMPTY";
        } else {
          iconToShow = i + 1 <= actualValue ? "FULL" : "EMPTY";
        }

        iconArray.push(
          <div key={`vote_${i}`}>
            {readonly ? (
              <div
                style={{
                  paddingBottom: "0.37rem",
                }}
              >
                {ICONS[voteType][iconToShow]}
              </div>
            ) : (
              <Button
                unstyled
                onClick={() => {
                  let newVote: number = i + 1;
                  setValue(newVote);
                  onChange && onChange(i + 1);
                }}
                onMouseEnter={() => {
                  setHover(i);
                }}
                onMouseLeave={() => {
                  setHover(null);
                }}
                id={`vote_${i}`}
              >
                {ICONS[voteType][iconToShow]}
              </Button>
            )}
          </div>
        );
      }

      return {
        name: "mobrix-ui-ratebox",
        Component: iconArray.map((element) => element),
        commonProps: {
          ...commonProps,
          className: classNames({
            vertical: vertical,
            horizontal: !vertical,
          }),
        },
      };
    },
    value,
    defaultValue: 0,
    label,
  });
};

export default Rater;
