import "./ExpenseForm.css";
import {useState} from "react";

const ExpenseForm = () => {
    //For method 1.
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    //For method 2 & 3
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    // });

    const titleClickHandler = (event) => {
        //1.
        setEnteredTitle(event.target.value);
        //2.
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        //3.
        // setUserInput((prevState) => {
        //     return({
        //         ...prevState, enteredTitle: event.target.value
        //     })
        // })
    }
    const amountClickHandler = (event) => {
        //1.
        setEnteredAmount(event.target.value);
        //2.
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
        //3.
        // setUserInput((prevState) => {
        //     return({
        //         ...prevState, enteredAmount: event.target.value
        //     })
        // })
    }
    const dateClickHandler = (event) => {
        //1.
        setEnteredDate(event.target.value);
        //2.
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
        //3.
        // setUserInput((prevState) => {
        //     return({
        //         ...prevState, enteredDate: event.target.value
        //     })
        // })
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseDate = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }
        console.log(expenseDate);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleClickHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountClickHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateClickHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button > Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;