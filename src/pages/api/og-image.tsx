import { Box, Heading, Text } from "@chakra-ui/react";
import { withOGImage } from "next-api-og-image";

export default withOGImage({
  template: {
    react: ({ heading, text }) => (
      <Box padding={6}>
        <Heading color="orange.600">{heading}</Heading>
        <Text>{text}</Text>
      </Box>
    ),
  },
});
