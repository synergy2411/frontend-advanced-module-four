const ExpenseDate = props => {

    const month = props.createdAt.toLocaleString("en-US", { month: "long" })
    const day = props.createdAt.toLocaleString("en-US", { day: "numeric" })
    const year = props.createdAt.getFullYear()

    return <span>{month} {day}, {year}</span>
}

export default ExpenseDate;