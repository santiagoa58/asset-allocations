import React from "react";

interface RenderCounterProps {
  onClick: () => void;
}

export const RenderCounter: React.FC<RenderCounterProps> = props => {
  const renderCount = React.useRef(0);

  return (
    <div>
      <span>Number of Renders: {++renderCount.current}</span>
      <button onClick={props.onClick}>Re-render Parent</button>
    </div>
  );
};
