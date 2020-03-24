import React from "react";
import { Allocations } from "../utils/constants";

const getFormattedNumber = (number: number, showAsPercent: boolean): string =>
  showAsPercent ? `${(number * 100).toFixed(2)}%` : number.toFixed(4);

export const Output: React.FC<{
  alloc: Allocations | undefined;
  label: string;
  showAsPercent?: boolean;
}> = props => {
  return props.alloc ? (
    <div>
      <h5>{props.label.toUpperCase()}</h5>
      <div>
        {`Large ${props.label}: `}
        {getFormattedNumber(props.alloc.large, !!props.showAsPercent)}
      </div>
      <br />
      <div>
        {`Middle ${props.label}: `}
        {getFormattedNumber(props.alloc.mid, !!props.showAsPercent)}
      </div>
      <br />
      <div>
        {`Small ${props.label}: `}
        {getFormattedNumber(props.alloc.small, !!props.showAsPercent)}
      </div>
      <br />
    </div>
  ) : null;
};
