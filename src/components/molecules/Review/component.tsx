import React from "react";

import {
  BuilderComponent,
  MoBrixUiComponent,
  ReviewProps,
} from "../../../types";

import { icons } from "./icons";
import Link from "../../atoms/Link";
import Rater from "../../atoms/Rater";

const allowedLogoTypes = Object.keys(icons);

const reviewComponent: MoBrixUiComponent<ReviewProps, BuilderComponent[]> = ({
  user,
  description,
  rate,
  max,
  icon,
  url,
  logo,
  rateType,
  disabled,
}) => {
  const selectedLogo =
    logo && allowedLogoTypes.includes(logo) ? logo : "default";

  return [
    <div key="url" data-mbx-class="review-url-container">
      {url ? (
        <Link newTab to={url} disabled={disabled}>
          {icons[selectedLogo]}
        </Link>
      ) : (
        logo && icons[selectedLogo]
      )}
    </div>,
    <div data-mbx-class="review-info-box" key="info">
      <div data-mbx-class="review-user-info">
        <div data-mbx-class="review-photo">{icon}</div>
        {user && <span data-mbx-class="review-username">{user}</span>}
      </div>
      {description && (
        <span data-mbx-class="review-description">{description}</span>
      )}
    </div>,
    <Rater
      disabled={disabled}
      key="rate"
      hide={!rate}
      type={rateType}
      noBackground
      readonly
      value={rate}
      max={max}
    />,
  ];
};

export default reviewComponent;
