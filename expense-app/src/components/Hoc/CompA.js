import Hoc from "./Hoc";

const CompA = (props) => {
    return (
        <div>
            Counter (A) : {props.counter}
            <button onClick={() => props.increase()}>Increase</button>
        </div>
    )
}

export default Hoc(CompA)