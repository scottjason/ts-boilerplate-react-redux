import * as React from 'react';
import dateFormat from 'dateformat';
import { HiPlusCircle } from '@react-icons/all-files/hi/HiPlusCircle';
import styles from './Navbar.module.css';
import { toggleModal } from '../modal/modalSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectTodos, deleteAllTodos } from '../todos/todosSlice';

const Navbar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector(selectTodos);
  const onToggleModal = () => dispatch(toggleModal());

  const renderDisplayDate = (): string => {
    const today = Date.now();
    return dateFormat(today, 'mmmm dS');
  };

  const onDeleteAllTodos = () => dispatch(deleteAllTodos());

  const renderClearTasks = (): string | undefined => {
    return todos.length === 0 ? undefined : 'CLEAR ALL';
  };

  return (
    <nav className={styles.container}>
      <time>{renderDisplayDate()}</time>
      <h2 className={styles.count}>
        {todos.length === 1
          ? `${todos.length} OPEN TASK`
          : `${todos.length} OPEN TASKS`}
        <span onClick={onDeleteAllTodos}>{renderClearTasks()}</span>
      </h2>
      <div className={styles.iconWrap}>
        <HiPlusCircle onClick={onToggleModal} className={styles.icon} />
      </div>
    </nav>
  );
};

export default Navbar;
