export default function Card({ children }) {
    return (
      <div
        style={{
          background: 'var(--card-color)',
          padding: '1.5rem',
          borderRadius: 'var(--radius)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          marginBottom: '1rem'
        }}
      >
        {children}
      </div>
    );
  }
  