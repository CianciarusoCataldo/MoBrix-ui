import React from "react";

import { BuilderComponent, MoBrixUiComponent } from "../../../utils/global";
import { ModalProps } from "./types";

import Card from "../Card";

const modalComponent: MoBrixUiComponent<ModalProps, BuilderComponent> = ({
  children,
  unstyled,
  className,
  dark,
  title,
  hide,
  onClose,
  closeOutside,
  onFocusLost = () => {},
}) => {
  return (
    <div className="modal-window">
      {unstyled ? (
        children
      ) : (
        <Card
          className={"content " + className}
          dark={dark}
          unstyled={unstyled}
          onClick={onClose}
          body={children}
          dismissable
          header={title}
          hide={hide}
          onFocusLost={() => {
            onFocusLost();
            closeOutside && onClose && onClose();
          }}
        />
      )}
    </div>
  );
};

export default modalComponent;