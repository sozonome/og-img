/* eslint-disable react/no-unknown-property */

import { PLAIN_TEMPLATE } from "lib/constants/template-option";

import BaseTemplate from "./BaseTemplate";
import ColorTemplate from "./ColorTemplate";

type TemplateSwitcherProps = {
  heading?: string;
  text?: string;
  template?: string;
};

const TemplateSwitcher = ({
  heading,
  text,
  template,
}: TemplateSwitcherProps) => {
  if (template === PLAIN_TEMPLATE) {
    return <BaseTemplate {...{ heading, text }} />;
  }

  return <ColorTemplate {...{ heading, text }} />;
};

export default TemplateSwitcher;
