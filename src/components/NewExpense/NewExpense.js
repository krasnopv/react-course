import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
  const [toShowForm, setShowForms] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForms(false);
  };

  const showFormHandle = (event) => {
    setShowForms(true);
  };

  const hideFormHandle = (event) => {
    setShowForms(false);
  };

  return (
    <div className="new-expense">
      {!toShowForm && <button onClick={showFormHandle}>Add new Expense</button>}
      {toShowForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideFormHandle}
        />
      )}
    </div>
  );
};

export default NewExpense;
