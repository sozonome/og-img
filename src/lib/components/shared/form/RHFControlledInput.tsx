import type { Control } from "react-hook-form";
import { Controller } from "react-hook-form";

import type { ControlledInputProps } from "./ControlledInput";
import ControlledInput from "./ControlledInput";

type RHFControlledInputProps = {
  name: string;
  control: Control;
} & ControlledInputProps;

const RHFControlledInput = ({
  name,
  control,
  ...controlledInputProps
}: RHFControlledInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <ControlledInput {...controlledInputProps} {...field} />
      )}
    />
  );
};

export default RHFControlledInput;
