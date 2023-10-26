import { createContext, useReducer } from "react";

const initialstate = {
    budget: 700,
    expenses: [
        { id: 1, name: "marketing", amount: 90 },
        { id: 2, name: "finance", amount: 67 },
        { id: 3, name: "sales", amount: 99 },
        { id: 4, name: "Human Resource", amount: 88 },
        { id: 5, name: "IT", amount: 90 }
    ],
    currency: "$",
}

export const AppReducer = (state, action) => {
    switch (action.type) {
        case "ADD_BUDGET":
            return {
                ...state, budget: action.payload
            };
        case "DEL_EX":
            return {
                ...state, expenses: state.expenses.filter((e) => e.id != action.payload),
            };
        case "INC_EX":
            return {
                ...state, expenses: state.expenses.map((e) => e.id == action.payload ? { ...e, amount: e.amount + 10 } : e)
            };

        case "DEC_EX":
            return {
                ...state,
                expenses: state.expenses.map((e) =>
                    e.id === action.payload
                        ? { ...e, amount: e.amount - 10 }
                        : e
                ),
            };
        case "ADD_EX":
            let f = state.expenses.find(e => e.name == action.payload.name)
            if (f) {
                return {
                    ...state,
                    expenses: state.expenses.map((e) =>
                        (e.name == action.payload.name)
                            ? { ...e, amount: e.amount + action.payload.Cost }
                            : e),
                };
            }
            else {
                return {
                    ...state,
                    expenses: state.expenses.push({ id: crypto.randomUUID(), name: action.payload.name, amount: action.payload.Cost }),
                }
            }
        case "REM_EX":
            let r = state.expenses.find(e => e.name == action.payload.name)
            if (r) {
                return {
                    ...state, expenses: state.expenses.map((e) =>
                        (e.name == action.payload.name)
                            ? { ...e, amount: e.amount - action.payload.Cost }
                            : e),
                };
            }
            else {
                alert("The section is not present in the given list add the section to add/remove budget")
                return {
                    ...state
                }
            }
        case "CHG_CURR":
            return {
                ...state,
                currency: action.payload
            }

        default:
            return state;
    }

};
export const AppContext = createContext()
// export const UseApp=()=>
// {
//     return useContext(AppContext)
// }

export const AppProvider = (props) => {

    const [state, dispatch] = useReducer(AppReducer, initialstate)
    return (
        <AppContext.Provider value={{
            budget: state.budget,
            initialstate,
            expenses: state.expenses, dispatch,
            currency: state.currency

        }}>
            {props.children}
        </AppContext.Provider>
    )
}
