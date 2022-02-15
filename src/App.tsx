import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";

type Repository = {
  full_name: string;
  description: string;
};

function App() {

  const { data: repositories, isFetching } = useFetch<Repository[]>("users/diego3g/repos");	

  return (
    <ul>
      { isFetching && <p>Loading...</p> }
      {repositories?.map((repo) => (
        <li key={repo.full_name}>
          {" "}
          <strong>{repo.full_name}</strong> - {repo.description}{" "}
        </li>
      ))}
    </ul>
  );
}

export default App;
