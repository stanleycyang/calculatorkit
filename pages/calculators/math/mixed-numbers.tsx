// components/MixedNumberCalculator.tsx
import React, { useState } from "react";
import Layout from "../../../components/Layout";

const MixedNumberCalculator: React.FC = () => {
  const [num1, setNum1] = useState("");
  const [denom1, setDenom1] = useState("");
  const [wholeNum1, setWholeNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [denom2, setDenom2] = useState("");
  const [wholeNum2, setWholeNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whole1 = parseInt(wholeNum1);
    const whole2 = parseInt(wholeNum2);
    const n1 = parseInt(num1);
    const n2 = parseInt(num2);
    const d1 = parseInt(denom1);
    const d2 = parseInt(denom2);

    if (
      isNaN(whole1) ||
      isNaN(whole2) ||
      isNaN(n1) ||
      isNaN(n2) ||
      isNaN(d1) ||
      isNaN(d2)
    ) {
      setResult("Invalid input. Please enter valid numbers for all fields.");
      return;
    }

    const gcd = (a: number, b: number): number => {
      if (!b) {
        return a;
      }
      return gcd(b, a % b);
    };

    const lcm = (a: number, b: number): number => {
      return (a * b) / gcd(a, b);
    };

    const frac1 = { numerator: whole1 * d1 + n1, denominator: d1 };
    const frac2 = { numerator: whole2 * d2 + n2, denominator: d2 };
    let lcd = lcm(d1, d2);

    let resultNumerator = 0;
    switch (operator) {
      case "+":
        resultNumerator =
          frac1.numerator * (lcd / d1) + frac2.numerator * (lcd / d2);
        break;
      case "-":
        resultNumerator =
          frac1.numerator * (lcd / d1) - frac2.numerator * (lcd / d2);
        break;
      case "*":
        resultNumerator = frac1.numerator * frac2.numerator;
        lcd = d1 * d2;
        break;
      case "/":
        resultNumerator = frac1.numerator * d2;
        lcd = frac2.numerator * d1;
        break;
    }

    const commonDivisor = gcd(resultNumerator, lcd);
    resultNumerator /= commonDivisor;
    lcd /= commonDivisor;

    const whole = Math.floor(resultNumerator / lcd);
    const numerator = resultNumerator % lcd;

    setResult(
      `${whole !== 0 ? `${whole} ` : ""}${
        numerator !== 0 ? `${numerator}/${lcd}` : ""
      }`
    );
  };

  return (
    <Layout>
      <div className='bg-white font-default shadow rounded-lg p-8'>
        <h2 className='text-2xl font-bold mb-4'>Mixed Number Calculator</h2>
        <form onSubmit={handleSubmit} className='mb-4'>
          <div className='flex items-center mb-4'>
            <input
              type='number'
              placeholder='Whole'
              className='border border-gray-300 rounded-md p-2 mr-2'
              value={wholeNum1}
              onChange={(e) => setWholeNum1(e.target.value)}
            />
            <input
              type='number'
              placeholder='Numerator'
              className='border border-gray-300 rounded-md p-2 mr-2'
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
            />
            <span>/</span>
            <input
              type='number'
              placeholder='Denominator'
              className='border border-gray-300 rounded-md p-2 ml-2'
              value={denom1}
              onChange={(e) => setDenom1(e.target.value)}
            />
            <select
              className='border border-gray-300 rounded-md p-2 mx-4'
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
            >
              <option>+</option>
              <option>-</option>
              <option>*</option>
              <option>/</option>
            </select>
            <input
              type='number'
              placeholder='Whole'
              className='border border-gray-300 rounded-md p-2 mr-2'
              value={wholeNum2}
              onChange={(e) => setWholeNum2(e.target.value)}
            />
            <input
              type='number'
              placeholder='Numerator'
              className='border border-gray-300 rounded-md p-2 mr-2'
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
            />
            <span>/</span>
            <input
              type='number'
              placeholder='Denominator'
              className='border border-gray-300 rounded-md p-2 ml-2'
              value={denom2}
              onChange={(e) => setDenom2(e.target.value)}
            />
          </div>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
          >
            Calculate
          </button>
        </form>
        {result && (
          <div>
            <h3 className='text-xl font-bold mb-2'>Result</h3>
            <pre className='bg-gray-100 p-4 rounded'>{result}</pre>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MixedNumberCalculator;
