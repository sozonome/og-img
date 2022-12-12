/* eslint-disable react/no-unknown-property */

import clsx from "clsx";

import type { OgImageOption } from "lib/types/ogImageOption";

type ColorTemplateProps = Omit<OgImageOption, "template">;

const ColorTemplate = ({
  heading,
  text,
  center,
  width,
  height,
}: ColorTemplateProps) => {
  const aHeight = height ?? 0;
  const aWidth = width ?? 0;
  const blurSize = (aWidth < aHeight ? aWidth : aHeight) / 3.2;

  return (
    <div tw="w-screen h-screen flex flex-col justify-center bg-gray-900">
      <div
        style={{
          position: "absolute",
          height: `${aHeight.toString()}px`,
          width: `${aWidth.toString()}px`,
          filter: `blur(${blurSize}px) saturate(150%)`,
          backgroundImage: `linear-gradient(45deg, #f97316, #06b6d4)`,
        }}
      />
      <div
        tw={clsx(
          "p-32 flex flex-col",
          center && "w-screen items-center text-center"
        )}
      >
        {heading && (
          <h1
            tw="text-6xl font-bold text-gray-300 leading-tight"
            style={{ fontFamily: "Outfit-Bold" }}
          >
            {heading}
          </h1>
        )}
        {text && (
          <p
            tw="font-medium text-3xl text-gray-300"
            style={{ fontFamily: "Outfit-Medium" }}
          >
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default ColorTemplate;
