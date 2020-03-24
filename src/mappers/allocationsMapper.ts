import { ETF_ALLOCATIONS, Allocations } from "../utils/constants";
import { safeAdd } from "../utils/functions";
import { Percentages } from "../App";
import { RegionAllocations } from "../components/MappedOutput";

const getAllocations = (alloc: Allocations, percent: number): Allocations => {
  return {
    large: alloc.large * percent,
    mid: alloc.mid * percent,
    small: alloc.small * percent,
    micro: alloc.micro ? alloc.micro * percent : undefined,
  };
};

export const getRegionAllocations = (
  percentages: Percentages,
): RegionAllocations => {
  const vbr = getAllocations(ETF_ALLOCATIONS.VBR, percentages.vbr);
  const iusv = getAllocations(ETF_ALLOCATIONS.IUSV, percentages.iusv);
  const vwo = getAllocations(ETF_ALLOCATIONS.VWO, percentages.vwo);
  const efv = getAllocations(ETF_ALLOCATIONS.EFV, percentages.efv);
  const iemg = getAllocations(ETF_ALLOCATIONS.IEMG, percentages.iemg);
  const schf = getAllocations(ETF_ALLOCATIONS.SCHF, percentages.schf);
  const voo = getAllocations(ETF_ALLOCATIONS.VOO, percentages.voo);
  const vti = getAllocations(ETF_ALLOCATIONS.VTI, percentages.vti);
  const ftec = getAllocations(ETF_ALLOCATIONS.FTEC, percentages.ftec);
  const ijs = getAllocations(ETF_ALLOCATIONS.IJS, percentages.ijs);

  const usaValueAlloc: Allocations = {
    large: safeAdd(vbr.large, iusv.large, ijs.large),
    mid: safeAdd(vbr.mid, iusv.mid, ijs.mid),
    small: safeAdd(
      vbr.small,
      iusv.small,
      ijs.small,
      iusv.micro,
      ijs.micro,
      vbr.micro,
    ),
  };

  const usaCapMAlloc: Allocations = {
    large: safeAdd(voo.large, vti.large, ftec.large),
    mid: safeAdd(voo.mid, vti.mid, ftec.mid),
    small: safeAdd(voo.small, vti.small, vti.micro, voo.micro, ftec.micro),
  };

  const foreignValueAlloc: Allocations = {
    large: safeAdd(efv.large),
    mid: safeAdd(efv.mid),
    small: safeAdd(efv.small, efv.micro),
  };

  const foreignCapMAlloc: Allocations = {
    large: safeAdd(schf.large),
    mid: safeAdd(schf.mid),
    small: safeAdd(schf.small, schf.micro),
  };

  const emergingCapMAlloc: Allocations = {
    large: safeAdd(iemg.large, vwo.large),
    mid: safeAdd(iemg.mid, vwo.mid),
    small: safeAdd(iemg.small, vwo.small, iemg.micro, vwo.micro),
  };

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
    },
  };
};
