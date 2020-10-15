import React, { useState, useContext } from "react";
import "./transactionhistory.css";
import { GlobalContext } from "../../context/GlobalState";
let TrasactionHistory = () => {
  const { transaction, deleteTransaction } = useContext(GlobalContext);
  let deleteHistory = (id: number, amount: number) => {
    console.log("Deleted",id);
    let param = {
      amount, id
    }
    { deleteTransaction && deleteTransaction(param); }
  };
  return (
    <div className="historyWrapper">
      {transaction && transaction.length ?
        transaction.map((x, index) => {
          console.log(x.id);
          return x.amount < 0 ? (
            <div key={index} className="historyEx">
              <p>{x.description}</p>
              <p> $ {Math.abs(x.amount)} </p>
              <span
                className="deleteBtn"
                onClick={() => deleteHistory(x.id, x.amount)}
              >
                X
            </span>
            </div>
          ) : (
              <div key={index} className="historyIn">
                <p>{x.description}</p>
                <p>$ {x.amount} </p>
                <span
                  className="deleteBtn"
                  onClick={() => deleteHistory(x.id, x.amount)}
                >
                  X
            </span>
              </div>
            );
        })
        : <p className="noHistory">No History Found !</p>}
    </div>
  );
};

export default TrasactionHistory;