import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import moment from "moment";
import "./SendTweet.scss";
import ModalContainer from "../Modal/ModalContainer";
import FormSendTweet from "../FormSendTweet/FormSendTweet";
import { TWEETS_STORAGE } from "../../utils/constant";
const SendTweet = (props) => {
  const [isOpenModal, SetIsOpenModal] = useState(false);
  const { SetToastProps, allTweets } = props;
  // const [tweet, SetTweet] = useState([]);

  const openModal = () => {
    SetIsOpenModal(true);
  };

  const closeModal = () => {
    SetIsOpenModal(false);
  };

  const sendTweet = (event, formValue) => {
    event.preventDefault();
    const { name, tweet } = formValue;
    let allTweetsArray = [];

    if(allTweets){
      allTweetsArray = allTweets;
    }

    if (!name || !tweet) {
      SetToastProps({ open: true, text: "Ambos campos son obligatorios", result: false });
    } else {
      formValue.time = moment();
      allTweetsArray.push(formValue);
      localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetsArray));
      SetToastProps({ open: true, text: "tweet enviado correctamente", result:true });
      closeModal();
    }
    setTimeout(() => {
      SetToastProps({ open: false });
    }, 2000);

    allTweetsArray = [];

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
      <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
        <FormSendTweet sendTweet={sendTweet} />
      </ModalContainer>
    </div>
  );
};

export default SendTweet;
