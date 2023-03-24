import Link from "next/link";
import Layout from "../components/Layout";
import Head from "next/head";

const categories = [
  {
    id: 1,
    title: "Math",
    path: "/math",
    calculators: [{ name: "Mixed Numbers Calculator", path: "/mixed-numbers" }],
    color: "bg-pastel-green",
  },
  {
    id: 2,
    title: "Financial",
    path: "/financial",
    calculators: [
      { name: "Compound Interest Calculator", path: "/compound-interest" },
    ],
    color: "bg-pastel-blue",
  },
  {
    id: 3,
    title: "Time and Date",
    path: "/time",
    calculators: [{ name: "Age Calculator", path: "/age-calculator" }],
    color: "bg-pastel-yellow",
  },
  {
    id: 4,
    title: "Business",
    path: "/business",
    calculators: [{ name: "Margin Calculator", path: "/margin-calculator" }],
    color: "bg-pastel-pink",
  },
  {
    id: 5,
    title: "Statistics",
    path: "/statistics",
    calculators: [
      { name: "Mean, Median, Mode Calculator", path: "/mean-median-mode" },
    ],
    color: "bg-pastel-red",
  },
  {
    id: 6,
    title: "Scientific",
    path: "/scientific",
    calculators: [
      { name: "Rounding Numbers Calculator", path: "/rounding-calculator" },
    ],
    color: "bg-pastel-purple",
  },
];

const IndexPage = () => (
  <Layout title='CalculatorKit'>
    <div className='bg-gray-50'>
      <Head>
        <title>CalculatorKit</title>
        <meta
          name='description'
          content='Free calculators for everyone to use and integrate into their websites.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container mx-auto px-4 py-8'>
        <h2 className='text-3xl font-bold mb-4'>Available Calculators</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {categories.map((category) => (
            <div
              key={category.id}
              className={`rounded-lg shadow-lg text-white p-6 ${category.color}`}
            >
              <h3 className='text-xl font-bold mb-2'>{category.title}</h3>
              <ul className='list-none list-outside pl-6'>
                {category.calculators.map((calculator, idx) => (
                  <li key={idx}>
                    <Link
                      href={`/calculators${category.path}${calculator.path}`}
                    >
                      {calculator.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  </Layout>
);

export default IndexPage;
