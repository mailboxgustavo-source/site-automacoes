// src/components/Automacoes.tsx

const automacoes = [
  {
    icon: '🛒',
    title: 'Loja Digital Automatizada',
    description: 'WooCommerce + Google Sheets + Stripe. Cadastre produtos na planilha, venda online, entrega automática por e-mail.',
    tags: ['WooCommerce', 'Google Sheets', 'Stripe'],
    highlight: true,
    price: 'R$ 1.497',
    label: 'Mais popular',
  },
  {
    icon: '📧',
    title: 'Pipeline de E-mail Marketing',
    description: 'Segmentação automática de leads, sequências de nutrição e recuperação de carrinho sem toque manual.',
    tags: ['Mailchimp', 'Brevo', 'n8n'],
    price: 'R$ 897',
  },
  {
    icon: '📋',
    title: 'CRM com Tarefas Automáticas',
    description: 'Nova venda → tarefa criada no Asana/Trello → responsável notificado → follow-up agendado. Tudo sozinho.',
    tags: ['Asana', 'Trello', 'Zapier'],
    price: 'R$ 697',
  },
  {
    icon: '📊',
    title: 'Dashboard de Métricas',
    description: 'Painel unificado que puxa dados de todas suas ferramentas e exibe KPIs em tempo real. Sem copiar planilha.',
    tags: ['Google Data Studio', 'API'],
    price: 'R$ 1.197',
  },
  {
    icon: '⭐',
    title: 'Pesquisa & NPS Automático',
    description: 'Dispara pesquisa de satisfação no momento certo, coleta respostas e gera relatório semanal sem intervenção.',
    tags: ['Typeform', 'n8n', 'Sheets'],
    price: 'R$ 497',
  },
  {
    icon: '🔗',
    title: 'Integração Customizada',
    description: 'Tem duas ferramentas que precisam conversar? Construo a ponte perfeita entre qualquer sistema com API.',
    tags: ['API REST', 'Webhooks', 'n8n'],
    price: 'Sob consulta',
    isCustom: true,
  },
]

export function Automacoes() {
  return (
    <section id="automacoes" style={{
      padding: '120px 24px',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <div className="divider-fade" style={{ marginBottom: '120px' }} />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <p className="section-label">Automações disponíveis</p>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          color: 'var(--text)',
          marginBottom: '16px',
        }}>
          Escolha sua automação
        </h2>
        <p style={{ color: 'var(--text2)', fontSize: '1.05rem', maxWidth: '480px', margin: '0 auto' }}>
          Soluções prontas para implantar no seu negócio. Ou me conta o que você precisa e criamos juntos.
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '20px',
      }}>
        {automacoes.map((item, i) => (
          <div key={i} className="glass" style={{
            padding: '32px',
            position: 'relative',
            border: item.highlight
              ? '1px solid rgba(99,102,241,0.5)'
              : '1px solid var(--border)',
            background: item.highlight
              ? 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.05))'
              : undefined,
          }}>
            {/* Popular badge */}
            {item.label && (
              <div style={{ position: 'absolute', top: '-12px', left: '24px' }}>
                <span className="badge badge-accent">{item.label}</span>
              </div>
            )}

            {/* Icon */}
            <div style={{
              fontSize: '2rem',
              marginBottom: '16px',
              width: '52px', height: '52px',
              borderRadius: '12px',
              background: 'rgba(255,255,255,0.05)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {item.icon}
            </div>

            {/* Title & description */}
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: 700,
              color: 'var(--text)',
              marginBottom: '10px',
            }}>{item.title}</h3>
            <p style={{
              color: 'var(--text2)',
              fontSize: '0.9rem',
              lineHeight: 1.7,
              marginBottom: '20px',
            }}>{item.description}</p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
              {item.tags.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            {/* Price + CTA */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '20px',
              borderTop: '1px solid var(--border)',
            }}>
              <span style={{
                fontSize: item.isCustom ? '0.9rem' : '1.2rem',
                fontWeight: 700,
                color: item.isCustom ? 'var(--text2)' : 'var(--text)',
              }}>
                {item.price}
              </span>
              <a href="#contato" className={item.highlight ? 'btn-primary' : 'btn-ghost'} style={{
                padding: '9px 20px',
                fontSize: '0.875rem',
              }}>
                {item.isCustom ? 'Conversar →' : 'Quero este →'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
