import './globals.css';
import { CareerProvider } from './context/CareerContext';

export const metadata = {
  title: 'Ali Burak Koyun – Portfolio',
  description: 'Software Development • Data Analytics • Digital Marketing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body>
        <CareerProvider>
          {children}
        </CareerProvider>
      </body>
    </html>
  );
}
