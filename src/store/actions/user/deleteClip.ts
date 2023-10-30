import { Action } from "./Action";

type Payload = {
  clip: string;
};

type DeleteClipAction = {
  type: Extract<Action, "DELETE_CLIP">;
  payload: Payload;
};

/**
 * @package
 */
export const deleteClip = ({ clip }: Payload): DeleteClipAction => {
  return {
    type: "DELETE_CLIP",
    payload: { clip },
  };
};
