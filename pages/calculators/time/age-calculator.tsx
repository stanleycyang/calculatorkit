// components/AgeCalculator.tsx
import React, { useState } from "react";
import Layout from "../../../components/Layout";

const AgeCalculator: React.FC = () => {
  const [dob, setDob] = useState("");
  const [today, setToday] = useState(new Date().toISOString().slice(0, 10));
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const dobDate = new Date(dob);
    const todayDate = new Date(today);
    const ageInMillis = todayDate.getTime() - dobDate.getTime();
    const ageInYears = ageInMillis / (1000 * 3600 * 24 * 365.25);

    setResult(`${Math.floor(ageInYears)} years old`);
  };

  return (
    <Layout>
      <div className='bg-white shadow rounded-lg p-8'>
        <h2 className='text-2xl font-bold mb-4'>Age Calculator</h2>
        <form onSubmit={handleSubmit} className='mb-4'>
          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2'>
              Date of Birth:
            </label>
            <input
              type='date'
              className='border border-gray-300 rounded-md w-full p-2'
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2'>
              Today's Date:
            </label>
            <input
              type='date'
              className='border border-gray-300 rounded-md w-full p-2'
              value={today}
              onChange={(e) => setToday(e.target.value)}
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
            <h3 className='text-xl font-bold mb-2'>Age:</h3>
            <pre className="bg-gray-100 p-4 rounded'">{result}</pre>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AgeCalculator;
