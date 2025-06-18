import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header
      style={{
        padding: '1rem 2rem',
        background: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid var(--border-color)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.04)'
      }}
    >
      <h1 style={{ color: 'var(--primary-color)', fontSize: '1.5rem' }}>Folonite</h1>
      <nav>
        <Link to="/" style={{ marginRight: '1rem' }}>Dashboard</Link>
        <Link to="/builder/new">Builder</Link>
      </nav>
    </header>
  );
}
