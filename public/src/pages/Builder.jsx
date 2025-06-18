import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import Editor from '../components/Editor';

export default function Builder() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSave = data => {
    console.log('Saved data:', data);
    // In future, save to API or localStorage
    alert('Project saved successfully!');
    if (id === 'new') {
      navigate('/dashboard');
    }
  };

  return (
    <Layout>
      <Editor onSave={handleSave} />
    </Layout>
  );
}
