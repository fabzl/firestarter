import { PLAY_VIDEO, STOP_VIDEO } from '../types';

export const playVideo = () => {
  return {
    type: PLAY_VIDEO
  };
};

export const stopVideo = () => {
  return {
    type: STOP_VIDEO
  };
};
