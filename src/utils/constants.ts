export interface Allocations {
  large: number;
  mid: number;
  small: number;
  micro?: number;
}

const IUSVAllocations: Allocations = {
  large: 87.78 / 100,
  mid: 11.08 / 100,
  small: 1.14 / 100,
  micro: 0,
};

const VBRAllocations: Allocations = {
  large: 1.4 / 100,
  mid: 69.68 / 100,
  small: 27.89 / 100,
  micro: 1.03 / 100,
};

const VWOAllocations: Allocations = {
  large: 59.2 / 100,
  mid: 27.98 / 100,
  small: 10.86 / 100,
  micro: 1.94 / 100,
};

const EFVAllocations: Allocations = {
  large: 80.63 / 100,
  mid: 19.28 / 100,
  small: 0.1 / 100,
  micro: 0,
};

const IEMGAllocations: Allocations = {
  large: 60.48 / 100,
  mid: 27.07 / 100,
  small: 10.33 / 100,
  micro: 2.13 / 100,
};

const SCHFAllocations: Allocations = {
  large: 76.67 / 100,
  mid: 21.65 / 100,
  small: 1.68 / 100,
  micro: 0,
};

const VOOAllocations: Allocations = {
  large: 96.27 / 100,
  mid: 3.73 / 100,
  small: 0,
  micro: 0,
};

const VTIAllocations: Allocations = {
  large: 83.32 / 100,
  mid: 12.39 / 100,
  small: 3.57 / 100,
  micro: 0.71 / 100,
};

const IJSAllocations: Allocations = {
  large: 0,
  mid: 15.17 / 100,
  small: 74.03 / 100,
  micro: 10.8 / 100,
};

const FTECAllocations: Allocations = {
  large: 89.04 / 100,
  mid: 8.87 / 100,
  small: 1.98 / 100,
  micro: 0.11 / 100,
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
};
