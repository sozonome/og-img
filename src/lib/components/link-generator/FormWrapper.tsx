import type { Control } from "react-hook-form";

import RHFControlledInput from "lib/components/shared/form/RHFControlledInput";
import type { OgImageOption } from "lib/types/ogImageOption";

type LinkGeneratorFormWrapperProps = {
  control: Control<OgImageOption, object>;
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
