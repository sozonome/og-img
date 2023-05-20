import type { SelectProps } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import * as React from 'react';

import type { FormControlWrapperProps } from 'lib/components/shared/form/FormControlWrapper';
import FormControlWrapper from 'lib/components/shared/form/FormControlWrapper';

export type ControlledSelectProps = FormControlWrapperProps &
  SelectProps & {
    options: Array<{
      label: string;
      value: string | number;
    }>;
  };

const ControlledSelect = React.forwardRef(
  (
    {
      label,
      errorText,
      helperText,
      isInvalid,
      isRequired,
      options,
      ...selectProps
    }: ControlledSelectProps,
    ref: React.ForwardedRef<HTMLSelectElement>
  ) => {
    return (
      <FormControlWrapper
        label={label}
        errorText={errorText}
        helperText={helperText}
        isInvalid={isInvalid}
        isRequired={isRequired}
      >
        <Select
          ref={ref}
          variant="filled"
          borderRadius={12}
          {...selectProps}
          isRequired={isRequired}
        >
          {options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </Select>
      </FormControlWrapper>
    );
  }
);
export default ControlledSelect;
