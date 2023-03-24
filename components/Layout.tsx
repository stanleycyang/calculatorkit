import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header className='bg-white shadow p-4'>
      <h1 className='text-2xl font-logo font-bold text-center'>
        CalculatorKit
      </h1>
    </header>
    {children}
    <footer className='text-center py-4'>
      <p>
        Made with <span className='text-red-500'>&hearts;</span> by{" "}
        <a className='text-blue-500' href='https://twitter.com/StanleyCYang'>
          @StanleyCYang
        </a>
      </p>
    </footer>
  </div>
);

export default Layout;
