import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  Box,
  Grid,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";

import ControlledInput from "lib/components/shared/form/ControlledInput";

const Generate = () => {
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
          <ControlledInput
            label="Heading"
            size="lg"
            placeholder="Heading text"
          />
          <ControlledInput
            label="Text"
            size="sm"
            placeholder="Description text"
          />

          <Accordion allowToggle>
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
          </Accordion>
        </Stack>

        <Stack>
          <Image
            borderRadius={8}
            shadow="xl"
            src="https://bit.ly/dan-abramov"
          />
        </Stack>
      </Grid>
    </Stack>
  );
};

export default Generate;
