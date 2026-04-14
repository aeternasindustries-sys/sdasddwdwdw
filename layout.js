import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundGrid from '@/components/BackgroundGrid';

export const metadata = {
  title: 'Dark Carnifix',
  description: 'Site promocional de Dark Carnifix'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <BackgroundGrid />
        <Navbar />
        <main className="page">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
