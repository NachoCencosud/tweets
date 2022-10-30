import "./App.scss";
import Header from "./components/Header/Header";
import MainContentCards from "./components/Main/MainContentCards";
import Cards from "./components/Cards/Cards";
import SendTweet from "./components/SendTweet/SendTweet";
import { Snackbar, Alert } from "@mui/material";
import { useState, useEffect } from "react";
import { TWEETS_STORAGE } from "../src/utils/constant";
import ListTweets from "./components/ListTweets/ListTweets";
import Swal from "sweetalert2";

function App() {
  const [toastProps, SetToastProps] = useState({
    open: false,
    text: null,
    result: null,
  });
  const [allTweets, SetAllTweets] = useState([]);
  const [reloadTweets, setReloadTweets] = useState(false);

  useEffect(() => {
    const allTw = localStorage.getItem(TWEETS_STORAGE);
    const allTwArray = JSON.parse(allTw);
    SetAllTweets(allTwArray);
    setReloadTweets(false);
  }, [reloadTweets]);

  const deleteTweet = (index) => {
    allTweets.splice(index, 1);
    SetAllTweets(allTweets);
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
    setReloadTweets(true);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'El tweet se ha eliminado correctamente',
      showConfirmButton: false,
      timer: 1500
    })
  };

  const handleClose = () => {
    SetToastProps({
      ...toastProps,
      open: false,
    });
  };

  return (
    <div className="app-container">
      <Header />
      <MainContentCards>
        <Cards />
        <SendTweet SetToastProps={SetToastProps} allTweets={allTweets} />
        <ListTweets allTweets={allTweets} deleteTweet={deleteTweet} />
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          autoHideDuration={1000}
          open={toastProps.open}
          onClose={handleClose}
        >
          {toastProps.result ? (
            <Alert severity="success">{toastProps.text}</Alert>
          ) : (
            <Alert severity="error">{toastProps.text}</Alert>
          )}
        </Snackbar>
      </MainContentCards>
    </div>
  );
}

export default App;
