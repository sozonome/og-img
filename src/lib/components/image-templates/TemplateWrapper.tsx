/* eslint-disable react/no-unknown-property */

import { PLAIN_TEMPLATE } from "lib/constants/template-option";
import type { OgImageOption } from "lib/types/ogImageOption";

import BaseTemplate from "./BaseTemplate";
import ColorTemplate from "./ColorTemplate";

type TemplateSwitcherProps = OgImageOption;

const TemplateSwitcher = ({
  heading,
  text,
  template,
  center,
  width,
  height,
}: TemplateSwitcherProps) => {
  if (template === PLAIN_TEMPLATE) {
    return <BaseTemplate {...{ heading, text, width, height }} />;
  }

  return <ColorTemplate {...{ heading, text, center, width, height }} />;
};

export default TemplateSwitcher;
