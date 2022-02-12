import { Box } from "@chakra-ui/react";

import CTASection from "lib/components/CTASection";
import SomeImage from "lib/components/SomeImage";
import SomeText from "lib/components/SomeText";

const Home = () => {
  return (
    <Box mb={8} w="full">
      <SomeText />
      <SomeImage />
      <CTASection />
    </Box>
  );
};

export default Home;
