import { PLAY_VIDEO, STOP_VIDEO } from '../types';

const initialState = {
  showVideo: false,
  scrollY: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PLAY_VIDEO:
      return { ...state, showVideo: true, scrollY: window.scrollY };
    case STOP_VIDEO:
      return initialState;
    default:
      return state;
  }
};
