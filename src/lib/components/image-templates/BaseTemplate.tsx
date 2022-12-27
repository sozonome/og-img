/* eslint-disable react/no-unknown-property */

import clsx from "clsx";

import type { OgImageOption } from "lib/types/ogImageOption";

type BaseTemplateProps = Omit<OgImageOption, "template">;

const BaseTemplate = ({ heading, text, center }: BaseTemplateProps) => {
  return (
    <div tw="w-screen h-screen p-32 flex flex-col justify-center bg-[#121212]">
      <div
        tw={clsx("flex flex-col items-center", center && "w-full text-center")}
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
            tw="font-medium text-3xl text-gray-500"
            style={{ fontFamily: "Outfit-Medium" }}
          >
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default BaseTemplate;
