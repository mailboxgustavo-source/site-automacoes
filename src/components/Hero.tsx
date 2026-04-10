// src/components/Hero.tsx
import Link from 'next/link'

export function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      paddingTop: '64px',
    }} className="grid-bg">

      {/* Glow orbs */}
      <div className="orb" style={{
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(99,102,241,0.18), transparent 70%)',
        top: '-100px', left: '50%', transform: 'translateX(-50%)',
      }} />
      <div className="orb" style={{
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.12), transparent 70%)',
        bottom: '0', right: '-100px',
        animationDelay: '2s',
      }} />

      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '80px 24px',
        textAlign: 'center',
        position: 'relative', zIndex: 1,
      }}>

        {/* Badge */}
        <div className="animate-fade-up" style={{ marginBottom: '28px' }}>
          <span className="badge badge-green">
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399', display: 'inline-block' }} />
            Disponível para novos projetos
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up-delay-1" style={{
          fontSize: 'clamp(2.8rem, 6vw, 5rem)',
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          color: '#f0f0ff',
          marginBottom: '24px',
        }}>
          Automações que{' '}
          <span className="shimmer-text">trabalham por você</span>{' '}
          enquanto você dorme
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up-delay-2" style={{
          fontSize: '1.2rem',
          color: 'var(--text2)',
          maxWidth: '600px',
          margin: '0 auto 40px',
          lineHeight: 1.7,
        }}>
          Construo sistemas que conectam suas ferramentas, eliminam trabalho manual
          e entregam resultados em piloto automático — para freelancers, negócios e SaaS.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-delay-3" style={{
          display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap',
          marginBottom: '64px',
        }}>
          <Link href="#automacoes" className="btn-primary" style={{ fontSize: '1rem', padding: '15px 32px' }}>
            Ver automações disponíveis →
          </Link>
          <Link href="#como-funciona" className="btn-ghost" style={{ fontSize: '1rem', padding: '15px 32px' }}>
            Como funciona
          </Link>
        </div>

        {/* Stats */}
        <div className="animate-fade-up-delay-3" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'var(--border)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          border: '1px solid var(--border)',
        }}>
          {[
            { value: '100%', label: 'Automatizado', icon: '⚡' },
            { value: '< 48h', label: 'Para entregar', icon: '🚀' },
            { value: '∞', label: 'Escalabilidade', icon: '📈' },
          ].map((stat, i) => (
            <div key={i} style={{
              padding: '28px 24px',
              background: 'rgba(255,255,255,0.02)',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{stat.icon}</div>
              <div className="stat-number" style={{ fontSize: '2rem', marginBottom: '4px' }}>{stat.value}</div>
              <div style={{ color: 'var(--text3)', fontSize: '0.85rem', fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <p style={{ color: 'var(--text3)', fontSize: '0.82rem', marginTop: '24px' }}>
          Este site é 100% automatizado · Planilha → Site → Venda → Entrega sem intervenção manual
        </p>
      </div>
    </section>
  )
}
