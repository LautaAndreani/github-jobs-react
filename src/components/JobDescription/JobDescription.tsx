import { useParams } from "react-router";

import { Props } from "../../types";
import MotionBoxes from "../MotionBox";
import { LeftSide, RightSide } from "./index";

import { Box, Grid, GridItem } from "@chakra-ui/react";

export default function JobDescription({ jobs }: Props) {
  const params = useParams();
  const filterJob = jobs.find((job) => job._id === params.id);
  return (
    <>
      <MotionBoxes>
        <Box width="90%" margin="0 auto" p={10}>
          <Grid gap={5} templateColumns={{ md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }}>
            <GridItem colStart={1}>
              <LeftSide filterJob={filterJob} />
            </GridItem>
            <GridItem colSpan={2}>
              <RightSide filterJob={filterJob} />
            </GridItem>
          </Grid>
        </Box>
      </MotionBoxes>
    </>
  );
}
