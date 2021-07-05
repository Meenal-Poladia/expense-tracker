import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import {useState} from "react";

function Expenses(props) {
   const [selectedYear, setSelectedYear] = useState("2020");

   const selectChangeHandler = (selectedYear) => {
      setSelectedYear(selectedYear);
       console.log(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={selectedYear} onSelectedChange = {selectChangeHandler}/>
                {props.items.map(expense => (
                    <ExpenseItem key = {expense.id}
                                 title = {expense.title}
                                 amount = {expense.amount}
                                 date = {expense.date}
                    />
                ))}
            </Card>
        </div>
    )
}

export default Expenses