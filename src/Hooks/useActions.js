import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { userActions } from '@Redux/Slices/userSlice';
import { playerActions } from '@Redux/Slices/playerSlice';

const action = {
  ...userActions,
  ...playerActions,
};

export function useActions() {
  const dispatch = useDispatch();
  return bindActionCreators(action, dispatch);
}
