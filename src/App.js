
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Browse from './components/Browse';

import {Provider} from 'react-redux';
import appStore from './utils/appStore';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import GptSearch from './components/GptSearch';
function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login/>
    },
    {
      path: '/browse',
      element: <Browse/>
    },
    {
      path: '/gptsearch',
      element: <GptSearch/>
    }
  ])

  return (
    <Provider store={appStore}>
    <RouterProvider router={appRouter}>
      <Login/>
      <Browse/>
      <GptSearch/>
    </RouterProvider>
    </Provider>
  );
}

export default App;
