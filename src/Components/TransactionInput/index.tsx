import React, { useState, useContext } from "react";
import ActionButton from "../ActionButton";
import { transactionArray } from "../../Types/transactionTypes"

import "./tranasationInput.css";
import swal from "sweetalert";
import { GlobalContext } from "../../context/GlobalState";

let TransactionInput = () => {
    const { addTransaction, transaction } = useContext(GlobalContext);

    const [userInput, setUserInput] = useState<transactionArray>({
        description: "",
        amount: NaN,
        id: 0
    })

    const setTrans = (e: any) => {
        const { name, value } = e.target;
        setUserInput((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        });
    };

    let add = () => {
        let id = Math.floor(Math.random() * 1000);
        userInput.id = id
        if (userInput.amount == null || userInput.description == "") {
            return swal({
                text: "Please Fill All The Fields",
                icon: "warning",
                dangerMode: true,
            });
        }
        { addTransaction && addTransaction({ ...userInput, id }) };
        setUserInput({ description: "", amount:NaN , id: 0 });
    };

    return (
        <>
            <div>
                <p className="secName_HistoryI">Description</p>
                <input
                    value={userInput.description}
                    className="inputFields"
                    placeholder="Detail of Transaction"
                    name="description"
                    required
                    onChange={(e) => {
                        setTrans(e);
                    }}
                />
            </div>
            <div>
                <p className="secName_HistoryI">Transaction amount</p>
                <input
                    value={userInput.amount}
                    type="number"
                    className="inputFields"
                    placeholder="Dollar Value of Transaction"
                    name="amount"
                    required
                    onChange={(e) => {
                        setTrans(e);
                    }}
                />
            </div>
            <ActionButton click={add} />
        </>
    );
};
export default TransactionInput;