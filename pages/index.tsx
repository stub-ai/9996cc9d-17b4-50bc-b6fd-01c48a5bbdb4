import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

const Home = () => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo')
      .then(response => response.json())
      .then(data => setStockData(data));
  }, []);

  return (
    <div className="container mx-auto">
      <Header />
      {stockData && (
        <div className="p-5">
          <h2 className="text-xl">IBM: {stockData['Global Quote']['05. price']}</h2>
        </div>
      )}
    </div>
  );
};

export default Home;