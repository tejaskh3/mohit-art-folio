import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  RouterProvider
} from 'react-router-dom';
import NavbarComponent from './component/Narvbar';
import Home from './pages/Home';
import ArtWork from './pages/ArtWork';
import Gallery from './pages/Gallery';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
const App = () => {
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
          path: 'gallery',
          element: <Gallery />
        },
        {
          path: 'artwork',
          element: <ArtWork />
        },
      ]
    },
    {
      path: 'dashboard/:password',
      element: <Dashboard />
    },
    { path: '*', element: <NotFound /> }
  ]);
  return (
    <>
      {/* <StoreProvider> */}
      <RouterProvider router={router} />

      {/* </StoreProvider> */}
    </>
  );
};

export default App;
