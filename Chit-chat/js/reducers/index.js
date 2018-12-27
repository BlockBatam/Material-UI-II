import { combineReducers } from 'redux';
import currentThreadID from './currentThreadID';
import messages from './messages';
import threads from './threads';


export default combineReducers({
  currentThreadID,
  messages,
  threads
});
