import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from "./contexts/Mycontext";


function Currency() {
 const {dispatch} = useContext(AppContext)
    return (
        <div >
            <div className="row alert alert-success">
                Currency:
                <select className="col-sm" id="curr" onChange={() => {
                    let load;
                    if (curr.value == "Rupee") {
                        load = "₹"
                    }
                    else if (curr.value == "Pound") {
                        load = "£"
                    }
                    else if(curr.value == "Euro")
                    {
                        load = "€"
                    }
                    else{
                        load = "$"
                    }
                    dispatch(
                        {
                            type:"CHG_CURR",
                            payload:load
                        }
                    )

                }}>
                    <option  value="Dolllar"> $ Dollar</option>
                    <option  value="Pound"> £ Pound</option>
                    <option  value="Euro"> € Euro</option>
                    <option  value="Rupee"> ₹ Rupee</option>
                </select>
            </div>
        </div>
    );
}

export default Currency;