import React from "react";

const Step0 = ({ onNext }) => (
  <div>
    <h1>Step0 Page</h1>
    <button onClick={onNext}>Next Step</button>
  </div>
);
const Step1 = ({ onNext, onPrevious }) => (
  <div>
    <h1>Step1 Page</h1>
    <button onClick={onPrevious}>Prev Step</button>
    <button onClick={onNext}>Next Step</button>
  </div>
);

class Step2 extends React.Component {
  componentWillMount() {
    throw new Error("random error!");
  }

  render() {
    return "Step2";
  }
}

export { Step0, Step1, Step2 };
