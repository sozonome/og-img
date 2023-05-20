/* eslint-disable react/no-unknown-property */

import { COLOR_TEMPLATE } from 'lib/constants/template-option';
import type { OgImageOption } from 'lib/types/ogImageOption';

import BaseTemplate from './BaseTemplate';
import ColorTemplate from './ColorTemplate';

type TemplateSwitcherProps = OgImageOption;

const TemplateSwitcher = ({
  heading,
  text,
  template,
  center,
  width,
  height,
}: TemplateSwitcherProps) => {
  if (template === COLOR_TEMPLATE) {
    return <ColorTemplate {...{ heading, text, center, width, height }} />;
  }

  return <BaseTemplate {...{ heading, text, width, height, center }} />;
};

export default TemplateSwitcher;
