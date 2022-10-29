import React, { useState } from "react";
import { FormControl, FormGroup, TextField, Button } from "@mui/material";
import "./FormSendTweet.scss";

const FormSendTweet = (props) => {
  const { sendTweet } = props;
  const [formValue, SetFormValue] = useState({
    name: "",
    tweet: "",
  });

  const onFormChange = (event) => {
    SetFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="form-send-tweet">
      <h2 className="form-send-tweet_title">Enviar Tweet</h2>
      <form
        className="form-send-tweet_form"
        onSubmit={(event) => sendTweet(event, formValue)}
        onChange={onFormChange}
      >
        <FormControl>
          <FormGroup>
            <TextField
              className="form-send-tweet_form-name"
              type="text"
              name="name"
              placeholder="Nombre de usuario"
              margin="normal"
            />
          </FormGroup>
          <FormGroup>
            <TextField
              className="form-send-tweet_form-textarea"
              name="tweet"
              placeholder="Escribe tu tweet..."
              margin="normal"
              rows="6"
              multiline
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit">Enviar Tweet</Button>
          </FormGroup>
        </FormControl>
      </form>
    </div>
  );
};

export default FormSendTweet;
