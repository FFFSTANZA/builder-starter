export default function Button({ children, variant = 'primary', ...props }) {
    const styles = {
      primary: {
        background: 'var(--accent-color)',
        color: 'white',
        border: 'none'
      },
      outline: {
        background: 'transparent',
        border: '1px solid var(--accent-color)',
        color: 'var(--accent-color)'
      },
      disabled: {
        background: 'var(--muted-color)',
        color: '#fff',
        border: 'none',
        cursor: 'not-allowed'
      }
    };
  
    return (
      <button
        style={{
          padding: '0.6rem 1.2rem',
          borderRadius: 'var(--radius)',
          fontWeight: 600,
          cursor: 'pointer',
          ...styles[variant]
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
  