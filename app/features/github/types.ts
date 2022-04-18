export interface IUser {
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string;
}

export interface IRepo {
  id: number;
  full_name: string;
  name: string;
  stargazers_count: number;
  html_url: string;
  language: string;
}

export interface ILoaderData {
  user: IUser;
  repos: Array<IRepo>;
}
