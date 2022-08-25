import React from 'react';

const Hoc = (WrappedComp) => {
    class NewComp extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                counter: 0
            }
        }
        increase = () => { this.setState({ counter: this.state.counter + 1 }) }

        render() {
            return (
                <WrappedComp name="Coming From Higher Order Comp"
                    increase={this.increase}
                    counter={this.state.counter}> </WrappedComp>
            )
        }
    }
    return NewComp;
}

export default Hoc;





// HOF : Higher Order Function -> Functions they accept function as a parameter
// - arr.filter(() => {})
// HOC : Higher Order Component -> Components they accept Component as a parameter ; Reusablity; Component Composition