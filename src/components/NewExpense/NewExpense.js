import "./NewExpense.css";
import "./ExpenseForm.css";
import ExpenseForm from "./ExpenseForm";
import AddExpense from "./AddExpense";
import {useState} from "react";

const NewExpense = function(props) {
    const [addExpenseBtn, setAddExpenseBtn] = useState(true);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    const addExpenseHandler = () => {
        setAddExpenseBtn(false)
    }
    const cancelHandler = () => {
        setAddExpenseBtn(true)
    }

    let content;
    if (addExpenseBtn) {
        content = <AddExpense onAddExpense={addExpenseHandler} />
    } else {
        content = <ExpenseForm onCancel={cancelHandler} onSaveExpenseData={saveExpenseDataHandler}/>

    }
    return(
        <div className="new-expense">
            {content}
        </div>
    );
}

export default NewExpense;