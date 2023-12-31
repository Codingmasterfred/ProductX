// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardF(props){

    function onCardClick(){
        console.log(props.arr)
        props.setSelectedCard(props.arr)
        props.setShow(true)  
    }

    return ( 
    
    <Card  style={{ flex:"1",minWidth:"300px", height:"330px", justifyContent:"center"  }} onClick={onCardClick}>
    <p>{props.index}</p>
  <Card.Img variant="top" src={props.arr.Image} style={{height:"40%",objectFit:"contain"}}/>
  <Card.Body>
  <Card.Title>
  {props.arr.Title.length > 30 ? props.arr.Title.slice(0, 40) + '...' : props.arr.Title}
</Card.Title>
    <Card.Text>
        ${props.arr.Price}
    { props.arr.amountInStock < 2 && 
    <Card.Text>
        There are only {props.arr.amountInStock} left in stock
    </Card.Text>
    }
    </Card.Text>
        
    {/* <Button variant="primary">Description</Button> */}
  </Card.Body>
</Card>
)
}
export default CardF