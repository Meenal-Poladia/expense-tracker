import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import {useState} from "react";

function Expenses(props) {
   const items = props.items;
   const [selectedYear, setSelectedYear] = useState("2020");

   const selectChangeHandler = (selectedYear) => {
      setSelectedYear(selectedYear);
       console.log(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={selectedYear} onSelectedChange ={selectChangeHandler}/>
                <ExpenseItem title={items[0].title}
                             amount={items[0].amount}
                             date={items[0].date}>
                </ExpenseItem>
                <ExpenseItem title={items[1].title}
                             amount={items[1].amount}
                             date={items[1].date}>
                </ExpenseItem>
                <ExpenseItem title={items[2].title}
                             amount={items[2].amount}
                             date={items[2].date}>
                </ExpenseItem>
                <ExpenseItem title={items[3].title}
                             amount={items[3].amount}
                             date={items[3].date}>
                </ExpenseItem>
            </Card>
        </div>
    )
}

export default Expenses