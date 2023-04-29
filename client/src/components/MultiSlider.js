/* eslint-disable */
import React from 'react'

import Carousel from 'better-react-carousel';
import EventCard from './EventCard';
import StoryCard from './StoryCard';

export default function MultiSlider({items,count,event}) {
  return (
    <Carousel cols={count} rows={1} gap={20} loop={true} autoplay={5000}>
      {items.map((item, _index) => (
          <Carousel.Item key={_index}>
            {event && <EventCard event={item} />}
            {!event && <StoryCard story={item} />}
          </Carousel.Item>
      ))}
    </Carousel>
  )
}
