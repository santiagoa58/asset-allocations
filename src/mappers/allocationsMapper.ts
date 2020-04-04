import {
  ETF_ALLOCATIONS,
  Allocations,
  AllEtfAllocations,
} from "../utils/constants";
import { safeAdd } from "../utils/functions";
import { Percentages } from "../App";
import {
  RegionAllocations,
  FactorAllocations,
} from "../components/MappedOutput";

const mapAllocations = (alloc: Allocations, percent: number): Allocations => {
  return {
    ...alloc,
    large: alloc.large * percent,
    mid: alloc.mid * percent,
    small: alloc.small * percent,
    micro: alloc.micro ? alloc.micro * percent : undefined,
  };
};

const getTotalAllocationsMap = (
  etfAllocations: AllEtfAllocations,
  percentages: Percentages,
) => {
  const totalMappedAllocations: Array<[string, Allocations]> = Object.entries(
    etfAllocations,
  ).map(([nextTicker, nextAlloc]) => {
    const allocation = mapAllocations(
      nextAlloc,
      percentages[nextTicker as keyof AllEtfAllocations],
    );
    return [nextTicker, allocation];
  });
  return new Map(totalMappedAllocations);
};

export const getRegionAllocations = (
  percentages: Percentages,
): RegionAllocations => {
  const totalAllocations = getTotalAllocationsMap(ETF_ALLOCATIONS, percentages);
  const usaValueAlloc: FactorAllocations["value"] = {
    large: 0,
    mid: 0,
    small: 0,
    region: "USA",
    factorType: "VALUE",
  };
  const usaCapMAlloc: FactorAllocations["capM"] = {
    large: 0,
    mid: 0,
    small: 0,
    region: "USA",
    factorType: "CAP_M",
  };
  const foreignValueAlloc: FactorAllocations["value"] = {
    large: 0,
    mid: 0,
    small: 0,
    region: "FOREIGN_DEVELOPED",
    factorType: "VALUE",
  };
  const foreignCapMAlloc: FactorAllocations["capM"] = {
    large: 0,
    mid: 0,
    small: 0,
    region: "FOREIGN_DEVELOPED",
    factorType: "CAP_M",
  };
  const emergingCapMAlloc: FactorAllocations["capM"] = {
    large: 0,
    mid: 0,
    small: 0,
    region: "EMERGING_MARKETS",
    factorType: "CAP_M",
  };

  const emergingValueAlloc: FactorAllocations["value"] = {
    large: 0,
    mid: 0,
    small: 0,
    region: "EMERGING_MARKETS",
    factorType: "VALUE",
  };

  totalAllocations.forEach(allocation => {
    switch (allocation.region) {
      case "USA": {
        if (allocation.factorType === "CAP_M") {
          usaCapMAlloc.large = safeAdd(usaCapMAlloc.large, allocation.large);
          usaCapMAlloc.mid = safeAdd(usaCapMAlloc.mid, allocation.mid);
          usaCapMAlloc.small = safeAdd(
            usaCapMAlloc.small,
            allocation.small,
            usaCapMAlloc.micro,
            allocation.micro,
          );
          return;
        }
        usaValueAlloc.large = safeAdd(usaValueAlloc.large, allocation.large);
        usaValueAlloc.mid = safeAdd(usaValueAlloc.mid, allocation.mid);
        usaValueAlloc.small = safeAdd(
          usaValueAlloc.small,
          allocation.small,
          usaValueAlloc.micro,
          allocation.micro,
        );
        return;
      }
      case "FOREIGN_DEVELOPED": {
        if (allocation.factorType === "CAP_M") {
          foreignCapMAlloc.large = safeAdd(
            foreignCapMAlloc.large,
            allocation.large,
          );
          foreignCapMAlloc.mid = safeAdd(foreignCapMAlloc.mid, allocation.mid);
          foreignCapMAlloc.small = safeAdd(
            foreignCapMAlloc.small,
            allocation.small,
            foreignCapMAlloc.micro,
            allocation.micro,
          );
          return;
        }
        foreignValueAlloc.large = safeAdd(
          foreignValueAlloc.large,
          allocation.large,
        );
        foreignValueAlloc.mid = safeAdd(foreignValueAlloc.mid, allocation.mid);
        foreignValueAlloc.small = safeAdd(
          foreignValueAlloc.small,
          allocation.small,
          foreignValueAlloc.micro,
          allocation.micro,
        );
        return;
      }
      case "EMERGING_MARKETS": {
        if (allocation.factorType === "CAP_M") {
          emergingCapMAlloc.large = safeAdd(
            emergingCapMAlloc.large,
            allocation.large,
          );
          emergingCapMAlloc.mid = safeAdd(
            emergingCapMAlloc.mid,
            allocation.mid,
          );
          emergingCapMAlloc.small = safeAdd(
            emergingCapMAlloc.small,
            allocation.small,
            emergingCapMAlloc.micro,
            allocation.micro,
          );
          return;
        }
        emergingValueAlloc.large = safeAdd(
          emergingValueAlloc.large,
          allocation.large,
        );
        emergingValueAlloc.mid = safeAdd(
          emergingValueAlloc.mid,
          allocation.mid,
        );
        emergingValueAlloc.small = safeAdd(
          emergingValueAlloc.small,
          allocation.small,
          emergingValueAlloc.micro,
          allocation.micro,
        );
        return;
      }
    }
  });

  return {
    usa: {
      capM: usaCapMAlloc,
      value: usaValueAlloc,
    },
    foreign: {
      capM: foreignCapMAlloc,
      value: foreignValueAlloc,
    },
    emerging: {
      capM: emergingCapMAlloc,
      value: emergingValueAlloc,
    },
  };
};
