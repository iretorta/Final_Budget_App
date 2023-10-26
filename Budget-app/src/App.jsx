import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./components/Budget"
import Remaining from "./components/Reamining"
import ExpenseTotal from "./components/ExpenseTotal"
import Currency from "./components/Currency"
import ExpenseList from "./components/ExpenseList"
import ChangeAllocation from "./components/ChangeAllocation"
import { AppProvider } from "./components/contexts/Mycontext";

function App() {

  return (
    <>
     <AppProvider>

      <div className="container">
        <h1 className="mt-3">Company's Budget Allocation</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
          <div className="col-sm">
            <Currency />
          </div>
        </div>
        <h3>Allocation</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3>Change Alllocation</h3>
        <div>
          <ChangeAllocation />
        </div>

      </div>
     </AppProvider>
</>

  )
}

export default App
