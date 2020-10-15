import React from "react";
import "./actionbutton.css";
import { actionBtn } from "../../Types/transactionTypes";
let ActionButton = (props: any) => {
  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <button className="addTransaction" onClick={props.click}>
        Add Transaction
      </button>
    </div>
  );
};
export default ActionButton;
