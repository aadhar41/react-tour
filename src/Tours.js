import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
  if (tours.length != 0) {
    return (
      <section>
        <div className="title">
          <h2>our tours</h2>
          <div className="underline"></div>
        </div>
        <div>
          {tours.map((tour) => {
            const { id } = tour;
            return <Tour key={id} tour={tour} removeTour={removeTour} />;
          })}
        </div>
      </section>
    );
  }
};

export default Tours;
