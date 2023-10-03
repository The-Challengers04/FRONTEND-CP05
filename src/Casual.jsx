import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./css/casual.css";
function Casual() {
  return (
    <>
      <ListGroup as="ul">
        <ListGroup.Item as="li" active>
          Cras justo odio
        </ListGroup.Item>
        <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item as="li" disabled>
          Morbi leo risus
        </ListGroup.Item>
        <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>
      <div className="card_container">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src=".../sapato-casual01img-1.jpg/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>

      <Container fluid>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>

      <Container fluid="md">
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </>
  );
}
export default Casual;


// Importando carrossel do bootstrap
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

// Importando imagens
import img1 from './assets/casual/roupacasual1.jpg'
import img2 from './assets/casual/roupacasual2.jpg'
import img3 from './assets/casual/roupacasual3.jpg'
import img4 from './assets/casual/roupacasual4.jpg'
import img5 from './assets/casual/roupacasual5.jpg'

const PageTitle = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #878787;
  margin-bottom: 2em;
  margin-top: 3em;
`;

const CarouselContainer = styled(Carousel)`
  max-width: 600px;
  max-height: auto;
  margin: 1 auto;
`;

const StyledImage = styled.img`
  width: 500px;
  height: auto; 
`;

const Casual () => {
  return (
    <div className='CasualPage'>
      <PageTitle>Roupas Casuais</PageTitle>
      <CarouselContainer>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <StyledImage src={img1} alt="Item 1" />
          </Carousel.Item>
          <Carousel.Item>
            <StyledImage src={img2} alt="Item 2" />
          </Carousel.Item>
          <Carousel.Item>
            <StyledImage src={img3} alt="Item 3" />
          </Carousel.Item>
          <Carousel.Item>
            <StyledImage src={img4} alt="Item 4" />
          </Carousel.Item>
          <Carousel.Item>
            <StyledImage src={img5} alt="Item 5" />
          </Carousel.Item>
        </Carousel>
      </CarouselContainer>
    </div>
  );
}

export default Casual;