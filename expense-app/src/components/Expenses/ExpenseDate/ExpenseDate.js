import React from "react"
import AuthContext from "../../../context/auth-context"

const ExpenseDate = props => {

    const month = props.createdAt.toLocaleString("en-US", { month: "long" })
    const day = props.createdAt.toLocaleString("en-US", { day: "numeric" })
    const year = props.createdAt.getFullYear()

    return (
        <AuthContext.Consumer>
            {(ctx) => {
                console.log("CONTEXT : ", ctx)
                return (
                    <React.Fragment>
                        {ctx.isLoggedIn && <span>{month} {day}, {year}</span>}
                    </React.Fragment>
                )
            }}
        </AuthContext.Consumer>
    )



}

export default ExpenseDate;