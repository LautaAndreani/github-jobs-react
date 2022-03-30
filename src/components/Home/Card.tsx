import { MdLanguage, MdSchedule } from "react-icons/md";
import { Job } from "../../types";
import MotionBoxes from "../MotionBox";
import BadgeUI from "../ui/BadgeUI";
import errorImage from "../../assets/not-found.webp";

import { Stack, Image, Box, Text, Badge, Icon } from "@chakra-ui/react";

interface cardProp {
  job: Job;
}

const Card = ({ job }: cardProp) => {
  return (
    <>
      <MotionBoxes>
        <Stack direction="row" alignItems="center" marginTop="2rem" p={5} color="brand.text" boxShadow="0px 2px 4px rgba(0, 0, 0, 0.05)" borderRadius="md" bg="white" w="100%">
          <Box width="7rem" objectFit="cover">
            <Image src={job.company_img ? job.company_img : errorImage} alt={job.company} w="100%" height="100%" objectFit="cover" borderRadius="md" />
          </Box>
          <Stack direction="column" height="100%" justifyContent="space-evenly" w="100%" paddingLeft="1rem">
            <Text as="small" letterSpacing={0.5} fontWeight={600}>
              {job.company}
            </Text>
            <Text as="h3" fontSize="1.3rem" fontWeight={400}>
              {job.position}
            </Text>
            <Stack direction={{ base: "column", md: "row" }} alignItems={{ base: "flex-start", md: "center" }} justifyContent="space-between">
              <BadgeUI>{job.type}</BadgeUI>
              <Stack direction="row" color="brand.placeholder">
                <Stack direction="row" alignItems="center">
                  <Icon as={MdLanguage} />
                  <Box as="span">{job.location}</Box>
                </Stack>
                <Stack direction="row" alignItems="center">
                  <Icon as={MdSchedule} />
                  <Box as="span">{new Date().toLocaleDateString("en-us", { month: "short", day: "numeric" })}</Box>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </MotionBoxes>
    </>
  );
};

export default Card;
