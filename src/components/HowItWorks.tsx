// src/components/HowItWorks.tsx

const steps = [
  {
    number: '01',
    icon: '📊',
    title: 'Você edita a planilha',
    description: 'Adiciona ou atualiza produtos no Google Sheets. Simples como preencher uma tabela — sem código, sem painel complicado.',
    tag: 'Google Sheets',
  },
  {
    number: '02',
    icon: '⚡',
    title: 'A automação entra em ação',
    description: 'n8n detecta a mudança e atualiza automaticamente o WooCommerce. Páginas criadas, preços ajustados, estoque sincronizado.',
    tag: 'n8n / Zapier',
  },
  {
    number: '03',
    icon: '💳',
    title: 'Cliente compra',
    description: 'Seu cliente paga com cartão ou PIX via Stripe. Checkout profissional, sem você precisar fazer nada.',
    tag: 'Stripe',
  },
  {
    number: '04',
    icon: '📧',
    title: 'Entrega automática',
    description: 'Em segundos: e-mail de confirmação, link de acesso ao produto, cliente adicionado ao CRM e lista de e-mails.',
    tag: 'Mailchimp / Brevo',
  },
  {
    number: '05',
    icon: '⭐',
    title: 'Pós-venda automático',
    description: 'Após 7 dias, o cliente recebe uma pesquisa de satisfação. Você coleta feedback sem levantar um dedo.',
    tag: 'Automático',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" style={{
      padding: '120px 24px',
      maxWidth: '800px',
      margin: '0 auto',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '72px' }}>
        <p className="section-label">Como funciona</p>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          color: 'var(--text)',
          marginBottom: '16px',
        }}>
          Do cadastro à pós-venda,<br />
          <span style={{ color: 'var(--text2)', fontWeight: 400 }}>tudo no piloto automático</span>
        </h2>
        <p style={{ color: 'var(--text2)', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto' }}>
          Um pipeline completo que roda sozinho. Você cuida do seu negócio, o sistema cuida do resto.
        </p>
      </div>

      {/* Steps */}
      <div style={{ position: 'relative' }}>
        {/* Vertical line */}
        <div style={{
          position: 'absolute',
          left: '27px',
          top: '32px',
          bottom: '32px',
          width: '1px',
          background: 'linear-gradient(to bottom, var(--accent), rgba(139,92,246,0.3), transparent)',
        }} />

        {steps.map((step, i) => (
          <div key={i} style={{
            display: 'flex',
            gap: '28px',
            marginBottom: i < steps.length - 1 ? '40px' : 0,
            position: 'relative',
          }}>
            {/* Step number circle */}
            <div style={{
              flexShrink: 0,
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.15))',
              border: '1px solid rgba(99,102,241,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.4rem',
              position: 'relative',
              zIndex: 1,
            }}>
              {step.icon}
            </div>

            {/* Content */}
            <div className="glass" style={{
              flex: 1,
              padding: '24px 28px',
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '8px' }}>
                <div>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '4px',
                    display: 'block',
                  }}>
                    Passo {step.number}
                  </span>
                  <h3 style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--text)',
                    marginBottom: '8px',
                  }}>{step.title}</h3>
                </div>
                <span className="tag">{step.tag}</span>
              </div>
              <p style={{ color: 'var(--text2)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
