import React, { useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from "./contexts/Mycontext";

function ChangeAllocation() {
    const {initialstate,dispatch,currency} = useContext(AppContext)
    const [cost,addcost] = useState(0);
    return (
        <div className="row">
            <div className="col-sm  row alert alert-secondary">Department :
                <select className="col-sm" placeholder="Choose" id="select1">
                    {
                        initialstate.expenses.map(e => (
                            <option key={e.id} value={e.name}>{e.name}</option>
                        ))
                        
                    }
                </select>
            </div>

            <div className="col-sm ms-3 alert alert-secondary" >Allocation :
                <select id="select2">
                    <option value="Add">Add</option>
                    <option value="Remove">Remove</option>
                </select>
            </div>
            <div className="col-sm row alert">{currency}
                <input type="number" className="col-sm" size="sm" id="input"  onChange={(e)=>{
                    e.preventDefault()
                    addcost(e.target.value)}} />
                <button type="submit" className="col-sm btn btn-primary" onClick={()=>{
                    let ex1 = select1.value
                    let ex2 = select2.value
                    input.value = ''
                    
                    if(ex2 == "Add")
                    {
                        dispatch(
                            {
                                type:"ADD_EX",
                                payload:{name:ex1,Cost:Number(cost)}
                            }
                        )
                    }
                    else
                    {
                        dispatch(
                            {
                                type:"REM_EX",
                                payload:{name:ex1,Cost:Number(cost)}
                            }
                        )
                    }
                    
       
                }}>save</button>
            </div>

        </div>
    );
}
export default ChangeAllocation;
