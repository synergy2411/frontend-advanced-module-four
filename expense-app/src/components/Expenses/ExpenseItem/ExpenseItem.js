import ExpenseDate from "../ExpenseDate/ExpenseDate";

const ExpenseItem = (props) => {

    const onDelete = () => props.onDeleteExpense(props.expense.id)

    return (
        <div className="col-4">
            .<div className="card">
                <div className="card-body">
                    <h4 className="card-title text-center">
                        {props.expense.title.toUpperCase()}</h4>
                    <div className="card-text">
                        <p>Amount : ${props.expense.amount}</p>
                        <p>Created At : <ExpenseDate createdAt={props.expense.createdAt} /></p>
                        <div className="d-grid">
                            <button className="btn btn-danger btn-sm btn-block" onClick={onDelete}>DELETE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;

// December 21, 2021