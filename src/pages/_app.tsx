import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store  from '@/redux/store';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className={`${GeistSans.className} ${GeistMono.className} antialiased`}>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}