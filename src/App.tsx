import React, { useState } from "react";
import { Input } from "./components/Input";
import { MappedOutput } from "./components/MappedOutput";
import { getRegionAllocations } from "./mappers/allocationsMapper";
import "./App.css";

export interface Percentages {
  vbr: number;
  iusv: number;
  vwo: number;
  efv: number;
  iemg: number;
  schf: number;
  voo: number;
  vti: number;
  ftec: number;
  ijs: number;
}

function App() {
  const [percentages, setPercentages] = useState<Percentages>({
    vbr: 0,
    iusv: 0,
    vwo: 0,
    efv: 0,
    iemg: 0,
    schf: 0,
    voo: 0,
    vti: 0,
    ijs: 0,
    ftec: 0,
  });

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
        {percentagesEntries.map(([etfName, percentage]) => (
          <Input
            label={`Percentage of ${etfName.toUpperCase()}: `}
            key={etfName}
            placeholder={`${percentage}%`}
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
