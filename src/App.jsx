import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading } from './core/redux/loaderSlice'; // Adjust the import path as necessary
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './core/redux/index';
import Modal from './core/utilities/Modal';
import Loading from './core/utilities/Loading';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import Router from "./core/router/Router";

function App() {
  const { isOpen } = useSelector((state) => state.modal);
  const { isLoading } = useSelector((state) => state.loader);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
          <RouterProvider router={Router} />
          {isOpen && <Modal />}
          {isLoading && <Loading />} 
    </>
  );
}

export default App;
