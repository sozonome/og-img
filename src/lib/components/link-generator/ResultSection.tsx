import { AspectRatio, Button, Image, Text, Tooltip } from "@chakra-ui/react";

type LinkGeneratorResultSectionProps = {
  generatedImageUrl: string;
  ogImageUrl: string;
  onClick: () => void;
};

const LinkGeneratorResultSection = ({
  generatedImageUrl,
  ogImageUrl,
  onClick,
}: LinkGeneratorResultSectionProps) => {
  return (
    <>
      <AspectRatio ratio={1200 / 630}>
        <Tooltip label={`${ogImageUrl} [click to copy]`} placement="top">
          <Image
            borderRadius={8}
            shadow="xl"
            src={generatedImageUrl}
            width="1200"
            height="630"
            bgGradient="linear(to-br, gray.500, gray.800)"
            onClick={onClick}
            _hover={{ cursor: "pointer" }}
          />
        </Tooltip>
      </AspectRatio>

      <Text>
        {ogImageUrl}{" "}
        <Button
          marginLeft={2}
          size="xs"
          colorScheme="linkedin"
          onClick={onClick}
        >
          Copy
        </Button>
      </Text>
    </>
  );
};

export default LinkGeneratorResultSection;
