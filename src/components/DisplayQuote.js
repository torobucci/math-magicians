import React, { useState, useEffect } from 'react';

function DisplayQuote() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const res = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=life',
          {
            method: 'GET',
            headers: {
              'X-Api-Key': 'YENRorJF9xPHyhQF0+fpmQ==U4Ukd68GHUgjfHaK',
            },
            contentType: 'application/json',
          },
        );
        const quote = await res.json();
        setData(quote);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData]);

  return (
    <>
      {hasError && <p className="error">Something went wrong.!!</p>}
      {isLoading ? (
        <p className="loading">Loading ...</p>
      ) : (
        <>
          {data.map((item) => (
            <div className="quote" key="quote">
              <h1>Quote of the Day</h1>
              <div className="message">
                <h2>Life</h2>
                <p>{item.quote}</p>
                <cite>
                  -
                  {item.author}
                </cite>
              </div>
            </div>
          ))}
        </>
      )}

    </>
  );
}

export default DisplayQuote;
