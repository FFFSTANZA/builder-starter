import { Link } from "react-router-dom";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section
      style={{
        padding: '4rem 2rem',
        background: 'var(--bg-color)',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome to Folonite</h1>
      <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', color: 'var(--text-color)' }}>
        A powerful no-code website builder that puts creativity in your hands.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <Link to="/login">
          <Button>Start Building</Button>
        </Link>
      </div>
    </section>
  );
}
