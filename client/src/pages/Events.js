import React, { forwardRef } from "react";

const Events = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <div className="flex flex-row mt-24 mb-24 w-[80%] m-auto">
        <h1 className="text-5xl font-semibold text-[#2C3734]">Events</h1>
    </div>
    </section>
  );
});

export default Events;