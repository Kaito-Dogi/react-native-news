import { Article } from "src/models/Article";

import { UserAction } from "./UserAction";

/**
 * @package
 */
export const deleteClip = (clip: Article): UserAction => {
  return {
    type: "DELETE_CLIP",
    payload: { clip },
  };
};
