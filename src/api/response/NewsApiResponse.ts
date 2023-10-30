import { Article } from "src/models/Article";

export type NewsApiResponse = {
  status: string;
  totalResults: number;
  articles: Article[];
};
