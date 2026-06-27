import { useState, useCallback } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import './SignupForm.css'

/* CPF validation — dígitos verificadores */
function validateCPF(raw: string): boolean {
  const digits = raw.replace(/\D/g, '')
  if (digits.length !== 11 || /^(\d)\1{10}$/.test(digits)) return false
  const calc = (d: number) => {
    let sum = 0
    for (let i = 0; i < d; i++) sum += parseInt(digits[i]) * (d + 1 - i)
    const rem = (sum * 10) % 11
    return rem === 10 || rem === 11 ? 0 : rem
  }
  return calc(9) === parseInt(digits[9]) && calc(10) === parseInt(digits[10])
}

/* Masks */
function maskCPF(v: string) {
  return v.replace(/\D/g,'').slice(0,11)
    .replace(/(\d{3})(\d)/,'$1.$2')
    .replace(/(\d{3})(\d)/,'$1.$2')
    .replace(/(\d{3})(\d{1,2})$/,'$1-$2')
}
function maskPhone(v: string) {
  return v.replace(/\D/g,'').slice(0,11)
    .replace(/(\d{2})(\d)/,'($1) $2')
    .replace(/(\d{5})(\d{1,4})$/,'$1-$2')
}
function maskDate(v: string) {
  return v.replace(/\D/g,'').slice(0,8)
    .replace(/(\d{2})(\d)/,'$1/$2')
    .replace(/(\d{2})(\d{1,4})$/,'$1/$2')
}

/* Generate Global ID */
export function generateGlobalId() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789'
  let id = 'TG'
  for (let i = 0; i < 8; i++) id += chars[Math.floor(Math.random() * chars.length)]
  return id
}

interface Props {
  onSuccess: (id: string) => void
}

