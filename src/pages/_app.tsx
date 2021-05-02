import React from 'react'
import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

import  Header  from '../components/Header';
import { Menu } from '../components/Menu';
import CardProduct from '../components/Card';
import BoxOption from '../components/BoxOption';


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return(
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
			<GlobalStyle />
        </ThemeProvider>

  )
}

export default MyApp
