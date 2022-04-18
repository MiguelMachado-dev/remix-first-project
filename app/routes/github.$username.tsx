import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";

import type { ILoaderData } from "~/features/github";
import { api, GithubContainer } from "~/features/github";

export const loader: LoaderFunction = async ({ params }) => {
  return {
    user: await api.getGithubUser(params.username),
    repos: await api.getUserRepos(params.username)
  };
};

export function ErrorBoundary() {
  return <h3>Whoops! 💣</h3>
}

export default function () {
  const { user, repos } = useLoaderData<ILoaderData>();

  return <GithubContainer user={user} repos={repos} />;
}
