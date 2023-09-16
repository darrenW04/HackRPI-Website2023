import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import transparentLogo from '../../../assets/logo_transparent.png';

class MapsNavBar extends React.Component {
  render() {
    return (
      <>
        <style>{`
            @media screen and (max-width: 980px) {
                .mainNav {
                    display: none;
                }
            }
        `}</style>

        <Navbar collapseOnSelect
          variant="dark"
          sticky="top"
          style={{ backgroundColor: '#191919', padding: '0.5rem' }}
        >
        <Container
          fluid
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            fontFamily: 'Poppins Light',
            fontSize: 15,
            color: 'white',
          }}
        >
          <Navbar.Brand href="#home" style={{ paddingLeft: 30 }}>
            <img
              src={transparentLogo}
              className="d-inline-block align-top"
              width="40"
              height="40"
            />
            <div
              className="d-inline-block align-top"
              style={{
                fontFamily: 'Mokoto',
                fontSize: 20,
                padding: 5,
              }}
            >
            HACKRPI VENUE MAP
            </div>
          </Navbar.Brand>

          {/* Here we will put all the locations */}
          <Nav className='mainNav' style={{ marginRight: 'auto' }}>
            <Nav.Link href="#mainhall">Main Hall</Nav.Link>
            <Nav.Link href="#workshoprooms">WorkShop Rooms</Nav.Link>
            <Nav.Link href="#sponsors">Sponsors</Nav.Link>
            <Nav.Link href="#foodarea">Food Area</Nav.Link>
            <Nav.Link href="#restrooms">Restrooms</Nav.Link>

          </Nav>

          </Container>
        </Navbar>
      </>
    );
  }
}

export default MapsNavBar;
