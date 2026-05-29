export default function Footer() {
  return (
    <footer
      style={{
        padding: '2rem 2.5rem',
        textAlign: 'center',
        borderTop: '1px solid var(--border)',
      }}
    >
      <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontFamily: "'Fira Code', monospace", letterSpacing: '0.05em' }}>
        Designed &amp; Built by{' '}
        <span style={{ color: 'var(--gold)' }}>Akash S</span>
        {' · '}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
