import React, {Fragment} from 'react'
import { Carousel } from 'react-bootstrap';
import { banner } from "../../data";

const Slider = () => {
  return (
    <Fragment>
      <Carousel>   
        {banner && banner.map((banner) => {
          return(
            <Carousel.Item key={banner.id}>
              <img       
                className="img-bg d-block w-100"
                src={banner.img} 
                alt={banner.title}
              />
            </Carousel.Item>
          )
        })} 
     </Carousel> 
    </Fragment>
  )
}

export default Slider;