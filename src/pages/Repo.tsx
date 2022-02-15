import { QueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { queryClient } from "../services/queryClient";
import { Repository } from "./Repos";

export function Repo() {
  const params = useParams();
  const currentRepository = params["*"] as string;
  function handleChangeRepositoryDescription() {
    // queryClient.invalidateQueries(["repos"]);
    const previousRepos = queryClient.getQueryData<Repository>("repos");

    if (previousRepos) {
      const nextRepos = previousRepos.map((repo) => {
        if (repo.full_name === currentRepository) {
          return { ...repo, description: "New description" };
        } else {
          return repo;
        }
      });
      queryClient.setQueryData("repos", nextRepos);
    }
  }

  return (
    <div>
      <h1>{currentRepository}</h1>
      <button onClick={handleChangeRepositoryDescription}>
        {" "}
        Change Description{" "}
      </button>
    </div>
  );
}
