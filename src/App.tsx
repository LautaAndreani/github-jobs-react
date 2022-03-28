import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";

import { Job } from "./types";
import Home from "./components/Home/Home";
import JobDescription from "./components/JobDescription/JobDescription";
import api from "./api";
import Title from "./components/Title";

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [cards, setCards] = useState<Job[]>([]);

  useEffect(() => {
    api.list().then((res) => {
      setJobs(res);
      setCards(res);
    });
  }, []);
  return (
    <>
      <Title />
      <Routes>
        <Route path="/" element={<Home jobs={jobs} cards={cards} setCards={setCards} />} />
        <Route path="/:company/:id" element={<JobDescription jobs={jobs} />} />
      </Routes>
    </>
  );
}

export default App;
