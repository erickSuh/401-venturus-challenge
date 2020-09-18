import React from 'react';
import { Link } from 'react-router-dom';
import Header from '~/components/Header';

function Home() {
  return (
    <>
      <Header />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/my-account">Minha Conta</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
