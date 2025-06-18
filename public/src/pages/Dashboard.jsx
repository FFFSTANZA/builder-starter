import Layout from '../components/Layout';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <Layout>
      <h2 style={{ marginBottom: '1rem' }}>👋 Hey, welcome back!</h2>
      <p style={{ color: 'var(--muted-color)', marginBottom: '2rem' }}>
        Ready to build something amazing today?
      </p>

      <Card>
        <p style={{ fontSize: '1.1rem' }}>Start fresh or continue an existing project.</p>
        <Link to="/builder/new">
          <Button style={{ marginTop: '1rem' }}>➕ New Project</Button>
        </Link>
      </Card>

      <Card>
        <h4 style={{ marginBottom: '0.5rem' }}>Recent Projects</h4>
        <p style={{ fontStyle: 'italic', color: 'var(--muted-color)' }}>No recent projects yet. Start one now!</p>
      </Card>
    </Layout>
  );
}
