/* eslint-disable */
import React from 'react'

import Carousel from 'better-react-carousel';
import EventCard from './EventCard';
import StoryCard from './StoryCard';
import TestimonialCard from './TestimonialCard';

export default function MultiSlider({items,count,event,testimonial}) {
    
  return (
    <Carousel cols={count} rows={1} gap={20} loop={true} autoplay={5000}>
      {items.map((item, _index) => (
          <Carousel.Item key={_index}>
            {event && !testimonial && <EventCard event={item} />}
            {!event && !testimonial && <StoryCard story={item} ind={_index} />}
            {testimonial && !event && <TestimonialCard testimonial={item}/>}
          </Carousel.Item>
      ))}
    </Carousel>
  )
}
