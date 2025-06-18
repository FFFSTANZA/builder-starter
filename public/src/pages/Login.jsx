import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

export default function Login() {
  return (
    <div style={{ padding: '3rem', maxWidth: '400px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Login to Folonite</h2>
      <form>
        <Input placeholder="Email" style={{ marginBottom: '1rem' }} />
        <Input placeholder="Password" type="password" style={{ marginBottom: '1.5rem' }} />
        <Button variant="primary" style={{ width: '100%' }}>Login</Button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '1rem' }}>
        <Link to="/">← Back to Home</Link>
      </p>
    </div>
  );
}
