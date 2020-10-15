import React, { useContext } from "react";
import "./currentBalance.css";
import { GlobalContext } from "../../context/GlobalState";
let CurrentBalance = () => {
  const { currentBalance } = useContext(GlobalContext);
  return (
    <div className="currrntBalance">
      <span className=" Cbalance"> Current Balance :</span>
      <p className="balance green">$ {currentBalance}</p>
    </div>
  );
};
export default CurrentBalance;