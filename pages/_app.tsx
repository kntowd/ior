import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'next-auth/client';

import '../styles/global.scss';
import { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from '../components/navbar';

// This default export is required in a new `pages/_app.js` file.
const App = ({ Component, pageProps }:AppProps):ReactElement => {
  return (
    <>
      <Provider session={pageProps.session}>
        <CssBaseline />
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

App.propTypes = {
  pageProps: PropTypes.object.isRequired,
  Component: PropTypes.func,
};

export default App;
