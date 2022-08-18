import { useState } from "react";
import { v4 } from 'uuid';

const AddExpense = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredCreatedAt, setEnteredCreatedAt] = useState('');

    const titleChangeHandler = event => setEnteredTitle(event.target.value);
    const amountChangeHandler = event => setEnteredAmount(event.target.value);
    const createdAtChangeHandler = event => setEnteredCreatedAt(event.target.value);

    const submitHandler = event => {
        event.preventDefault();
        let newExpense = {
            title: enteredTitle,
            amount: Number(enteredAmount),
            createdAt: new Date(enteredCreatedAt),
            id: v4()
        }
        props.onAddExpense(newExpense);
    }
    return (
        <div className="row">
            <div className="col-6 offset-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="text-center">Add Expense Form</h5>
                        <form onSubmit={submitHandler}>
                            {/* title */}
                            <label htmlFor="title">Title : </label>
                            <input value={enteredTitle}
                                onChange={titleChangeHandler}
                                type="text"
                                className="form-control"
                                name="title"
                                id="title"
                            />
                            {/* amount */}
                            <label htmlFor="amount">Amount :</label>
                            <input type="number"
                                value={enteredAmount}
                                onChange={amountChangeHandler}
                                min="0.1" step="0.1"
                                className="form-control" />
                            {/* created-at */}
                            <label htmlFor="createdAt"> Created At :</label>
                            <input type="date"
                                value={enteredCreatedAt}
                                onChange={createdAtChangeHandler}
                                className="form-control" id="createdAt" />
                            <br />
                            {/* buttons */}
                            <div className="d-grid">
                                <button className="btn btn-dark" type="submit"> Add Expense </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddExpense;