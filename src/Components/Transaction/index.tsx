import React, { useContext } from "react";
import "./transaction.css";
import { GlobalContext } from "../../context/GlobalState";
let Transaction = () => {
    const { transaction } = useContext(GlobalContext);

    let income: number = parseInt("0");
    let expense: number = 0;
    {
        transaction && transaction.map((x) => {
            if (x.amount > 0) {
                let a = x.amount
                let num = a.toString()
                income = income + parseFloat(num)
            }
            else if (x.amount < 0) {
                let a = x.amount
                let num = a.toString()
                expense = expense - parseFloat(num)
            }
        });
    }
    return (
        <div className="transactionBox">
            <div className="content">
                Income <p className="green">$ {income} </p>
            </div>
            <div className="content">
                Expense <p className="red">$ {Math.abs(expense)} </p>
            </div>
        </div>
    );
};
export default Transaction;