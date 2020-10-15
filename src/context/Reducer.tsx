import { StateArray, actionType } from "../Types/transactionTypes"
export default (state: StateArray, action: actionType) => {
    switch (action.type) {
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [...state.transactions, action.payload.transaction],
                currentBalance: action.payload.currentBalance
            }
        case "DELETE_TRANSACTION":
            // debugger
            let { amount, id } = action.payload.param
            return {
                ...state,
                transactions: state.transactions.filter((x) => x.id !== id),
                currentBalance:action.payload.currentBalance ,

            }
        default:
            return state;
    }
}