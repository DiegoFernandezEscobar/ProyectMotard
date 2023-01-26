import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./ItemList.css"
import Card from '../Card/Card';


const ItemList = ({titulo}) => {
  return ( 
    <div className='ItemListContainer'>
      <h1>{titulo}</h1>        
      <Row md={4}>
        <Col>
        <Card/>
        </Col>
        <Col xs={4}>
        <Card/>
        </Col>
        <Col>
        <Card/>
        </Col>
      </Row>
    </div> 
  
  )
}

export default ItemList