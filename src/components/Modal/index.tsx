// Core
import React, { FC, ReactNode } from "react";
import { useStore } from "effector-react";
import { Modal as Popup } from "antd";

// Store
import { $modal, toggleModal } from "../../models/modal";

// Styles
import "./index.css";

// Types
type ModalPropsTypes = {
  children: ReactNode;
};

const Modal: FC<ModalPropsTypes> = (props: ModalPropsTypes) => {
  const { children } = props;

  const visible = useStore($modal);

  return (
    <Popup
      centered
      className="modal"
      closable={true}
      visible={visible}
      onCancel={() => toggleModal(false)}
      width={"35vw"}
      footer={null}
    >
      {children}
    </Popup>
  );
};

export { Modal };
