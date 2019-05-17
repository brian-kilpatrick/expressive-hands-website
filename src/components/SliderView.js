import React from 'react';
import './slider.scss';
import ReactSlick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img from 'gatsby-image';

const SliderView = ({images: { slider}}) => {
  const slides = slider.images.map((data, i) => (
      <Img className="slider-img" fluid={data.img.childImageSharp.fluid} alt="Portfolio Image"/>
  ));
  return (
      <div className="slider-wrapper">
        <ReactSlick children={slides}
                    pauseOnHover={false}
                    className="home-slider"
                    autoplay={true}
                    infinite={true}/>
      </div>
  )
};

export default SliderView