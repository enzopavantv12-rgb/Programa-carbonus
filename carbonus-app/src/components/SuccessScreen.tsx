import { ArrowUpRight, CheckCircle2, Ticket } from 'lucide-react'
import './SuccessScreen.css'

interface Props {
  globalId: string
}

export default function SuccessScreen({ globalId }: Props) {
  return (
    <section id="cadastro" className="success-section grain">
      <div className="success-inner">
        <div className="success-icon-wrap" aria-hidden="true">
          <CheckCircle2 size={40} strokeWidth={1.5} />
        </div>

        <div className="success-content">
          <p className="success-eyebrow">Conta Ecobit criada</p>
          <h2 className="success-title">
            Parabéns!<br />
            Sua conta foi criada com sucesso.
          </h2>
          <p className="success-sub">
            Considere-se um amigo da Natureza!<br />
            Guarde seu ID Global — ele identifica sua conta na plataforma.
          </p>

          <div className="success-id-box" aria-label={`Seu ID Global: ${globalId}`}>
            <span className="success-id-label">Seu ID Global</span>
            <span className="success-id">{globalId}</span>
          </div>

          <div className="success-ctas">
            <a href="#" className="btn-pill">
              Comprar Cartela
              <span className="dot" aria-hidden="true">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </span>
            </a>
            <a href="#" className="btn-pill btn-pill-dark">
              <Ticket size={16} strokeWidth={2} />
              Já tenho uma cartela — Quero Validar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
