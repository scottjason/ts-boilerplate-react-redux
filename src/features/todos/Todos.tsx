import * as React from 'react';
import styles from './Todos.module.css';
import { selectTodos } from './todosSlice';
import { Header } from './components/Header';
import { useEscape } from '../../hooks/useEscape';
import { isOpen, toggleModal } from '../modal/modalSlice';
import { editTodo, deleteTodo } from './todosSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { AiOutlineDelete } from '@react-icons/all-files/ai/AiOutlineDelete';

const Todos = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector(isOpen);
  const { isEscapeEvent, setIsEscapeEvent } = useEscape();
  const { todos } = useAppSelector(selectTodos);

  const onEditTodo = (todo: Todo) => dispatch(editTodo(todo));
  const onDeleteTodo = (todo: Todo) => dispatch(deleteTodo(todo));

  React.useEffect(() => {
    if (isModalOpen && isEscapeEvent) {
      dispatch(toggleModal());
      setIsEscapeEvent(false);
    }
  }, [isModalOpen, isEscapeEvent]);

  return (
    <div className={styles.container}>
      <ul className={styles.grid}>
        {<Header hasTodos={todos.length > 0} />}
        {todos.map((todo: any) => {
          return (
            <React.Fragment key={todo.id}>
              <li onClick={() => onEditTodo(todo)} className={styles.card}>
                <div
                  className={styles.delete}
                  onClick={() => onDeleteTodo(todo)}
                >
                  <AiOutlineDelete />
                </div>
                {todo.text}
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
