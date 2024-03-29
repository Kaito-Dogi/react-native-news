import { UserAction } from "src/store/actions/user";

import { UserState } from "./UserState";

const initialState: UserState = {
  clips: [],
};

/**
 * @package
 */
export const userReducer = (
  state: UserState = initialState,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case "ADD_CLIP": {
      const clip = action.payload.clip;

      // 既にクリップされている場合は元の state を返す
      return state.clips.includes(clip)
        ? state
        : {
            ...state,
            clips: [...state.clips, action.payload.clip],
          };
    }
    case "DELETE_CLIP":
      return {
        ...state,
        clips: state.clips.filter(
          (clip) => clip.url !== action.payload.clip.url,
        ),
      };
    default:
      return state;
  }
};
