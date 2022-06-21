import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { toggleModal } from '../../modal/modalSlice';

export const Header = ({ hasTodos }: { hasTodos: boolean }): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <React.Fragment>
      {!hasTodos && (
        <div className={styles.container}>
          <header>
            <h1 className={styles.header}>
              React, Redux, Typescript Boilerplate
            </h1>
          </header>
          <div className={styles.line}></div>
          <main>
            <h3 className={styles.subheader}>
              You have no open tasks,{' '}
              <span onClick={() => dispatch(toggleModal())}>
                create a task.
              </span>
            </h3>
          </main>
        </div>
      )}
    </React.Fragment>
  );
};

Header.propTypes = {
  hasTodos: PropTypes.bool.isRequired,
};
