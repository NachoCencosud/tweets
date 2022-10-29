import React from "react";
import { Modal } from "@mui/material";

const ModalContainer = (props) => {
  const { isOpenModal, closeModal, children } = props;

  return (
    <Modal open={isOpenModal} onClose={closeModal} closeAfterTransition>
      <div>{children}</div>
    </Modal>
  );
};

export default ModalContainer;
