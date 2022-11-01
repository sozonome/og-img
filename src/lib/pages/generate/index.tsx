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
  const { watch, register } = useForm<OgImageOption>({
    defaultValues: {
      heading: "Some Title",
      text: "Some description",
    },
  });

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
        <Stack spacing={6}>
          <LinkGeneratorFormWrapper register={register} />

          <Button colorScheme="teal" onClick={handleClickCopy}>
            Copy URL
          </Button>
        </Stack>

        <Stack spacing={6}>
          <LinkGeneratorResultSection
            generatedImageUrl={ogImageUrl}
            ogImageUrl={ogImageUrl}
            onClick={handleClickCopy}
          />
        </Stack>
      </Grid>
    </Stack>
  );
};

export default Generate;
