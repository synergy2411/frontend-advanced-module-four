import { useState } from "react";
import AddExpense from "./AddExpense/AddExpense";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

function Expenses() {

    const [showForm, setShowForm] = useState(false);

    const expenses = [
        { id: "e001", title: "Shopping", amount: 12.9, createdAt: new Date("Dec 21, 2019") },
        { id: "e002", title: "insurance", amount: 29.9, createdAt: new Date("Aug 1, 2020") },
        { id: "e003", title: "planting", amount: 1.9, createdAt: new Date("Nov 18, 2021") },
        { id: "e004", title: "grocery", amount: 99.9, createdAt: new Date("Jul 02, 2022") },
    ]

    const onToggle = () => setShowForm(!showForm);

    return (
        <div>
            <br />
            <div className="row">
                <div className="col-4 offset-4 text-center">
                    <div className="d-grid">
                        <button onClick={onToggle} className="btn btn-dark btn-block">
                            {showForm ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </div>
            </div>

            {/* {showForm ? <AddExpense /> : null} */}
            <br />
            {showForm && <AddExpense />}
            <br />
            <div className="row">
                <ExpenseItem expense={expenses[0]} />
                <ExpenseItem expense={expenses[1]} />
                <ExpenseItem expense={expenses[2]} />
                <ExpenseItem expense={expenses[3]} />
            </div>
        </div>
    )
}

export default Expenses;