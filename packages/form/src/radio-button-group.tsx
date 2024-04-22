import type { FormControlProps } from '@mui/material/FormControl';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React from 'react';

interface InputOption {
  control?: React.ReactElement;
  label: React.ReactNode;
  value: string;
}

interface RadioButtonGroupProps extends FormControlProps {
  defaultValue?: string;
  label?: string;
  inputOptions: InputOption[];
}

function RadioButtonGroup({
  defaultValue,
  label,
  inputOptions,
  ...formControlProps
}: RadioButtonGroupProps) {
  return (
    <FormControl {...formControlProps}>
      {label && <FormLabel id="radio-button-group-label">{label}</FormLabel>}
      <RadioGroup
        aria-labelledby="radio-button-group-label"
        defaultValue={defaultValue}
        name="radio-button-group"
      >
        {inputOptions.map(({ control, label, value }) => (
          <FormControlLabel
            control={control ? control : <Radio />}
            key={value}
            label={label}
            value={value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtonGroup;
