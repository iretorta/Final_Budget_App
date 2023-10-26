import React, { useContext } from "react";
import { AppContext } from "./contexts/Mycontext";
function ExpenseTotal() {
  const { budget, expenses, currency } = useContext(AppContext)
  let spent =0;
  expenses.map(e => { spent = spent + e.amount })
  if (spent > budget)
    alert("Budget exceded")

  return (
    <div className="alert alert-primary">
      <span>
        Spent so far:{currency}{spent}
      </span>
    </div>
  );
}

export default ExpenseTotal;