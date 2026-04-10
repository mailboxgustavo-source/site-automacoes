// src/components/Footer.tsx
import Link from 'next/link'

export function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '48px 24px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '24px',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '28px', height: '28px',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            borderRadius: '7px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '14px',
          }}>⚡</div>
          <span style={{ fontWeight: 700, color: 'var(--text2)', fontSize: '0.95rem' }}>AutoSite</span>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <Link href="#como-funciona" className="nav-link" style={{ fontSize: '0.85rem' }}>Como funciona</Link>
          <Link href="#automacoes" className="nav-link" style={{ fontSize: '0.85rem' }}>Automações</Link>
          <Link href="#contato" className="nav-link" style={{ fontSize: '0.85rem' }}>Contato</Link>
          <Link href="/login" className="nav-link" style={{ fontSize: '0.85rem' }}>Área do cliente</Link>
        </div>

        {/* Copyright */}
        <p style={{ color: 'var(--text3)', fontSize: '0.82rem' }}>
          © 2025 AutoSite · Joinville, SC · Automações que funcionam sozinhas
        </p>
      </div>
    </footer>
  )
}
