import { useState } from "react";
import AddExpense from "./AddExpense/AddExpense";
import ExpenseItem from "./ExpenseItem/ExpenseItem";


let INTIAL_EXPENSES = [
    { id: "e001", title: "Shopping", amount: 12.9, createdAt: new Date("Dec 21, 2019") },
    { id: "e002", title: "insurance", amount: 29.9, createdAt: new Date("Aug 1, 2020") },
    { id: "e003", title: "planting", amount: 1.9, createdAt: new Date("Nov 18, 2021") },
    { id: "e004", title: "grocery", amount: 99.9, createdAt: new Date("Jul 02, 2022") },
]

function Expenses() {

    const [showForm, setShowForm] = useState(false);
    const [expenses, setExpenses] = useState(INTIAL_EXPENSES)


    const onToggle = () => setShowForm(!showForm);

    const onAddExpense = (newExpense) => {
        // setExpenses([newExpense, ...expenses]);
        setExpenses((prevExpenses) => {
            return [newExpense, ...prevExpenses]
        })
    }

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
            {showForm && <AddExpense onAddExpense={onAddExpense} />}
            <br />
            <div className="row">
                {expenses.map(exp => <ExpenseItem expense={exp} key={exp.id} />)}
            </div>
        </div>
    )
}

export default Expenses;