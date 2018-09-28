import React, { Component } from "react";
import { Steps } from "antd";
import ErrorBoundary from "react-error-boundary";

import { Step0, Step1, Step2 } from "./Steps";
import ErrorFallbackComponent from "./ErrorFallbackComponent";

const steps = [{ title: "Step 1" }, { title: "Step 2" }, { title: "Step 3" }];

class Workaround extends Component {
  state = {
    current: 0
  };

  next = () => this.setState(prevState => ({ current: prevState.current + 1 }));
  prev = () => this.setState(prevState => ({ current: prevState.current - 1 }));

  getContent = () => {
    const { current, packageName, version } = this.state;

    switch (current) {
      default:
        return <Step0 onNext={this.next} />;
      case 1:
        return <Step1 onPrevious={this.prev} onNext={this.next} />;
      case 2:
        return <Step2 onPrevious={this.prev} />;
    }
  };

  onStepClick = current => {
    this.errorBoundary.current.state.error = null;
    this.setState({ current });
  };

  errorBoundary = React.createRef();

  render() {
    const { current } = this.state;

    return (
      <div>
        <h2>Workaround using Ref</h2>
        <Steps current={current}>
          {steps.map((item, step) => (
            <Steps.Step
              className="wizard-step"
              key={item.title}
              title={item.title}
              onClick={e => this.onStepClick(step)}
            />
          ))}
        </Steps>
        <div className="steps-content">
          <ErrorBoundary
            ref={this.errorBoundary}
            FallbackComponent={ErrorFallbackComponent}
          >
            {this.getContent()}
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

export default Workaround;
