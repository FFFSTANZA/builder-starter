export default function Input({ placeholder, ...props }) {
    return (
      <input
        placeholder={placeholder}
        style={{
          padding: '0.6rem 1rem',
          borderRadius: 'var(--radius)',
          border: '1px solid var(--border-color)',
          width: '100%',
          fontSize: '1rem'
        }}
        {...props}
      />
    );
  }
  