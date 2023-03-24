// components/CompoundInterestCalculator.tsx
import React, { useState } from "react";
import Layout from "../../../components/Layout";

const CompoundInterestCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [years, setYears] = useState("");
  const [compoundsPerYear, setCompoundsPerYear] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 100;
    const t = parseFloat(years);
    const n = parseFloat(compoundsPerYear);

    if (isNaN(p) || isNaN(r) || isNaN(t) || isNaN(n)) {
      setResult(null);
      return;
    }

    const futureValue = p * Math.pow(1 + r / n, n * t);
    setResult(futureValue);
  };

  return (
    <Layout>
      <div className='bg-white shadow rounded-lg p-8'>
        <h2 className='text-2xl font-bold mb-4'>
          Compound Interest Calculator
        </h2>
        <form onSubmit={handleSubmit} className='mb-4'>
          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2'>
              Initial Principal ($):
            </label>
            <input
              type='number'
              placeholder='Enter principal'
              className='border border-gray-300 rounded-md w-full p-2'
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2'>
              Annual Interest Rate (%):
            </label>
            <input
              type='number'
              placeholder='Enter interest rate'
              className='border border-gray-300 rounded-md w-full p-2'
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2'>Years:</label>
            <input
              type='number'
              placeholder='Enter number of years'
              className='border border-gray-300 rounded-md w-full p-2'
              value={years}
              onChange={(e) => setYears(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2'>
              Compounds Per Year:
            </label>
            <input
              type='number'
              placeholder='Enter compounds per year'
              className='border border-gray-300 rounded-md w-full p-2'
              value={compoundsPerYear}
              onChange={(e) => setCompoundsPerYear(e.target.value)}
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
            <h3 className='text-xl font-bold mb-2'>Future Value:</h3>
            <pre className='bg-gray-100 p-4 rounded'>${result.toFixed(2)}</pre>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CompoundInterestCalculator;
