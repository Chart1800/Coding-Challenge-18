// U94741303

import React, { useState } from 'react';

const App = () => {
  return (
    <div>
      <h1>Disney Movie Ratings </h1>
      <RateMovieButton movieTitle="Mulan" />
      <RateMovieButton movieTitle="Cars" />
      <RateMovieButton movieTitle="Toy Story" />
      <RateMovieButton movieTitle="Finding Nemo" />
      <RateMovieButton movieTitle="The Little Mermaid" />
    </div>
  );
};

const RateMovieButton = ({ movieTitle }) => {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmitRating = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  return (
    <div style={{ marginBottom: '30px', marginTop: '30px' }}>
      <h3>Ratings {movieTitle}:</h3>
      <div>
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            onClick={() => handleRatingChange(value)}
            style={{ backgroundColor: rating >= value ? 'Platinum' : 'Bronze', margin: '10px' }}
          >
            {value} Star{value !== 1 && 'Star'}
          </button>
        ))}
      </div>
      <button onClick={handleSubmitRating} style={{ marginBottom: '30px', marginTop: '30px' }}>
        Submit Rating
      </button>
      {submitted && <p style={{ marginTop: '18px', color: 'yellow' }}>Your rating has been submitted!</p>}
    </div>
  );
};
