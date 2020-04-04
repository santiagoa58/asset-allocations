import React, { useState } from "react";
import { Input } from "./components/Input";
import { MappedOutput } from "./components/MappedOutput";
import { getRegionAllocations } from "./mappers/allocationsMapper";
import "./App.css";
import { ETF_ALLOCATIONS } from "./utils/constants";

export type Percentages = {
  [K in keyof typeof ETF_ALLOCATIONS]: number;
};

function App() {
  const [percentages, setPercentages] = useState<Percentages>(() =>
    Object.keys(ETF_ALLOCATIONS).reduce((percentages, nextTicker) => {
      return { ...percentages, [nextTicker]: 0 };
    }, {} as Percentages),
  );

  const onChange = (percent: number, name: keyof Percentages) => {
    if (isNaN(percent)) {
      return null;
    }
    setPercentages(state => ({ ...state, [name]: percent / 100 }));
  };

  const percentagesEntries = Object.entries(percentages);

  return (
    <div className="App">
      <div
        style={{
          display: "inline-block",
          textAlign: "right",
          margin: "0 auto",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Percentages Input</h3>
        {percentagesEntries.map(([etfName]) => (
          <Input
            label={`Percentage of ${etfName.toUpperCase()}: `}
            key={etfName}
            placeholder="0%"
            onChange={(percent: number) => onChange(percent, etfName as any)}
          />
        ))}
      </div>
      <MappedOutput
        regionAllocations={getRegionAllocations(percentages)}
        showAsPercent
      />
    </div>
  );
}

export default App;
