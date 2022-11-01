/* eslint-disable react/no-unknown-property */

type ColorTemplateProps = {
  heading?: string;
  text?: string;
};

const ColorTemplate = ({ heading, text }: ColorTemplateProps) => {
  return (
    <div tw="w-screen h-screen flex flex-col justify-center bg-gray-900">
      <div
        style={{
          position: "absolute",
          height: "150%",
          width: "150%",
          transform: "translate(-50%)",
          filter: "blur(200px) saturate(150%)",
          backgroundImage: `linear-gradient(45deg, #f97316, #06b6d4)`,
        }}
      />
      <div tw="p-32 flex flex-col justify-center">
        <span tw="text-4xl">🗒️</span>
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
