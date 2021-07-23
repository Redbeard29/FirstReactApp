import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

let x = 5;

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: 'e' + (x.toString())
        };
        x++;
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    if(isEditing){
        return <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>    
        </div>
    }

    return <div className="new-expense">
        <button onClick={startEditingHandler}>Add New Expense</button>
    </div>
};

export default NewExpense;