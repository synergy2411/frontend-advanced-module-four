function Expenses() {

    const expense = { id: "e001", title: "Shopping", amount: 12.9, createdAt: new Date("Dec 21, 2019") }

    return (
        <div className="row">
            <div className="col-4">
                .<div className="card">
                    <div className="card-body">
                        <h4 className="card-title text-center">{expense.title.toUpperCase()}</h4>
                        <div className="card-text">
                            <p>Amount : ${expense.amount}</p>
                            <p>Created At : {expense.createdAt.toString()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expenses;