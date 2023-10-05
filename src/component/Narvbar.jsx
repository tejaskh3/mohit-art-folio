import { useState, useEffect } from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
const NavbarComponent = () => {
  const [openNav, setOpenNav] = useState(false);
  const navbarBackground = openNav ? '#BEADFA' : '';
  const signUpButtonBackground = openNav ? '#000' : '';
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="h5"
        color="white"
        className="p-1 font-normal"
      >
        <Link
          to="/artwork"
          className="flex items-center"
          style={{ textDecoration: 'none' }}
        >
          Artwork
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      // className="mx-auto  py-2 px-4 lg:px-8 lg:py-4 sticky top-0 shadow shadow-white "
      // style={{ borderRadius:0 }}
      className="mx-auto min-w-full py-2 px-4 lg:px-8 lg:py-4 sticky top-0 shadow shadow-white bg-opacity-0 "
      style={{
        backgroundColor: navbarBackground,
        borderRadius: 0,
        zIndex: 1000,
        border: 'none'
      }}
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900 ">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium "
        >
          <Link to="/">
            <img src={Logo} alt={'logo'} className="h-12 mr-0" />
          </Link>
        </Typography>
        <div className="flex flex-row gap-10 text-lg">
          <div className="hidden lg:block">{navList}</div>

          <Link to="gallery">
            {' '}
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block hover:scale-105"
            >
              Gallery
            </Button>
          </Link>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}

          <Link to="gallery">
            <Button
              variant="gradient"
              size="sm"
              fullWidth
              className="mb-2 hover:scale-105 ease-in"
              style={{ backgroundColor: signUpButtonBackground }}
            >
              Gallery
            </Button>
          </Link>
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default NavbarComponent;
