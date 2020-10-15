import React, { createContext, useReducer } from 'react'
import { transactionArray, StateArray, actionType, deleteTrans1 } from "../Types/transactionTypes"
import Reducer from "./Reducer";
const initialState: StateArray = {
    transactions: [],
    currentBalance: 0,
}
type contextProps = {
    currentBalance: number,
    transaction: transactionArray[]
    addTransaction: (transaction: transactionArray) => void
    deleteTransaction: (param: deleteTrans1) => void
}

export const GlobalContext = React.createContext<Partial<contextProps>>({})

export const GlobalProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(Reducer, initialState)

    const addTransaction = (transaction: transactionArray) => {
        let a = transaction.amount.toString()
        let currentBalance: number = parseFloat(state.currentBalance) + parseInt(a);

        return dispatch({
            type: "ADD_TRANSACTION",
            payload: { transaction, currentBalance }
        })
    }
    const deleteTransaction = (param: deleteTrans1) => {
        let a = param.amount.toString()
        let currentBalance: number = parseFloat(state.currentBalance) - parseInt(a);
        return dispatch({
            type: "DELETE_TRANSACTION",
            payload: { param, currentBalance }
        })

    }
    return (
        <GlobalContext.Provider value={{
            addTransaction,
            currentBalance: state.currentBalance,
            transaction: state.transactions,
            deleteTransaction
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}