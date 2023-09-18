import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  RouterProvider
} from 'react-router-dom';
import './App.css';
import NavbarComponent from './component/Narvbar';
import Home from './pages/Home';
import ArtWork from './pages/ArtWork';

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
        },
        {
          path: 'artwork',
          element: <ArtWork />
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
