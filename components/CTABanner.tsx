// src/components/CTABanner.tsx

export function CTABanner() {
  return (
    <section id="contato" style={{
      padding: '120px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="divider-fade" style={{ marginBottom: '120px' }} />

      {/* Glow */}
      <div className="orb" style={{
        width: '500px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.2), transparent 70%)',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
      }} />

      <div style={{
        maxWidth: '720px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative', zIndex: 1,
      }}>
        {/* Case proof */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 20px',
          borderRadius: '100px',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid var(--border)',
          marginBottom: '32px',
          fontSize: '0.85rem',
          color: 'var(--text2)',
        }}>
          🌟 <strong style={{ color: 'var(--text)' }}>Este site é o case ao vivo</strong> — automatizado do zero ao fim
        </div>

        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 900,
          letterSpacing: '-0.03em',
          color: 'var(--text)',
          marginBottom: '20px',
          lineHeight: 1.1,
        }}>
          Pronto para parar de<br />
          <span className="shimmer-text">fazer tudo na mão?</span>
        </h2>

        <p style={{
          color: 'var(--text2)',
          fontSize: '1.1rem',
          marginBottom: '40px',
          lineHeight: 1.7,
        }}>
          Me conta o que você precisa automatizar. Em 24h tenho uma proposta para você.
          Sem compromisso, sem enrolação.
        </p>

        {/* Contact options */}
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
          <a
            href="https://wa.me/5547999999999?text=Olá! Vi seu site e quero automatizar meu negócio."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '15px 32px' }}
          >
            💬 Falar no WhatsApp
          </a>
          <a
            href="mailto:gustavo@autosite.com.br"
            className="btn-ghost"
            style={{ fontSize: '1rem', padding: '15px 32px' }}
          >
            ✉️ Enviar e-mail
          </a>
        </div>

        {/* Guarantees */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '28px',
          flexWrap: 'wrap',
        }}>
          {[
            '✓ Resposta em até 24h',
            '✓ Orçamento sem compromisso',
            '✓ Suporte pós-entrega',
          ].map((item, i) => (
            <span key={i} style={{
              color: 'var(--text3)',
              fontSize: '0.85rem',
              fontWeight: 500,
            }}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
