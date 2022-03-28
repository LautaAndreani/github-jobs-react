import { Text, Box } from "@chakra-ui/react";

export default function Title() {
  return (
    <Text as="h1" fontSize="1.5rem" marginBottom="1rem" w="86%" margin="0 auto" marginTop={5}>
      <Box as="span" fontWeight={600}>
        Github
      </Box>{" "}
      Jobs
    </Text>
  );
}
