import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import {useState} from "react";

function Expenses(props) {
   const [selectedYear, setSelectedYear] = useState("2022");

   const filteredList = props.items.filter(item => item.date.getFullYear() == selectedYear);
// Watch the video no.66 again and write the new code
   const selectChangeHandler = (selectedYear) => {
      setSelectedYear(selectedYear);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={selectedYear}
                            onSelectedChange = {selectChangeHandler}/>
            <ExpenseList items={filteredList} />
        </Card>
    )
}

export default Expenses