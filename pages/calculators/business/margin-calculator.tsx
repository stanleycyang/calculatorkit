// components/MarginCalculator.tsx
import React, { useState } from "react";
import Layout from "../../../components/Layout";

type Results = {
  grossMargin: string;
  markup: string;
  grossProfit: string;
};

const MarginCalculator: React.FC = () => {
  const [cost, setCost] = useState("");
  const [price, setPrice] = useState("");
  const [result, setResult] = useState<Results | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const costNum = parseFloat(cost);
    const priceNum = parseFloat(price);
    const grossProfit = priceNum - costNum;
    const grossMargin = (grossProfit / priceNum) * 100;
    const markup = (grossProfit / costNum) * 100;

    setResult({
      grossMargin: `${grossMargin.toFixed(2)}%`,
      markup: `${markup.toFixed(2)}%`,
      grossProfit: `$${grossProfit.toFixed(2)}`,
    });
  };

  return (
    <Layout>
      <div className='bg-white shadow rounded-lg p-8'>
        <h2 className='text-2xl font-bold mb-4'>Margin Calculator</h2>
        <form onSubmit={handleSubmit} className='mb-4'>
          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2'>Cost:</label>
            <input
              type='number'
              className='border border-gray-300 rounded-md w-full p-2'
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2'>Price:</label>
            <input
              type='number'
              className='border border-gray-300 rounded-md w-full p-2'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
          >
            Calculate
          </button>
        </form>
        {result !== null && (
          <div>
            <h3 className='text-xl font-bold mb-2'>Results:</h3>
            <pre className='bg-gray-100 p-4 rounded'>
              <p>Gross Margin: {result.grossMargin}</p>
              <p>Markup: {result.markup}</p>
              <p>Gross Profit: {result.grossProfit}</p>
            </pre>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MarginCalculator;
