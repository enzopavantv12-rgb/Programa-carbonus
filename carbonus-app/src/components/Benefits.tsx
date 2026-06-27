import { Fuel, DollarSign, Repeat2, Leaf, ShieldCheck } from 'lucide-react';
import RadialOrbitalTimeline from './ui/radial-orbital-timeline';
import './Benefits.css';

const seals = ['ODS 13', 'Ecobit™', 'Etanol Automotivo', 'Ativos Ambientais', 'ID Global'];

const timelineData = [
  {
    id: 1,
    title: 'Troque por Etanol',
    date: '50 Litros',
    content: 'Complete sua cartela de 24 figurinhas e ganhe 50 litros de etanol automotivo renovável, resgatável em postos parceiros de todo o Brasil.',
    category: 'Combustível',
    icon: Fuel,
    relatedIds: [2, 3],
    status: 'completed' as const,
    energy: 100,
  },
  {
    id: 2,
    title: 'Monetize as repetidas',
    date: 'Retorno Imediato',
    content: 'Receba direto via Pix ou conta bancária. Cada figurinha repetida tem valor real de mercado e os saques caem em até 1 dia útil.',
    category: 'Economia',
    icon: DollarSign,
    relatedIds: [1, 3],
    status: 'completed' as const,
    energy: 90,
  },
  {
    id: 3,
    title: 'Troque e complete mais rápido',
    date: 'Comunidade P2P',
    content: 'Plataforma integrada de troca P2P entre colecionadores. Sistema de matching geolocalizado para trocas rápidas na sua região.',
    category: 'Comunidade',
    icon: Repeat2,
    relatedIds: [2, 5],
    status: 'completed' as const,
    energy: 85,
  },
  {
    id: 4,
    title: 'Impacto ambiental real',
    date: 'ODS 13 da ONU',
    content: 'Cada cartela completa representa a compensação de gases do efeito estufa, com relatório de impacto climático individual detalhado.',
    category: 'Clima',
    icon: Leaf,
    relatedIds: [1, 5],
    status: 'completed' as const,
    energy: 95,
  },
  {
    id: 5,
    title: 'Plataforma confiável',
    date: 'ID Global Criptográfico',
    content: 'Conta Ecobit exclusiva, cadastro seguro por CPF e conformidade integral com as normas regulamentadas da LGPD.',
    category: 'Segurança',
    icon: ShieldCheck,
    relatedIds: [3, 4],
    status: 'completed' as const,
    energy: 100,
  },
];

export default function Benefits() {
  return (
    <section id="por-que" className="benefits-section">
      <div className="benefits-inner">
        {/* Seal strip */}
        <div className="benefits-seals" role="list" aria-label="Certificações e selos">
          {seals.map((s) => (
            <div key={s} className="seal" role="listitem">
              <span className="seal-dot" aria-hidden="true" />
              {s}
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="benefits-header">
          <h2 className="benefits-title">
            Por que milhares de motoristas escolhem o Carbonus
          </h2>
          <p className="benefits-subtitle">
            Mais do que um programa de pontos — uma via concreta de impacto climático
            que devolve valor real para o seu bolso a cada abastecimento.
          </p>
        </div>

        {/* Image strip */}
        <div className="benefits-images" aria-hidden="true">
          <div className="benefits-img">
            <img src="/posto-noturno.jpg" alt="Posto de Abastecimento à Noite" className="w-full h-full object-cover" />
          </div>
          <div className="benefits-img">
            <img src="/motorista.jpg" alt="Motorista Dirigindo Confortavelmente" className="w-full h-full object-cover" />
          </div>
          <div className="benefits-img">
            <img src="/abastecer.jpg" alt="Abastecendo com Etanol Renovável" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Radial Orbital Timeline */}
        <div className="benefits-orbital-container mt-12 w-full max-w-4xl mx-auto">
          <RadialOrbitalTimeline timelineData={timelineData} />
        </div>
      </div>
    </section>
  );
}
