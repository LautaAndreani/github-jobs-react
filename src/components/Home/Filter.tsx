import { Stack, Checkbox, Text, InputGroup, InputLeftElement, Input, RadioGroup, Radio, CheckboxGroup } from "@chakra-ui/react";
import { MdLanguage } from "react-icons/md";
import { FilterProps } from "../../types";

export default function Filter({ jobs, filterType }: FilterProps) {
  //remove repeated items
  // const type = [...new Set(jobs.map((typ: any) => typ.type))];
  const categories = [...new Set(jobs.map((job: any) => job.location))];

  return (
    <Stack margin="2rem 0" spacing={5} fontFamily="Poppins" position="sticky" top="10">
      <CheckboxGroup onChange={(e) => filterType(e.toString())}>
        <Checkbox borderRadius="50%" value="Full time">
          Full time
        </Checkbox>
      </CheckboxGroup>
      <Text as="h3" fontWeight="700" color="brand.placeholder">
        LOCATION
      </Text>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<MdLanguage />} color="brand.placeholder" />
        <Input
          fontSize=".9rem"
          fontFamily={"Roboto"}
          width="70%"
          bg="white"
          boxShadow="0px 2px 4px rgba(0, 0, 0, 0.05)"
          type="text"
          placeholder="City, state, zip code or country"
          _placeholder={{ color: "brand.placeholder" }}
        />
      </InputGroup>
      <RadioGroup>
        <Stack direction="column">
          {categories.map((res: any, i: number) => (
            <Radio key={i} value={res}>
              {res}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </Stack>
  );
}
