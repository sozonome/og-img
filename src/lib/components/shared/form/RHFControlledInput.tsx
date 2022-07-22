import type { Control } from "react-hook-form";
import { Controller } from "react-hook-form";

import type { OgImageOption } from "lib/types/ogImageOption";

import type { ControlledInputProps } from "./ControlledInput";
import ControlledInput from "./ControlledInput";

type RHFControlledInputProps = {
  name: keyof OgImageOption;
  control: Control<OgImageOption, object>;
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
