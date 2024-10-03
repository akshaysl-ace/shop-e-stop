import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { useSelector } from 'react-redux';

function Header() {
  const { cartItems } = useSelector(state => state.cart);
  const itemsCount = Number(
    cartItems.reduce((acc, item) => acc + Number(item.qty), 0),
  );

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img src={logo} alt='Logo' />
              Shop-e-Stop
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse>
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <FaShoppingCart />
                  Cart
                  {itemsCount > 0 && (
                    <Badge bg='info' pill>
                      {' '}
                      {itemsCount}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <FaUser />
                  Sign-In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
