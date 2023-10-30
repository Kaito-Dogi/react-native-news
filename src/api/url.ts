import { ENV } from "../../ENV";

export const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${ENV.NEWS_API_KEY}`;
