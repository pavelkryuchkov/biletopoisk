import './globals.css';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import StoreProvider from '@/redux/storeProvider';

export const metadata = {
  title: 'Билетопоиск',
  description: 'Сайт для покупки билетов в кино',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body /*className={inter.className}*/>
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
        <div id="modal"></div>
      </body>
    </html>
  );
}
