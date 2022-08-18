import { useState } from "react";

const AddExpense = () => {

    const [enteredTitle, setEnteredTitle] = useState('anything');

    const titleChangeHandler = event => setEnteredTitle(event.target.value);

    const submitHandler = event => {
        event.preventDefault();
        console.log("Title : ", enteredTitle)
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
                            {/* created-at */}
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