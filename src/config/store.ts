import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice';
import modalReducer from '../features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
