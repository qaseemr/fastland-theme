import React from "react";
import Counter from "./style";

export default function CounterBlock({ ...rest }) {
  return (
    <Counter {...rest}>
      <Counter.Single>
        <Counter.Title as="h3">
          <span className="counter">8000</span>+
        </Counter.Title>
        <Counter.Text>Happy Clients</Counter.Text>
      </Counter.Single>
      <Counter.Single>
        <Counter.Title as="h3">
          <span className="counter">100K</span>+
        </Counter.Title>
        <Counter.Text>Yearly Calls</Counter.Text>
      </Counter.Single>
      <Counter.Single>
        <Counter.Title as="h3">
          <span className="counter">500+</span>
        </Counter.Title>
        <Counter.Text>Receptionists</Counter.Text>
      </Counter.Single>
    </Counter>
  );
}
