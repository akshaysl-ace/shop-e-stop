import { Col, Container, Row } from 'react-bootstrap';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <p>Shop-e-Stop &copy; {currentYear} All Rights Reserved </p>
            <p>Developed by - Akshay SL</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
