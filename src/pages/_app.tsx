import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '../styles/globals.css';
import { useSelector } from "react-redux";
import store, { RootState } from '@/redux/store';
import { Header } from '@/components/Shared/Header';
// Create a custom type for AppContent props
type AppContentProps = {
  Component: AppProps['Component'];
  pageProps: AppProps['pageProps'];
};

// Use the custom type instead of AppProps
const AppContent = ({ Component, pageProps }: AppContentProps) => {
  const theme = useSelector((state: RootState) => state.theme.currentTheme);

  
  return (
    <div className={`${GeistSans.className} ${GeistMono.className} antialiased ${theme === 'dark' ? 'dark' : ''}`}>
      <Component {...pageProps} />
    </div>
  );
};

export default function App(props: AppProps) {
  return (
    <Provider store={store}>
        <Header />
      <AppContent 
        Component={props.Component} 
        pageProps={props.pageProps}
      />
    </Provider>
  );
}