import Hoc from "./Hoc";

const CompB = (props) => {
    return (
        <div>
            Counter (B) : {props.counter}
            <button onClick={() => props.increase()}>Increase</button>
        </div>
    )
}

export default Hoc(CompB)
