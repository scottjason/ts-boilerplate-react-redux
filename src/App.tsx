import * as React from 'react';
import { Loader } from './features/loader/Loader';
const Modal = React.lazy(() => import('./features/modal/Modal'));
const Todos = React.lazy(() => import('./features/todos/Todos'));
const Navbar = React.lazy(() => import('./features/navbar/Navbar'));

const App: React.FC = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Navbar />
      <Modal />
      <Todos />
    </React.Suspense>
  );
};

export default App;
