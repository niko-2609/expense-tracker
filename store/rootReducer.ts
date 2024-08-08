import { combineReducers } from 'redux';
import {userReducer} from '@/store/features/user';

export interface RootState {
    user: ReturnType<typeof userReducer>;
    // Add other slices here
  }
  
  const rootReducer = combineReducers({
    user: userReducer,
    // Add other slices here
  });
  
  export default rootReducer;