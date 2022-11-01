/* eslint-disable react/no-unknown-property */
import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";

import TemplateSwitcher from "lib/components/image-templates/TemplateWrapper";
import { outfitBold, outfitMedium } from "lib/utils/font/outfit";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  const outfitMediumFontData = await outfitMedium;
  const outfitBoldFontData = await outfitBold;

  const { searchParams } = new URL(req.url);
  const heading = searchParams.get("heading")?.slice(0, 100);
  const text = searchParams.get("text")?.slice(0, 200);
  const template = searchParams.get("template")?.slice(0, 200);
  const templateProps = { heading, text, template };

  return new ImageResponse(<TemplateSwitcher {...templateProps} />, {
    fonts: [
      {
        name: "Outfit-Medium",
        data: outfitMediumFontData,
        weight: 500,
      },
      {
        name: "Outfit-Bold",
        data: outfitBoldFontData,
        weight: 700,
      },
    ],
  });
}
