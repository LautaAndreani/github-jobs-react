import { Link } from "react-router-dom";

import { Stack, Box, Text, Link as ChakraLink } from "@chakra-ui/react";
interface LeftProp {
  filterJob?: {
    contact: string;
  };
}

export default function LeftSide({ filterJob }: LeftProp) {
  return (
    <Stack direction="column" fontFamily="Poppins">
      <Box color="brand.buttons">
        <Link to="/"> &larr; Back to Search</Link>
      </Box>
      <Stack direction="column" paddingTop="2rem" spacing={5}>
        <Text textTransform="uppercase" color="brand.placeholder" fontWeight={600}>
          How to Apply
        </Text>
        <Text color="brand.text" fontWeight={500} w="70%">
          Please email a copy of your resume and online portfolio to{" "}
          <ChakraLink href={`mailto: ${filterJob?.contact.split(" ")[0]}`} isExternal color="brand.buttons">
            {filterJob?.contact.split(",")[0]}
          </ChakraLink>{" "}
          & CC{" "}
          <ChakraLink href={`mailto: ${filterJob?.contact.split(" ")[1]}`} isExternal color="brand.buttons">
            {filterJob?.contact.split(" ")[1]}
          </ChakraLink>
        </Text>
      </Stack>
    </Stack>
  );
}
