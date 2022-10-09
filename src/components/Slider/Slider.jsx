import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://flycamvn.com/wp-content/uploads/2020/04/lg1.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://flycamvn.com/wp-content/uploads/2019/06/POCKET.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://flycamvn.com/wp-content/uploads/2019/06/TRAGOP-BANNER-1.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
  {
    src: 'https://flycamvn.com/wp-content/uploads/2019/06/ACTION.jpg',
    altText: 'Slide 4',
    caption: 'Slide 4',
    key: 4,
  },
];

import './Slider.scss';

function Slider(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem className='carousel-item'
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className='carousel-item-img' />
        <CarouselCaption
        />
      </CarouselItem>
    );
  });

  return (
    <div className='container'>
      <Carousel className='carousel'
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        <CarouselIndicators className='carousel-index'
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl className='carousel-prev'
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl className='carousel-next'
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}

export default Slider;