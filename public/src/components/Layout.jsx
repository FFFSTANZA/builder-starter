import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem', minHeight: 'calc(100vh - 120px)' }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
