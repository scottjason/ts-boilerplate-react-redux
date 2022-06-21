import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { addTodo } from '../todosSlice';
import { toggleModal } from '../../modal/modalSlice';

interface Todo {
  id: string;
  text: string;
  isEditing: boolean;
  createdAt: string;
}

export const AddTodo = (): JSX.Element => {
  const todoRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const generateTodo = (): Todo => {
    return {
      id: uuidv4(),
      text: todoRef.current.value,
      isEditing: false,
      createdAt: new Date().toISOString(),
    };
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e?.preventDefault();
    const todo = generateTodo();
    dispatch(addTodo(todo));
    dispatch(toggleModal());
  };

  return (
    <div className={styles.container}>
      <form className={styles.formWrap} onSubmit={onSubmit} noValidate>
        <input
          className={styles.input}
          ref={todoRef}
          name='text'
          autoFocus={true}
        />
        <input className={styles.button} type='submit' value='Create Task' />
      </form>
    </div>
  );
};
