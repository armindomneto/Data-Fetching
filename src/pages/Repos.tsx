import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

export type Repository = {
  full_name: string;
  description: string;
};

export function Repos() {

  const { data, isFetching } = useQuery<Repository[]>('repos', async () => {
    const response = await axios.get('https://api.github.com/users/diego3g/repos');	
    return response.data;
  }, {
      staleTime: 1000 * 60,
  });

  return (
    <ul>
      { isFetching && <p>Loading...</p> }
      {data?.map((repo) => (
        <li key={repo.full_name}>
          {" "}
          <Link to={`repo/${repo.full_name}`}>{repo.full_name}</Link> - {repo.description}{" "}
        </li>
      ))}
    </ul>
  );
}

export default Repos;
