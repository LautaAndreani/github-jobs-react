import { JobProps } from "../../types";

import BadgeUI from "../ui/BadgeUI";

import { Stack, Heading, Image, HStack, Icon, Box, Text } from "@chakra-ui/react";
import { MdLanguage, MdSchedule } from "react-icons/md";
import Description from "../ui/Description";

export default function RightSide({ filterJob }: JobProps) {
  return (
    <>
      <Stack direction="column" color="brand.text">
        <Stack>
          <HStack flexWrap="wrap">
            <Heading as="h1" marginRight={2}>
              {filterJob?.position}
            </Heading>
            <BadgeUI marginLeft="1rem">{filterJob?.type}</BadgeUI>
          </HStack>
          <Stack direction="row" alignItems="center" color="brand.placeholder">
            <Icon as={MdSchedule} />
            <Box as="span">{new Date().toLocaleDateString("en-us", { month: "short", day: "numeric" })}</Box>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={5} paddingTop={5}>
          <Box width="5rem" objectFit="cover">
            <Image src={filterJob?.company_img ? filterJob?.company_img : "/src/assets/not-found.png"} alt={filterJob?.company} w="100%" height="100%" objectFit="cover" borderRadius="md" />
          </Box>
          <Stack direction="column" justifyContent="space-evenly">
            <Text as="h3" fontSize="1.4rem" fontWeight={600}>
              {filterJob?.company}
            </Text>
            <Stack direction="row" alignItems="center" color="brand.placeholder">
              <Icon as={MdLanguage} />
              <Box as="span">{filterJob?.location}</Box>
            </Stack>
          </Stack>
        </Stack>
        <Box as="span" paddingTop={"1rem"}>
          <Description />
        </Box>
      </Stack>
    </>
  );
}
