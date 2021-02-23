import 'styles/reset.css';
import 'styles/fonts.css';
import { ThemeProvider } from 'styled-components'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Header from 'components/Header'

const themes = [
  { 
    background:'#FFFDFA', 
    primaryColor:'#FF6B00', 
    secondaryColor:'#FFB276', 
    tertiaryColor:'#FFE0C9'
  },
  { 
    background:'#FBFCF4', 
    primaryColor:'#8B7810', 
    secondaryColor:'#D1C379', 
    tertiaryColor:'#EAE0AB'
  },
  { 
    background:'#F9FEFB',
    primaryColor:'#07842A', 
    secondaryColor:'#75DC92', 
    tertiaryColor:'#C2F4D0'
  },
  { 
    background:'#F7FCFF', 
    primaryColor:'#003D68', 
    secondaryColor:'#1471B5', 
    tertiaryColor:'#72AAD2'
  },
  { 
    background:'#FEFFFF', 
    primaryColor:'#0057FF', 
    secondaryColor:'#7FA8F6', 
    tertiaryColor:'#BFD5FE'
  },
  { 
    background:'#FDFAFF', 
    primaryColor:'#3A0068', 
    secondaryColor:'#7F29C3', 
    tertiaryColor:'#BB83E7'
  },
  { 
    background:'#FFFCFB', 
    primaryColor:'#FF3D00', 
    secondaryColor:'#FF815A', 
    tertiaryColor:'#FFC2AF'
  },
]

const neutralTheme =   { 
  background:'#FFFFFF', 
  primaryColor:'#000000', 
  secondaryColor:'#000000', 
  tertiaryColor:'#000000',
};


function Application({ Component, pageProps }) {
  const [activeTheme, setActiveTheme] = useState(themes[0]);
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const router = useRouter();
  let visibleTheme, transitionSpeed = 10000;
  useEffect(() => {
    setTimeout(() => {
      const nextTheme = themes[themes.indexOf(activeTheme) + 1] || themes[0]
      setActiveTheme(nextTheme)
    }, transitionSpeed )
  },[activeTheme]);
  useEffect(() => router.pathname === '/portfolio' ? setIsInitialLoad(true) : setIsInitialLoad(false), [router.pathname]);

  visibleTheme = isInitialLoad ? { ...activeTheme, transitionSpeed:'500ms'} : { ...activeTheme, transitionSpeed:`${transitionSpeed}ms` }
  return (
    <ThemeProvider theme={ router.pathname === '/portfolio' ? { ...neutralTheme, transitionSpeed:'1s' } : visibleTheme }>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default Application;
