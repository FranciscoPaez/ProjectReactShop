import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import './Item.css'

function Item({ prod }) {
  return (
    <div className='Card'>
    <Card style={{ width: '22rem'}}>
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text className='PriceItem'>${prod.price}</Card.Text>
        <Link to={`/detail/${prod.id}`} className='DetailButtom' >ver detalle</Link>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Item;