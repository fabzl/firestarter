import { combineReducers } from 'redux';

import videoReducer from './videoReducer';
import dataReducer from './dataReducer';

export default combineReducers({
  video: videoReducer,
  data: dataReducer
});
