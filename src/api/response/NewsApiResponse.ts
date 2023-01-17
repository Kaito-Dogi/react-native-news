import { Article } from '../../types/Article';

export type NewsApiResponse = {
  status: string;
  totalResults: number;
  articles: Article[];
};
