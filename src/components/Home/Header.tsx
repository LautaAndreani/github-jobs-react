import { Stack, Input, InputGroup, InputLeftElement, Button, Image } from "@chakra-ui/react";
import { MdWorkOutline } from "react-icons/md";
import { HeaderTypes } from "../../types";
import background from "../../assets/bg.png";

export default function Header({ searchFilter }: HeaderTypes) {
  return (
    <Stack direction="column">
      <Stack position="relative" bgImage={background} bgPosition="center" bgSize="cover" borderRadius="md">
        <Stack margin="3rem auto" direction="row" bg="brand.bg" minH="3rem" width="60%" alignItems="center" padding="30px 10px" borderRadius="md">
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<MdWorkOutline />} color="brand.placeholder" />
            <Input variant="outline" type="text" placeholder="Title, companies, expertise or benefits" _placeholder={{ color: "brand.placeholder" }} onChange={(e) => searchFilter(e.target.value)} />
          </InputGroup>
          <Button color="white" colorScheme="blue" fontWeight={500} padding="12px 40px" size="2xl">
            Search
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
