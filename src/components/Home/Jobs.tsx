import { Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Props } from "../../types";
import Card from "./Card";
import Paginator from "./Paginator";

export default function Jobs({ jobs }: Props) {
  const [indexPaginator, setIndexPaginator] = useState<number>(0);
  const [paginator, setPaginator] = useState<number>(6);
  //Paginator
  const handleMoreJobs = () => {
    setPaginator((prev) => prev + 6);
    setIndexPaginator((prev) => prev + 6);
  };
  const handleLessJobs = () => {
    setPaginator((prev) => prev - 6);
    setIndexPaginator((prev) => prev - 6);
  };
  return (
    <>
      <Stack direction="column" spacing={-2}>
        {jobs.slice(indexPaginator, paginator).map((job) => (
          <Link key={job._id} to={`/${job.company}/${job._id}`}>
            <Card job={job} />
          </Link>
        ))}
        <Paginator handleMoreJobs={handleMoreJobs} handleLessJobs={handleLessJobs} indexPaginator={indexPaginator} />
      </Stack>
    </>
  );
}
