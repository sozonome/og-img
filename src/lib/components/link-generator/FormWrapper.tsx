import { Checkbox } from "@chakra-ui/react";
import type { UseFormRegister } from "react-hook-form";

import ControlledInput from "lib/components/shared/form/ControlledInput";
import ControlledSelect from "lib/components/shared/form/ControlledSelect";
import { templateOptions } from "lib/constants/template-option";
import type { OgImageOption } from "lib/types/ogImageOption";
import { generateOptions } from "lib/utils/generateOptions";

type LinkGeneratorFormWrapperProps = {
  register: UseFormRegister<OgImageOption>;
};

const LinkGeneratorFormWrapper = ({
  register,
}: LinkGeneratorFormWrapperProps) => {
  return (
    <>
      <ControlledInput
        {...register("heading")}
        label="Heading"
        size="lg"
        placeholder="Heading text"
      />
      <ControlledInput
        {...register("text")}
        label="Text"
        size="sm"
        placeholder="Description text"
      />
      <ControlledSelect
        {...register("template")}
        label="Template"
        options={generateOptions(templateOptions)}
      />
      <Checkbox {...register("center")}>center</Checkbox>
    </>
  );
};

export default LinkGeneratorFormWrapper;
