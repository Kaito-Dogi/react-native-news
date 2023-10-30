import { Action } from "./Action";

type Payload = {
  clip: string;
};

type AddClipAction = {
  type: Extract<Action, "ADD_CLIP">;
  payload: Payload;
};

/**
 * @package
 */
export const addClip = ({ clip }: Payload): AddClipAction => {
  return {
    type: "ADD_CLIP",
    payload: { clip },
  };
};
