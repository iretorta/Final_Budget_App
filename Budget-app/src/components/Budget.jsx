import React, { useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from "./contexts/Mycontext";
function Budget() {
  const [show, setshow] = useState(false)
  const { budget,dispatch,currency} = useContext(AppContext)
  const [value,setvalue] = useState(budget)
  return (
    <div className=" row alert alert-secondary">
      {!show &&
        <span className="col-sm">Budget:{currency}{budget}</span>
      }
      {show &&
      <>
        <input className="col-sm form-control" required= "required" type="number" onChange={(e)=>{
          e.preventDefault();
          setvalue(e.target.value)
        }}></input> 
          <button className="btn btn-primary col-sm" onClick={()=>
          {
            setshow(false)
            dispatch
            (
              {
                type:"ADD_BUDGET",
                payload:value
              }
            )
          }} >save</button>
        </>
      }
      
      {!show &&
        <button className="btn btn-primary col-sm" onClick={()=>setshow(true)}>Edit</button>
      }

    </div>
  );
}

export default Budget