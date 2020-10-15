export type transactionArray = {
    id: number,
    description: string,
    amount: number
}
export type StateArray = {
    transactions: transactionArray[],
    currentBalance: number

}
export type StateArray2 = {
    transaction: transactionArray,
    currentBalance: number

}
export type deleteTrans1 = {
    amount: number,
    id: number
}
export type deleteTrans2 = {
    params: deleteTrans1,
    currentBalance: number
}

export type actionType =
    | { type: 'ADD_TRANSACTION', payload: StateArray2 }
    | { type: 'DELETE_TRANSACTION', payload: any }


// export type propsType = {
//     callBack: (param: transactionArray)
// }
// export type contextProps = {
//     c: number,
//     addTransaction: (transaction: transactionArray) => void,
// }
export type actionBtn = {
    addTransaction: (transactionArray: transactionArray) => void,
}