import { Article } from "src/models/Article";

type Actions = "ADD_CLIP" | "DELETE_CLIP";

type Payload = {
  clip: Article;
};

/**
 * @package
 */
export type UserAction = {
  type: Actions;
  payload: Payload;
};
