// src/components/Navbar.tsx
import Link from 'next/link'

export function Navbar() {
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      backdropFilter: 'blur(20px)',
      background: 'rgba(10,10,15,0.85)',
    }}>
      <nav style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '0 24px',
        height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '32px', height: '32px',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            borderRadius: '8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '16px',
          }}>⚡</div>
          <span style={{ fontWeight: 700, fontSize: '1.05rem', color: '#f0f0ff' }}>AutoSite</span>
        </Link>

        {/* Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <Link href="#como-funciona" className="nav-link">Como funciona</Link>
          <Link href="#automacoes" className="nav-link">Automações</Link>
          <Link href="#preco" className="nav-link">Preços</Link>
          <Link href="#contato" className="nav-link">Contato</Link>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link href="/login" className="btn-ghost" style={{ padding: '9px 20px', fontSize: '0.875rem' }}>
            Entrar
          </Link>
          <Link href="/contato" className="btn-primary" style={{ padding: '9px 20px', fontSize: '0.875rem' }}>
            Falar comigo →
          </Link>
        </div>
      </nav>
    </header>
  )
}
