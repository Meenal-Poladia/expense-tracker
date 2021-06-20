import "./ExpenseDate.css"

function ExpenseDate(props) {
    const month = props.calendar.toLocaleString("en-Us", {month: "long"});
    const day = props.calendar.toLocaleString("en-Us", {day: "2-digit"});
    const year = props.calendar.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )
}

export default ExpenseDate;