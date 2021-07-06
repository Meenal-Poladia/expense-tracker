import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import {useState} from "react";

function Expenses(props) {
   const [selectedYear, setSelectedYear] = useState("2020");

   const filteredList = props.items.filter(item => item.date.getFullYear() == selectedYear);
// Watch the video no.66 again and write the new code
   const selectChangeHandler = (selectedYear) => {
      setSelectedYear(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={selectedYear}
                                onSelectedChange = {selectChangeHandler}/>
                {filteredList.length === 0 && <p> No Expense found </p>}
                {filteredList.length > 0 &&
                filteredList.map(expense => (
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