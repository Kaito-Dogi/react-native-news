import { Article } from '../../models/Article';

export type NewsApiResponse = {
  status: string;
  totalResults: number;
  articles: Article[];
};
