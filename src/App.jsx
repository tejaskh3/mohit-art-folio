import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider
} from 'react-router-dom';
import './App.css';
import NavbarComponent from './component/Narvbar';
import Home from './pages/Home';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <NavbarComponent />
          <Outlet />
        </>
      ),
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
    }
  ]);
  return (
    <>
      {/* <StoreProvider> */}
      <RouterProvider router={router} />

      {/* </StoreProvider> */}
    </>
  );
}

export default App;
