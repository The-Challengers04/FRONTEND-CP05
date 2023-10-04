

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import styled from 'styled-components';

// Importando imagens
import img1 from './assets/casual/roupacasual1.jpg'
import img2 from './assets/casual/roupacasual2.jpg'
import img3 from './assets/casual/roupacasual3.jpg'
import img4 from './assets/casual/roupacasual4.jpg'
import img5 from './assets/casual/roupacasual5.jpg'

const CarroselDiv = styled.div`
display: block;
margin: 100px;
`
const PageTitle = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #878787;
  margin-bottom: 2em;
  margin-top: 3em;
`;

export default class Masculino extends Component {
  render() {
    return (
      <div>
        <PageTitle>Casual</PageTitle>
		<CarroselDiv>
        {/* Carrossel Bootstrap */}
        <Carousel style={{ maxWidth: "900px", margin: "0 auto" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="Primeiro slide"
            />
            <Carousel.Caption>
              <h3>Primeiro Slide</h3>
              <p>Descrição do primeiro slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Segundo slide"
            />
            <Carousel.Caption>
              <h3>Segundo Slide</h3>
              <p>Descrição do segundo slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
		</CarroselDiv>
        {/* Cards de roupa Bootstrap */}
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <Card>
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Title>Roupa 1</Card.Title>
                <Card.Text>Descrição da Roupa 1.</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <Card>
              <Card.Img variant="top" src={img4} />
              <Card.Body>
                <Card.Title>Roupa 2</Card.Title>
                <Card.Text>Descrição da Roupa 2.</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <Card>
              <Card.Img variant="top" src={img5} />
              <Card.Body>
                <Card.Title>Roupa 3</Card.Title>
                <Card.Text>Descrição da Roupa 3.</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
