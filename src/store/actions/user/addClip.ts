import { Article } from "src/models/Article";
import { UserAction } from "./UserAction";

/**
 * @package
 */
export const addClip = (clip: Article): UserAction => {
  return {
    type: "ADD_CLIP",
    payload: { clip },
  };
};
