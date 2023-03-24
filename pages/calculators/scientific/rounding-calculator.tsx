// components/RoundingCalculator.tsx
import React, { useState } from "react";
import Layout from "../../../components/Layout";

const RoundingCalculator: React.FC = () => {
  const [number, setNumber] = useState("");
  const [decimalPlaces, setDecimalPlaces] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const roundedNumber = parseFloat(number).toFixed(parseInt(decimalPlaces));
    setResult(roundedNumber);
  };

  return (
    <Layout>
      <div className='bg-white shadow rounded-lg p-8'>
        <h2 className='text-2xl font-bold mb-4'>Rounding Numbers Calculator</h2>
        <form onSubmit={handleSubmit} className='mb-4'>
          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2'>Number:</label>
            <input
              type='number'
              className='border border-gray-300 rounded-md w-full p-2'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2'>
              Decimal Places:
            </label>
            <input
              type='number'
              className='border border-gray-300 rounded-md w-full p-2'
              value={decimalPlaces}
              onChange={(e) => setDecimalPlaces(e.target.value)}
              min='0'
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
            <h3 className='text-xl font-bold mb-2'>Rounded Number:</h3>
            <pre className='bg-gray-100 p-4 rounded'>{result}</pre>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default RoundingCalculator;
