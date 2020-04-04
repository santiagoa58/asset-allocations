type EtfRegion = "USA" | "FOREIGN_DEVELOPED" | "EMERGING_MARKETS";
type EtfFactorType = "VALUE" | "CAP_M";

export interface Allocations {
  ticker: string;
  large: number;
  mid: number;
  small: number;
  micro?: number;
  region: EtfRegion;
  factorType: EtfFactorType;
}

const IUSVAllocations: Allocations = {
  ticker: "IUSV",
  large: 87.78 / 100,
  mid: 11.08 / 100,
  small: 1.14 / 100,
  micro: 0,
  region: "USA",
  factorType: "VALUE",
};

const VBRAllocations: Allocations = {
  ticker: "VBR",
  large: 1.4 / 100,
  mid: 69.68 / 100,
  small: 27.89 / 100,
  micro: 1.03 / 100,
  region: "USA",
  factorType: "VALUE",
};

const VWOAllocations: Allocations = {
  ticker: "VWO",
  large: 59.2 / 100,
  mid: 27.98 / 100,
  small: 10.86 / 100,
  micro: 1.94 / 100,
  region: "EMERGING_MARKETS",
  factorType: "CAP_M",
};

const EFVAllocations: Allocations = {
  ticker: "EFV",
  large: 80.63 / 100,
  mid: 19.28 / 100,
  small: 0.1 / 100,
  micro: 0,
  region: "FOREIGN_DEVELOPED",
  factorType: "VALUE",
};

const IEMGAllocations: Allocations = {
  ticker: "IEMG",
  large: 60.48 / 100,
  mid: 27.07 / 100,
  small: 10.33 / 100,
  micro: 2.13 / 100,
  region: "EMERGING_MARKETS",
  factorType: "CAP_M",
};

const SCHFAllocations: Allocations = {
  ticker: "SCHF",
  large: 76.67 / 100,
  mid: 21.65 / 100,
  small: 1.68 / 100,
  micro: 0,
  region: "FOREIGN_DEVELOPED",
  factorType: "CAP_M",
};

const VOOAllocations: Allocations = {
  ticker: "VOO",
  large: 96.27 / 100,
  mid: 3.73 / 100,
  small: 0,
  micro: 0,
  region: "USA",
  factorType: "CAP_M",
};

const VTIAllocations: Allocations = {
  ticker: "VTI",
  large: 83.32 / 100,
  mid: 12.39 / 100,
  small: 3.57 / 100,
  micro: 0.71 / 100,
  region: "USA",
  factorType: "CAP_M",
};

const IJSAllocations: Allocations = {
  ticker: "IJS",
  large: 0,
  mid: 15.17 / 100,
  small: 74.03 / 100,
  micro: 10.8 / 100,
  region: "USA",
  factorType: "VALUE",
};

const FTECAllocations: Allocations = {
  ticker: "FTEC",
  large: 89.04 / 100,
  mid: 8.87 / 100,
  small: 1.98 / 100,
  micro: 0.11 / 100,
  region: "USA",
  factorType: "CAP_M",
};

const SCHVAllocations: Allocations = {
  ticker: "SCHV",
  large: 89.48 / 100,
  mid: 10.48 / 100,
  small: 0.04 / 100,
  micro: 0,
  region: "USA",
  factorType: "VALUE",
};

const SCHDAllocations: Allocations = {
  ticker: "SCHD",
  large: 92.89 / 100,
  mid: 6.62 / 100,
  small: 0.47 / 100,
  micro: 0.02 / 100,
  region: "USA",
  factorType: "CAP_M",
};

const VBAllocations: Allocations = {
  ticker: "VB",
  large: 3.1 / 100,
  mid: 70.61 / 100,
  small: 25.26 / 100,
  micro: 1.03 / 100,
  region: "USA",
  factorType: "CAP_M",
};

export const ETF_ALLOCATIONS = {
  IUSV: IUSVAllocations,
  VBR: VBRAllocations,
  VWO: VWOAllocations,
  EFV: EFVAllocations,
  IEMG: IEMGAllocations,
  SCHF: SCHFAllocations,
  VOO: VOOAllocations,
  VTI: VTIAllocations,
  IJS: IJSAllocations,
  FTEC: FTECAllocations,
  SCHV: SCHVAllocations,
  SCHD: SCHDAllocations,
  VB: VBAllocations,
};

export type AllEtfAllocations = typeof ETF_ALLOCATIONS;
