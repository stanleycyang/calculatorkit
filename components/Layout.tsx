import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

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
    <header className='bg-white shadow p-4 flex justify-center'>
      <Link href='/'>
        <Image src='/logo.png' alt='CalculatorKit' width={300} height={75} />
      </Link>
    </header>
    <main className='font-default'>{children}</main>
    <footer className='text-center font-default py-4'>
      <p>
        Made with <span className='text-red-500'>&hearts;</span> by{" "}
        <a
          className='text-blue-500'
          target='_blank'
          rel='noreferrer'
          href='https://twitter.com/StanleyCYang'
        >
          @StanleyCYang
        </a>
      </p>
    </footer>
  </div>
);

export default Layout;
