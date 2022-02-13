import {
  // Accordion,
  // AccordionButton,
  // AccordionIcon,
  // AccordionItem,
  // Box,
  Button,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import * as React from "react";
import { useForm } from "react-hook-form";

import RHFControlledInput from "lib/components/shared/form/RHFControlledInput";
import type { OgImageOption } from "lib/types/ogImageOption";
import { buildOgImageUrl } from "lib/utils/buildOgImageUrl";

const Generate: NextPage = () => {
  const toast = useToast();
  const { watch, control, handleSubmit } = useForm<OgImageOption>();
  const [imgUrl, setImgUrl] = React.useState<string>(
    "https://og.sznm.dev/api/generate?heading=Some-Title&text=some-description"
  );

  const values = watch();

  const ogImageUrl = React.useMemo(() => {
    return buildOgImageUrl(values);
  }, [values]);

  const handleClickCopy = () => {
    navigator.clipboard.writeText(ogImageUrl);

    toast({
      status: "success",
      title: "OpenGraph image url copied!",
      description: ogImageUrl,
      isClosable: true,
      position: "top",
    });
  };

  const onSubmit = () => {
    setImgUrl(ogImageUrl);
  };

  return (
    <Stack spacing={8} minHeight="70vh" justifyContent="center">
      <Heading size="lg" color="teal">
        Generate OpenGraph image
      </Heading>

      <Grid
        templateColumns={{
          base: "repeat(1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={12}
        alignItems="center"
      >
        <Stack as="form" onSubmit={handleSubmit(onSubmit)} spacing={6}>
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

          {/* <Accordion allowToggle>
            <AccordionItem>
              <Heading size="sm">
                <AccordionButton>
                  <Box flex={1} textAlign="left">
                    Options
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
            </AccordionItem>
          </Accordion> */}

          <Button type="submit" colorScheme="teal">
            Generate
          </Button>
        </Stack>

        <Stack spacing={6}>
          <Image
            borderRadius={8}
            shadow="xl"
            src={imgUrl}
            onClick={handleClickCopy}
            _hover={{ cursor: "pointer" }}
          />
          <Text>
            {ogImageUrl}{" "}
            <Button size="xs" colorScheme="linkedin" onClick={handleClickCopy}>
              Copy
            </Button>
          </Text>
        </Stack>
      </Grid>
    </Stack>
  );
};

export default Generate;
