import ExpenseDate from "../ExpenseDate/ExpenseDate";
import PropTypes from 'prop-types';

const ExpenseItem = (props) => {

    const onDelete = () => props.onDeleteExpense(props.id)

    return (
        <div className="col-4">
            .<div className="card">
                <div className="card-body">
                    <h4 className="card-title text-center">
                        {props.title}</h4>
                    {/* {props.children} */}
                    <div className="card-text">
                        <p>Amount : ${props.amount}</p>
                        <p>Created At : <ExpenseDate createdAt={props.createdAt} /></p>
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

ExpenseItem.propTypes = {
    amount: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    createdAt: PropTypes.object.isRequired,
    onDeleteExpense: PropTypes.func.isRequired,
    // expense : PropTypes.shape({
    //     id : PropTypes.string.isRequired
    // })
}

// December 21, 2021