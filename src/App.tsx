import * as React from "react";
import ReactDOM from "react-dom";
import { usePopperTooltip } from "react-popper-tooltip";
import "react-popper-tooltip/dist/styles.css";

function App() {
  return <Example />;
}

function Example() {
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,

    visible,
  } = usePopperTooltip({ trigger: "click", interactive: true });

  return (
    <>
      <div className="App">
        <h1>Basic example</h1>

        <button type="button" ref={setTriggerRef}>
          Trigger element
        </button>

        {visible && (
          <div
            ref={setTooltipRef}
            {...getTooltipProps({ className: "tooltip-container" })}
          >
            This will not disappear when you mouse out, because the trigger is
            set to 'click'.
            <Nested />
            <div {...getArrowProps({ className: "tooltip-arrow" })} />
          </div>
        )}
      </div>
    </>
  );
}

function Nested() {
  const {
    getArrowProps,

    getTooltipProps,
    setTooltipRef,

    setTriggerRef,
    visible,
  } = usePopperTooltip();

  return (
    <>
      <div className="App">
        <h1>Basic example</h1>

        <button type="button" ref={setTriggerRef}>
          Trigger element
        </button>

        {visible && (
          <div
            ref={setTooltipRef}
            {...getTooltipProps({ className: "tooltip-container" })}
          >
            Tooltip element
            <div {...getArrowProps({ className: "tooltip-arrow" })} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
