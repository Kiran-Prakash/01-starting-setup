import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
import {useState} from "react";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(true);
    }
    const [isEditing,setIsEditing]=useState(false);
    const setEditing = (event) => {
        setIsEditing(true);
    }
    const stopEditing = (event) => {
        setIsEditing(false);
    }
    return <div className="new-expense">
        {!isEditing && <button onClick={setEditing}>Add Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel = {stopEditing}/>}
    </div>
}
export default NewExpense;