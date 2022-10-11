import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

const Home = () => {
  return (
    <Stack
      mb={8}
      w="full"
      textAlign="center"
      minHeight="70vh"
      justifyContent="center"
    >
      <Heading>🖼️ og-img</Heading>
      <Text>Edge service to generate embeddable dynamic OpenGraph image</Text>

      <Flex justifyContent="center">
        <Link href="/generate" passHref>
          <Button as="a" colorScheme="teal">
            Generate
          </Button>
        </Link>
      </Flex>
    </Stack>
  );
};

export default Home;
