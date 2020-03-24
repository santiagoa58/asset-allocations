import React, { useState } from "react";

const validatePercentageInput = (percent: string): boolean => {
  const input = percent.match(/^(\d+\.?\d*)$/g);
  if (!input) {
    return false;
  }

  const [integer, decimal] = input[0].split(".");
  if (decimal && decimal.length > 5) {
    return false;
  }
  if (integer && integer.length > 3) {
    return false;
  }

  return Number(percent) >= 0 && Number(percent) <= 100;
};

export const Input: React.FC<{
  onChange(input: number): void;
  label: string;
  placeholder?: string;
}> = props => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    if (validatePercentageInput(value) || !value) {
      setValue(value);
      props.onChange(Number(value));
    }
  };

  return (
    <div>
      <div style={{ display: "inline-block", paddingRight: "1rem" }}>
        {props.label}
      </div>
      <input
        value={value}
        placeholder={props.placeholder}
        onChange={handleChange}
        name="input"
      />
    </div>
  );
};
