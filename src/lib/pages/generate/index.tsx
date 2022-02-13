import { Button, Grid, Heading, Stack, useToast } from "@chakra-ui/react";
import type { NextPage } from "next";
import * as React from "react";
import { useForm } from "react-hook-form";

import LinkGeneratorFormWrapper from "lib/components/link-generator/FormWrapper";
import LinkGeneratorResultSection from "lib/components/link-generator/ResultSection";
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
          <LinkGeneratorFormWrapper control={control} />

          <Button type="submit" colorScheme="teal">
            Generate
          </Button>
        </Stack>

        <Stack spacing={6}>
          <LinkGeneratorResultSection
            generatedImageUrl={imgUrl}
            ogImageUrl={ogImageUrl}
            onClick={handleClickCopy}
          />
        </Stack>
      </Grid>
    </Stack>
  );
};

export default Generate;
