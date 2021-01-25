import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { AppThunk, RootState } from '../../state/strip.store';
import { IListState, IStripData } from '../../model/strip.model'
import { ITEMS_PER_PAGE } from '../../config/config';
import { errorHandler } from '../../utils/errorsHandler';
import { API_LIST } from '../../url/list';

const initialState: IListState = {
  value: null,
  status: 'loading',
  error: null,
  totalPages: 0,
  totalItems: 0,
};
 
export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {

    updateError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },

    updateStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },

    updateData: (state, action: PayloadAction<IStripData>) => {
      state.value = action.payload;
      state.totalPages = Math.ceil(action.payload.num / ITEMS_PER_PAGE);
      state.totalItems = action.payload.num;
    },
    
  },
});

export const {
  updateData,
  updateStatus,
  updateError,
} = listSlice.actions;

export const fetchData = (): AppThunk => dispatch => {
  dispatch(updateStatus('loading'));
    axios
      .get<IStripData>(API_LIST, {
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(response => {

        dispatch(updateData(response.data));
        dispatch(updateStatus('succeeded'));
        dispatch(updateError(''))

      }).catch(error => {

        dispatch(updateStatus('error'));
        dispatch(updateError(errorHandler(error)));

      });
  
};
 
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectStripData = (state: RootState) => state.list.value;
export const selectStripDataState = (state: RootState) => state.list.status;
export const selectStripDataError = (state: RootState) => state.list.error;
export const selectStripTotalPages = (state: RootState) => state.list.totalPages;
export const selectStripTotalItems = (state: RootState) => state.list.totalItems;

export default listSlice.reducer;
