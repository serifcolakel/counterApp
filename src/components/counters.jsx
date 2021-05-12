import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    const { counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button
          onClick={this.props.onSet}
          className="btn btn-warning btn-sm m-2"
        >
          Set
        </button>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            //onDelete={this.props.onDelete} yazmak yerine render const ile kısaltılır
            onDelete={onDelete}
            onDecrement={this.props.onDecrement}
            onIncrement={onIncrement}
            onSet={this.props.onSet}
            // value={counter.value} yerine  counter={counter}
            counter={counter}
          >
            <h4>Counter :{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
