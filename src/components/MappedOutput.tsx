import React from "react";
import { Output } from "./Output";
import { Allocations } from "../utils/constants";

interface FactorAllocations {
  value: Allocations;
  capM: Allocations;
}

export interface RegionAllocations {
  usa: FactorAllocations;
  foreign: FactorAllocations;
  emerging: Partial<FactorAllocations>;
}

export const MappedOutput: React.FC<{
  regionAllocations: RegionAllocations;
  showAsPercent?: boolean;
}> = ({ regionAllocations, ...props }) => {
  const usaAllocations = Object.entries(regionAllocations.usa);
  const foreignAllocations = Object.entries(regionAllocations.foreign);
  const emergingAllocations = Object.entries(regionAllocations.emerging);

  return (
    <div>
      <hr></hr>
      <h4>US Equity</h4>
      {usaAllocations.map(([label, alloc]) => (
        <Output
          key={`US-${label}`}
          label={label}
          alloc={alloc}
          showAsPercent={props.showAsPercent}
        />
      ))}
      <hr></hr>
      <h4>Develop Markets Equity</h4>
      {foreignAllocations.map(([label, alloc]) => (
        <Output
          key={`Develop-${label}`}
          label={label}
          alloc={alloc}
          showAsPercent={props.showAsPercent}
        />
      ))}
      <hr></hr>
      <h4>Emerging Markets Equity</h4>
      {emergingAllocations.map(([label, alloc]) => (
        <Output
          key={`Emerging-${label}`}
          label={label}
          alloc={alloc}
          showAsPercent={props.showAsPercent}
        />
      ))}
    </div>
  );
};
