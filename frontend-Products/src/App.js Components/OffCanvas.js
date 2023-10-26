import Offcanvas from 'react-bootstrap/Offcanvas';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function OffCanvas(props){
    return(
        <Offcanvas show={props.showCanvas} onHide={props.handleCloseCanvas}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form onSubmit={props.Update} >
              <FloatingLabel controlId="title" label="Title" className="mb-3">
                <Form.Control type="text" value={props.CanvasTitle} onChange={(e) => props.setCanvasTitle(e.target.value)} />
              </FloatingLabel>

              <FloatingLabel controlId="description" label="Description" className="mb-3">
                <Form.Control type="text" value={props.CanvasDescription} onChange={(e) => props.setCanvasDescription(e.target.value)} />
              </FloatingLabel>

              <FloatingLabel controlId="price" label="Price" className="mb-3">
                <Form.Control type="number" value={props.CanvasPrice} onChange={(e) => props.setCanvasPrice(e.target.value)} />
              </FloatingLabel>

              <FloatingLabel controlId="image" label="Image URL" className="mb-3">
                <Form.Control type="text" value={props.CanvasImage} onChange={(e) => props.setCanvasImage(e.target.value)} />
              </FloatingLabel>

              <Button variant="primary" onClick={props.Update}>
                Submit
              </Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
    )
}
export default OffCanvas