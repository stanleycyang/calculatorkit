// components/StatisticsCalculator.tsx
import React, { useState } from "react";
import Layout from "../../../components/Layout";

const StatisticsCalculator: React.FC = () => {
  const [inputData, setInputData] = useState("");
  const [results, setResults] = useState<{
    mean: number | null;
    median: number | null;
    mode: number[] | null;
    range: number | null;
    min: number | null;
    max: number | null;
    count: number | null;
    sum: number | null;
    quartiles: number[] | null;
    iqr: number | null;
    outliers: number[] | null;
  }>({
    mean: null,
    median: null,
    mode: null,
    range: null,
    min: null,
    max: null,
    count: null,
    sum: null,
    quartiles: null,
    iqr: null,
    outliers: null,
  });

  const calculateStatistics = (data: number[]) => {
    const mean = data.reduce((acc, val) => acc + val, 0) / data.length;

    const sortedData = [...data].sort((a, b) => a - b);
    const mid = Math.floor(sortedData.length / 2);
    const median =
      sortedData.length % 2 !== 0
        ? sortedData[mid]
        : (sortedData[mid - 1] + sortedData[mid]) / 2;

    const modeMap = new Map<number, number>();
    let maxCount = 0;
    let mode: number[] = [];
    for (const num of data) {
      const count = (modeMap.get(num) || 0) + 1;
      modeMap.set(num, count);

      if (count > maxCount) {
        maxCount = count;
        mode = [num];
      } else if (count === maxCount) {
        mode.push(num);
      }
    }

    const range = sortedData[sortedData.length - 1] - sortedData[0];
    const min = sortedData[0];
    const max = sortedData[sortedData.length - 1];
    const count = data.length;
    const sum = data.reduce((acc, val) => acc + val, 0);

    const quartiles = [
      sortedData[Math.floor(sortedData.length / 4)],
      median,
      sortedData[Math.floor((sortedData.length * 3) / 4)],
    ];
    const iqr = quartiles[2] - quartiles[0];

    const lowerBound = quartiles[0] - 1.5 * iqr;
    const upperBound = quartiles[2] + 1.5 * iqr;
    const outliers = sortedData.filter((x) => x < lowerBound || x > upperBound);

    setResults({
      mean,
      median,
      mode,
      range,
      min,
      max,
      count,
      sum,
      quartiles,
      iqr,
      outliers,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedData = inputData
      .split(",")
      .map((x) => x.trim())
      .filter((x) => x !== "")
      .map((x) => parseFloat(x));

    if (parsedData.length > 0) {
      calculateStatistics(parsedData);
    }
  };

  return (
    <Layout title='Mean, Median, Mode Calculator'>
      <div className='bg-white shadow rounded-lg p-8'>
        <h2 className='text-2xl font-bold mb-4'>
          Mean, Median, Mode Calculator
        </h2>
        <form onSubmit={handleSubmit} className='mb-4'>
          <label htmlFor='data' className='block mb-2 font-bold'>
            Enter comma-separated numbers:
          </label>
          <textarea
            id='data'
            className='w-full h-32 p-2 border border-gray-300 rounded-md mb-4 resize-none'
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          ></textarea>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
          >
            Calculate
          </button>
        </form>
        {/* Display results */}
        <div className='mt-8'>
          {results.mean !== null && (
            <div>
              <div>
                <span className='font-bold'>Mean</span>:{" "}
                {results.mean.toFixed(2)}
              </div>
              <div>
                <span className='font-bold'>Median</span>:{" "}
                {results.median.toFixed(2)}
              </div>
              <div>
                <span className='font-bold'>Mode</span>:{" "}
                {results.mode.join(", ")}
              </div>
              <div>Range: {results.range}</div>
              <div>Minimum: {results.min}</div>
              <div>Maximum: {results.max}</div>
              <div>Count: {results.count}</div>
              <div>Sum: {results.sum}</div>
              <div>
                Quartiles:{" "}
                {results.quartiles.map((x) => x.toFixed(2)).join(", ")}
              </div>
              <div>Interquartile Range (IQR): {results.iqr.toFixed(2)}</div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default StatisticsCalculator;
