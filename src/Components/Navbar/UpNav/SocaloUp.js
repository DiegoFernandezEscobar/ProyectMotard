import React from 'react'
import "./SocaloUp.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CartWidget from '../../CartWidget/CartWidget';


const SocaloUp = () => {
  return (
    <div className='contenedor-socaloUp'>
        <Container>
      <Row>
        <Col className='ColImgLogo'>
            <img src="Img/logo-motard.png" alt="logo" className="brand-logo"/>
        </Col>
        <Col> 
            <Row className='filabtnnav'>
                <Col className='colPadding'>
                    <Button variant="outline-dark">Accesorios</Button>{' '}</Col>
                <Col className='colPadding'>
                    <Button variant="outline-dark">Motos</Button>{' '}</Col>
                <Col className='colPaddingCart'>
                   <CartWidget/>
                </Col>
            </Row>
      </Col>
        <Col>
            <Row className='loginabtnnav'>
            <Col className='colPadding2'>
                    <Button variant="outline-dark">Ingresar</Button>{' '}</Col>
            </Row>
        </Col>
      </Row>
     
    </Container>
    </div>
  )
}

export default SocaloUp
