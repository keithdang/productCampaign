import React from "react";
import _ from "lodash";
import { Carousel } from "react-bootstrap";
export function singleVertical(item) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="card-content">
        <div className="card-title">{item.name}</div>
        <p>{item.price}</p>
        <p>{item.description}</p>
      </div>
    </div>
  );
}
export function singleVertical2(item) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={item.image} alt={item.name} />
        <span className="card-title" style={{ color: "black" }}>
          {item.name}
        </span>
      </div>
      <div className="card-content">
        <p>{item.price}</p>
        <p>{item.description}</p>
      </div>
    </div>
  );
}
export function multipleVertical(item) {
  var carouselItem = _.map(item, product => {
    return (
      <Carousel.Item key={product.name}>
        <div>
          <div className="card carouselCard">
            <div className="card-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="card-content">
              <div className="card-title">{product.name}</div>
              <p>{product.price}</p>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </Carousel.Item>
    );
  });
  return (
    <Carousel className="productCarousel" interval={null}>
      {carouselItem}
    </Carousel>
  );
}
export function multipleVertical2(item) {
  var carouselItem = _.map(item, product => {
    return (
      <Carousel.Item key={product.name}>
        <div>
          <div className="card carouselCard">
            <div className="card-image">
              <img src={product.image} alt={product.name} />
              <span className="card-title" style={{ color: "black" }}>
                {product.name}
              </span>
            </div>
            <div className="card-content">
              <p>{product.price}</p>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </Carousel.Item>
    );
  });
  return (
    <Carousel className="productCarousel" interval={null}>
      {carouselItem}
    </Carousel>
  );
}
