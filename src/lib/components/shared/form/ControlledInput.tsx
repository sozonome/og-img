import type { InputProps } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

import type { FormControlWrapperProps } from "lib/components/shared/form/FormControlWrapper";
import FormControlWrapper from "lib/components/shared/form/FormControlWrapper";

export type ControlledInputProps = FormControlWrapperProps & InputProps;

const ControlledInput = ({
  label,
  errorText,
  helperText,
  isInvalid,
  isRequired,
  ...inputProps
}: ControlledInputProps) => {
  return (
    <FormControlWrapper
      label={label}
      errorText={errorText}
      helperText={helperText}
      isInvalid={isInvalid}
      isRequired={isRequired}
    >
      <Input
        variant="filled"
        borderRadius={12}
        {...inputProps}
        isRequired={isRequired}
      />
    </FormControlWrapper>
  );
};

export default ControlledInput;
