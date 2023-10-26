import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from "./contexts/Mycontext";


function Remaining() {
    const { budget, expenses,currency } = useContext(AppContext)
    let Remaining = 0;
    expenses.map(e => { Remaining = Remaining + e.amount })
    Remaining = budget - Remaining
    return (
        <div>
            {(Remaining >0) ? (

                <div className="alert alert-success">
                    <span>Remaining:{currency}{Remaining}</span>
                </div>
            ) : (
                <div className="alert alert-danger">
                    <span>Remaining:{currency}{Remaining}</span>
                </div>
            )
            }

        </div>
    );

}
export default Remaining;