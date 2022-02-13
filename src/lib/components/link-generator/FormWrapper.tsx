import type { Control } from "react-hook-form";

import RHFControlledInput from "lib/components/shared/form/RHFControlledInput";

type LinkGeneratorFormWrapperProps = {
  control: Control;
};

const LinkGeneratorFormWrapper = ({
  control,
}: LinkGeneratorFormWrapperProps) => {
  return (
    <>
      <RHFControlledInput
        label="Heading"
        size="lg"
        placeholder="Heading text"
        name="heading"
        control={control}
      />
      <RHFControlledInput
        label="Text"
        size="sm"
        name="text"
        control={control}
        placeholder="Description text"
      />
    </>
  );
};

export default LinkGeneratorFormWrapper;
