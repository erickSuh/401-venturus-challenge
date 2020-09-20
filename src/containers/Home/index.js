import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from 'components/Header';

function Home() {
  const { t } = useTranslation('home');

  return (
    <>
      <Header />
      <ul>
        <li>
          <Link to="/">{t('home')}</Link>
        </li>
        <li>
          <Link to="/my-account">{t('my_account')}</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
