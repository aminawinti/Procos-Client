import { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { Store } from '../Store';
import SearchBox from '../components/SearchBox';
import cpLogo from '../assets/cp_logo.svg';
import user from '../assets/icons/user.svg';
import cartIcon from '../assets/icons/cart.svg';
import jaFlag from '../assets/icons/ja.svg';
import ukFlag from '../assets/icons/uk.svg';
import { useTranslation, Trans } from 'react-i18next';
import Navbar from 'react-bootstrap/Navbar';

import { debounce } from '../utils';

const userIcon = () => {
  return (
    <span className="user-icon">
      <img loading="lazy" src={user} width="20" height="auto" alt="user"></img>
    </span>
  );
};

const lngs = {
  en: { nativeName: 'English' },
  ja: { nativeName: 'Japanese' },
};

const MainNavbar = () => {
  const { t, i18n } = useTranslation();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    ctxDispatch({ type: 'CART_CLEAR' });
    localStorage.removeItem('cartItems');

    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    window.location.href = '/login';
  };

  const navbarStyles = {
    position: 'fixed',
    width: '100%',
    backgroundColor: 'transparent',
    transition: 'top 0.4s',
    zIndex: '9999',
  };

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div style={{ ...navbarStyles, top: visible ? '0' : '-60px' }}>
      <Navbar collapseOnSelect className="main-navbar" expand="lg">
        <Container className="main-navbar-container">
          {/* Brand - Logo */}
          <LinkContainer to="/">
            <Navbar.Brand className="link-brand">
              <img src={cpLogo} width="40" height="auto" alt="cp logo"></img>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* main links + searchbox */}
          <Navbar.Collapse className="collapsed-navbar" id="basic-navbar-nav">
            <Nav className="main-links-navbar">
              <Nav.Item>
                <Nav.Link
                  eventKey="2"
                  as={Link}
                  to="/about"
                  id="main__navbar-item"
                >
                  {t('navbar.about')}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="3"
                  as={Link}
                  to="/idea"
                  id="main__navbar-item"
                >
                  {t('navbar.idea')}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="4"
                  as={Link}
                  to="/contact"
                  id="main__navbar-item"
                >
                  {t('navbar.contact')}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="5"
                  as={Link}
                  to="/services"
                  id="main__navbar-item--services"
                >
                  {t('navbar.services')}
                  <span className="unselectable unselectable-services-sticker">
                    {t('navbar.new')}
                  </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <SearchBox />
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>

          {/* user */}
          {userInfo && userInfo.isAdmin ? (
            <NavDropdown
              title={userIcon()}
              id="basic-nav-dropdown"
              className="user-nav"
            >
              <LinkContainer to="/orderhistory">
                <NavDropdown.Item>My Orders</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/admin/products">
                <NavDropdown.Item>All Products</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/admin/orders">
                <NavDropdown.Item>All Orders</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/admin/users">
                <NavDropdown.Item>All Users</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/admin/dashboard">
                <NavDropdown.Item>Dashboard</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <Link
                className="dropdown-item"
                to="#signout"
                onClick={signoutHandler}
              >
                Sign Out
              </Link>
            </NavDropdown>
          ) : userInfo && !userInfo.isAdmin ? (
            <NavDropdown
              title={userIcon()}
              id="basic-nav-dropdown"
              className="user-nav"
            >
              <LinkContainer to="/orderhistory">
                <NavDropdown.Item>My Orders</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <Nav.Link
                className="dropdown-item"
                to="#signout"
                onClick={signoutHandler}
              >
                Sign Out
              </Nav.Link>
            </NavDropdown>
          ) : (
            <Link
              className="user-nav nav-link"
              id="sign-in-nav-link"
              to="/login"
              title="user"
            >
              {userIcon()}
            </Link>
          )}

          {/* cart */}
          <Nav.Item className="cart-nav">
            <Nav.Link
              eventKey="1"
              as={Link}
              to="/cart"
              className="nav-link"
              title="Cart"
            >
              <span className="cart-icon">
                <img src={cartIcon} alt="cart"></img>
                {cart.cartItems.length > 0 && (
                  <span className="icon-button__badge">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </span>
                )}
              </span>
            </Nav.Link>
          </Nav.Item>

          {/* language options */}
          <NavDropdown
            id="language-nav-dropdown"
            align="end"
            title={
              <img
                className="nav__dropdown-img"
                src={i18n.resolvedLanguage === 'en' ? ukFlag : jaFlag}
                alt="flag not found"
              />
            }
          >
            {Object.keys(lngs).map((lng) => (
              <NavDropdown.Item id="languages">
                <button
                  key={lng}
                  className="lng-btn"
                  style={{
                    fontWeight:
                      i18n.resolvedLanguage === lng ? 'bold' : 'normal',
                    color:
                      i18n.resolvedLanguage === lng ? '#ac145a' : '#242b3b',
                  }}
                  type="submit"
                  onClick={() => {
                    i18n.changeLanguage(lng);
                  }}
                >
                  <div className="d-flex">
                    <div className={lng === 'en' ? 'uk-flag' : 'ja-flag'}></div>
                    {lngs[lng].nativeName}
                  </div>
                </button>
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Container>
      </Navbar>{' '}
    </div>
  );
};

export default MainNavbar;
