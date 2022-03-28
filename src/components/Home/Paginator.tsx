import { Stack, Button, Icon } from "@chakra-ui/react";
import { MdNavigateNext } from "react-icons/md";
import { PaginatorProps } from "../../types";

export default function Paginator({ handleMoreJobs, handleLessJobs, indexPaginator }: PaginatorProps) {
  return (
    <Stack direction="row" paddingTop="1.2rem" justifyContent="flex-end">
      {indexPaginator <= 0 ? (
        <Button colorScheme="blue" onClick={handleMoreJobs}>
          <Icon as={MdNavigateNext} />
        </Button>
      ) : (
        <>
          <Button colorScheme="blue" onClick={handleLessJobs}>
            <Icon as={MdNavigateNext} transform="rotate(180deg)" />
          </Button>
          {indexPaginator >= 12 ? null : (
            <Button colorScheme="blue" onClick={handleMoreJobs}>
              <Icon as={MdNavigateNext} />
            </Button>
          )}
        </>
      )}
    </Stack>
  );
}