export default function SignupForm({ onSuccess }: Props) {
  const [form, setForm] = useState({
    nome: '',
    cpf: '',
    email: '',
    nascimento: '',
    celular: '',
    sexo: '',
    pixType: 'pix' as 'pix' | 'agencia',
    pixKey: '',
    banco: '',
    agencia: '',
    conta: '',
    termos: false,
  })
  const [cpfError, setCpfError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const set = useCallback(<K extends keyof typeof form>(k: K, v: typeof form[K]) => {
    setForm(f => ({ ...f, [k]: v }))
  }, [])

  const handleCPF = (raw: string) => {
    const masked = maskCPF(raw)
    set('cpf', masked)
    const digits = masked.replace(/\D/g,'')
    if (digits.length === 11) {
      setCpfError(validateCPF(masked) ? '' : 'CPF inválido')
    } else {
      setCpfError('')
    }
  }

  const isValid =
    form.nome.trim().length > 2 &&
    validateCPF(form.cpf) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    form.nascimento.replace(/\D/g,'').length === 8 &&
    form.celular.replace(/\D/g,'').length === 11 &&
    form.sexo !== '' &&
    form.termos &&
    (form.pixType === 'pix' ? form.pixKey.length > 3 : (form.banco && form.agencia && form.conta))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValid) return
    setSubmitted(true)
    onSuccess(generateGlobalId())
  }

  if (submitted) return null

  return (
    <section id="cadastro" className="signup-section">
      <div className="signup-inner">
        <div className="signup-header">
          <p className="signup-eyebrow">Conta Ecobit</p>
          <h2 className="signup-title">Crie sua conta e comece hoje</h2>
          <p className="signup-sub">
            Seu ID Global é único e rastreável — conecta sua cartela à plataforma Carbonus.
          </p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit} noValidate>
          {/* Nome */}
          <div className="form-group">
            <label htmlFor="nome" className="form-label">Nome completo</label>
            <input
              id="nome"
              type="text"
              className="form-input"
              placeholder="Seu nome completo"
              value={form.nome}
              onChange={e => set('nome', e.target.value)}
              autoComplete="name"
              required
            />
          </div>

          {/* CPF + Email */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="cpf" className="form-label">CPF</label>
              <input
                id="cpf"
                type="text"
                inputMode="numeric"
                className={`form-input${cpfError ? ' form-input-error' : ''}`}
                placeholder="000.000.000-00"
                value={form.cpf}
                onChange={e => handleCPF(e.target.value)}
                aria-invalid={!!cpfError}
                aria-describedby={cpfError ? 'cpf-error' : undefined}
                maxLength={14}
                required
              />
              {cpfError && <span id="cpf-error" className="form-error">{cpfError}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">E-mail</label>
              <input
                id="email"
                type="email"
                className="form-input"
                placeholder="seu@email.com"
                value={form.email}
                onChange={e => set('email', e.target.value)}
                autoComplete="email"
                required
              />
            </div>
          </div>

          {/* Nascimento + Celular */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nascimento" className="form-label">Data de nascimento</label>
              <input
                id="nascimento"
                type="text"
                inputMode="numeric"
                className="form-input"
                placeholder="DD/MM/AAAA"
                value={form.nascimento}
                onChange={e => set('nascimento', maskDate(e.target.value))}
                maxLength={10}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="celular" className="form-label">Celular</label>
              <input
                id="celular"
                type="tel"
                className="form-input"
                placeholder="(00) 00000-0000"
                value={form.celular}
                onChange={e => set('celular', maskPhone(e.target.value))}
                autoComplete="tel"
                maxLength={15}
                required
              />
            </div>
          </div>

          {/* Sexo */}
          <div className="form-group">
            <label htmlFor="sexo" className="form-label">Sexo</label>
            <div className="select-wrap">
              <select
                id="sexo"
                className="form-input form-select"
                value={form.sexo}
                onChange={e => set('sexo', e.target.value)}
                required
              >
                <option value="" disabled>Selecione...</option>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
                <option value="N">Prefiro não definir</option>
              </select>
              <ChevronDown size={16} className="select-icon" aria-hidden="true" />
            </div>
          </div>

          {/* Dados Bancários */}
          <div className="form-block">
            <div className="form-block-header">
              <span className="form-block-title">Dados Bancários</span>
              <div className="toggle-wrap" role="group" aria-label="Tipo de recebimento">
                <button
                  type="button"
                  className={`toggle-btn${form.pixType === 'pix' ? ' active' : ''}`}
                  onClick={() => set('pixType', 'pix')}
                  aria-pressed={form.pixType === 'pix'}
                >
                  Chave Pix
                </button>
                <button
                  type="button"
                  className={`toggle-btn${form.pixType === 'agencia' ? ' active' : ''}`}
                  onClick={() => set('pixType', 'agencia')}
                  aria-pressed={form.pixType === 'agencia'}
                >
                  Agência e Conta
                </button>
              </div>
            </div>

            {form.pixType === 'pix' ? (
              <div className="form-group">
                <label htmlFor="pixKey" className="form-label">Chave Pix</label>
                <input
                  id="pixKey"
                  type="text"
                  className="form-input"
                  placeholder="CPF, e-mail, celular ou chave aleatória"
                  value={form.pixKey}
                  onChange={e => set('pixKey', e.target.value)}
                />
              </div>
            ) : (
              <div className="form-row form-row-3">
                <div className="form-group">
                  <label htmlFor="banco" className="form-label">Banco</label>
                  <input
                    id="banco"
                    type="text"
                    className="form-input"
                    placeholder="Ex: 001 — Banco do Brasil"
                    value={form.banco}
                    onChange={e => set('banco', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="agencia" className="form-label">Agência</label>
                  <input
                    id="agencia"
                    type="text"
                    inputMode="numeric"
                    className="form-input"
                    placeholder="0000"
                    value={form.agencia}
                    onChange={e => set('agencia', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="conta" className="form-label">Conta</label>
                  <input
                    id="conta"
                    type="text"
                    inputMode="numeric"
                    className="form-input"
                    placeholder="00000-0"
                    value={form.conta}
                    onChange={e => set('conta', e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Termos */}
          <div className="form-check">
            <input
              id="termos"
              type="checkbox"
              className="form-checkbox"
              checked={form.termos}
              onChange={e => set('termos', e.target.checked)}
              required
            />
            <label htmlFor="termos" className="form-check-label">
              Li e aceito os{' '}
              <a href="#" className="form-link">Termos de Uso</a>{' '}
              e a{' '}
              <a href="#" className="form-link">Política de Privacidade</a>{' '}
              da Ecobit™
            </label>
          </div>

          <button
            type="submit"
            className={`btn-pill signup-submit${isValid ? '' : ' disabled'}`}
            disabled={!isValid}
            aria-disabled={!isValid}
          >
            Cadastrar
            <span className="dot" aria-hidden="true">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}
