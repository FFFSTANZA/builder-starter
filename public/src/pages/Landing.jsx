import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Hero from "../components/Hero";

export default function Landing() {
  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <Hero />
      <section style={{ padding: '3rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Why Folonite Builder?</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1rem', color: 'var(--muted-color)' }}>
          Build stunning websites visually, without writing a single line of code. Save time, work faster, and impress your audience with modern UI.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link to="/login">
            <Button>Get Started</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
