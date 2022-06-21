import * as React from 'react';
import styles from './Modal.module.css';
import { AddTodo } from '../todos/components/AddTodo';
import { isOpen, toggleModal } from '../modal/modalSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectTodos } from '../todos/todosSlice';
import { resetEdit } from '../todos/todosSlice';
import { useIsClickOutside } from '.././../hooks/useClickOutside';

const Modal = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector(isOpen);
  const { todos } = useAppSelector(selectTodos);
  const { ref, isClickOutside, setisClickOutside } = useIsClickOutside(false);

  React.useEffect(() => {
    const isEditing = todos.find((todo: Todo) => todo.isEditing === true);
    if (isEditing) {
      dispatch(toggleModal());
      const targetTodo: Todo = todos.find(
        (todo: Todo) => todo.isEditing === true
      );
      console.log('Edit Target Todo', targetTodo);
    }
  }, [todos]);

  React.useEffect(() => {
    if (isModalOpen && isClickOutside) {
      setisClickOutside(false);
      dispatch(resetEdit());
      dispatch(toggleModal());
    }
  }, [isClickOutside]);

  return (
    <React.Fragment>
      {isModalOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <div ref={ref}>
              <AddTodo />
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Modal;
