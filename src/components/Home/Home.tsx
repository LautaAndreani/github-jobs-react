import { Filter, Header, Jobs } from "..";
import MotionBoxes from "../MotionBox";

import { Box, Grid, GridItem, Center } from "@chakra-ui/react";

const Home = ({ jobs, cards, setCards }: any) => {
  //Filter by modality
  const filterType = (modality: string) => {
    if (modality.length === 1 || modality === "") return setCards(jobs);
    setCards(cards.filter((job: any) => job.type === modality));
  };
  //Filter by keyword
  const searchFilter = (value: string) => {
    if (value === "") return setCards(jobs);
    setCards(jobs.filter((card: any) => card.position.toLowerCase().includes(value.toLowerCase()) || card.company.toLowerCase().includes(value.toLowerCase())));
  };
  return (
    <Box width="90%" margin="0 auto" p={10}>
      <Header searchFilter={searchFilter} />
      <MotionBoxes>
        <Grid templateColumns={{ md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }}>
          <GridItem colStart={1}>
            <Filter jobs={jobs} filterType={filterType} />
          </GridItem>
          <GridItem colSpan={2}>{cards.length === 0 ? <Center mt="2rem">No results found</Center> : <Jobs jobs={cards} />}</GridItem>
        </Grid>
      </MotionBoxes>
    </Box>
  );
};

export default Home;
