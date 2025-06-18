export default function Footer() {
    return (
      <footer style={{ padding: '1rem', textAlign: 'center', fontSize: '0.8rem', background: 'white', borderTop: '1px solid var(--primary-color)' }}>
        © {new Date().getFullYear()} Folonite. All rights reserved.
      </footer>
    );
  }
  