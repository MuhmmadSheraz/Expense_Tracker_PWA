import React, { useEffect, useState } from "react";
import "./App.css";
import TrackerView from "./View";
import { GlobalProvider } from "./context/GlobalState";
import firebase from "./Config/firebase";
import axios from "axios";

function App() {
  const [tokens, setTokens] = useState<string>();

  const callToken = async () => {
    const messaging = firebase.messaging();
    const token = await messaging.getToken();
    setTokens(token);
  };
  useEffect(() => {
    callToken();
    {
      tokens && checkNoti(tokens || "");
    }

    console.log("permision asked");
    askForPermissioToReceiveNotifications();
    return () => {
      checkNoti(tokens || "");
      // checkNoti(token);
    };
  }, [tokens]);
  const askForPermissioToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      // getToken(token);
      return token;
    } catch (error) {
      console.error(error);
    }
  };
  const checkNoti = (token: string) => {
    let body = {
      notification: {
        title: "Expense Tracker  App ",
        body: "Having trouble expense Check Here...",
        icon: "http://url-to-an-icon/icon.png",
      },
      to: token,
    };
    axios({
      method: "post",
      url: "https://fcm.googleapis.com/fcm/send",
      data: body,
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "key=AAAAjRpuUaM:APA91bHqdK-fW3o4xZdd1qRSy9AMXdyn_nTVl53HOWp2BkcKuvvx9Aqsfv8n-AxFJ7vWxZBdAJiCBI0Brk9vvmfHDQrmacV6_QZl8KQ9DECYe06_FWGl3BqQsVojJAPDS5PE-di_QVKD",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <GlobalProvider>
      <div className="App-header">
        <div className="wrapper">
          <TrackerView />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
