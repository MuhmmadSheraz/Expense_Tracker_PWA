import React from "react";
import Header from "../Components/Header";
import CurrentBalance from "../Components/CurrentBalance";
import Transaction from "../Components/Transaction";
import TrasactionHistory from "../Components/TransationHistory";
import TransactionInput from "../Components/TransactionInput";

let TrackerView = () => {
    return (
        <div className="abc">
            <CurrentBalance />
            <Transaction />
            <p className="secName_History">History</p>
            <hr className="hr" />
            <TrasactionHistory />
            <p className="secName_History">Add New Transaction</p>
            <hr className="hr" />
            <div className="ContentBody">
                <TransactionInput />
            </div>
        </div>
    );
};

export default TrackerView;