import './index.css';
import Header from './Header';

export const metadata = {
  title: 'Ogłoszenia',
  description: 'Aplikacja ogłoszeniowa',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="background">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}