import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../config/store';

const initialState = {
  todos: [] as Todo[],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>): void => {
      state.todos.push(action.payload);
    },
    editTodo: (state, action: PayloadAction<Todo>): void => {
      state.todos.find((todo: Todo) => {
        if (todo.id === action.payload.id) {
          todo.isEditing = true;
        }
      });
    },
    resetEdit: (state): void => {
      state.todos.forEach(todo => {
        todo.isEditing = false;
      });
    },
    saveTodo: (_, action: PayloadAction<Todo>): void => {
      console.log('save todo', action);
    },
    deleteTodo: (state, action: PayloadAction<Todo>): void => {
      state.todos = state.todos.filter(
        (todo: Todo) => todo.id !== action.payload.id
      );
    },
    deleteAllTodos: (state): void => {
      state.todos = [];
    },
  },
});

export const {
  addTodo,
  editTodo,
  saveTodo,
  resetEdit,
  deleteTodo,
  deleteAllTodos,
} = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;
