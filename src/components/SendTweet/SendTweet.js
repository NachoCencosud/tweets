import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import moment from "moment";
import "./SendTweet.scss";
import ModalContainer from "../Modal/ModalContainer";


const SendTweet = () => {

    const [isOpenModal, SetIsOpenModal] = useState(false);

    const openModal = () => {
      SetIsOpenModal(true);
    };
    
    const closeModal = () => {
        SetIsOpenModal(false);
      };
    

  return (
    <div className="send-tweet">
      <Fab
        className="send-tweet__open-modal"
        color="primary"
        aria-label="add"
        onClick={openModal}
      >
        <AddIcon />
      </Fab>
      <ModalContainer isOpenModal={isOpenModal} closeModal ={closeModal} />
    </div>
  );
};

export default SendTweet;
