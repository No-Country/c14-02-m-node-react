import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LiaBedSolid } from "react-icons/lia";

function IvpSlider() {

  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 500,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ]
  };
 
  return (
    <div className='mx-5'>
      <Slider {...settings}>

          <div className='p-3 border-solid border-2 rounded-lg border-stone-300'>
            <LiaBedSolid size={30}/>
            <h3 className='font-semibold'>Dormitorio 1</h3>
            <p>x cama xx</p>
          </div>

          <div className='p-3 border-solid border-2 rounded-lg border-stone-300 '>
            <LiaBedSolid size={30}/>
            <h3 className='font-semibold'>Dormitorio 2</h3>
            <p>x cama xx</p>
          </div>

          <div className='p-3 border-solid border-2 rounded-lg border-stone-300 '>
            <LiaBedSolid size={30}/>
            <h3 className='font-semibold'>Dormitorio 3</h3>
            <p>x cama xx</p>
          </div>

          <div className='p-3 border-solid border-2 rounded-lg border-stone-300 '>
            <LiaBedSolid size={30}/>
            <h3 className='font-semibold'>Dormitorio 4</h3>
            <p>x cama xx</p>
          </div>

          <div className='p-3 border-solid border-2 rounded-lg border-stone-300 '>
            <LiaBedSolid size={30}/>
            <h3 className='font-semibold'>Dormitorio 5</h3>
            <p>x cama xx</p>
          </div>
          
        </Slider>
    </div>
  )
}

export default IvpSlider