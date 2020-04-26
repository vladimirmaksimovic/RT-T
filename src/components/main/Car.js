import React from "react"

function Car(props) {
  return (
    <div>
      <h2>{props.car.carBrand + " " + props.car.carName}</h2>
      <img
        src={props.car.carImgUrl}
        alt='default'
        style={{ width: "250px", height: "250px" }}
      />
      <p>Year: {props.car.carYear}</p>
      <p>Price: {props.car.carPrice}</p>
    </div>
  )
}

export default Car