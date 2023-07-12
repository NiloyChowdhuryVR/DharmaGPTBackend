import React from "react";
import Carousel from "react-multi-carousel";
import Container from "react-bootstrap/Container";
import { responsive ,carouselProps } from "./dataFiles/carouselData";

import "react-multi-carousel/lib/styles.css";
import Cards from "./Cards";

const Chat = () => {

  const cards = carouselProps.map(items => <Cards key={items.id} url={items.imgurl} title = {items.title}/>);

  return (
    <>
      <Container id="chat">
        <h2 className="text-center">
          <u>DharmaGPT Exclusive : Chat 1 on 1 with them!</u>
        </h2>
        <Carousel
          responsive={responsive}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-10-px"
          className="carouselRandom"
        >
          {cards}
        </Carousel>
        <hr />
      </Container>
    </>
  );
};

export default Chat;
