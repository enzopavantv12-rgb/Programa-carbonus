import { Activity, Map as MapIcon, MessageCircle } from 'lucide-react';
import DottedMap from 'dotted-map';
import { Area, AreaChart, CartesianGrid } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from './ui/chart';
import './HowItWorks.css';

const chartConfig = {
  compensado: {
    label: 'Carbono Compensado (kg)',
    color: '#1bf717',
  },
  total: {
    label: 'Total Acumulado (kg)',
    color: '#06caed',
  },
} satisfies ChartConfig;

const chartData = [
  { month: 'Jan', compensado: 120, total: 300 },
  { month: 'Fev', compensado: 240, total: 420 },
  { month: 'Mar', compensado: 380, total: 550 },
  { month: 'Abr', compensado: 510, total: 720 },
  { month: 'Mai', compensado: 750, total: 980 },
  { month: 'Jun', compensado: 1100, total: 1400 },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="how-section">
      <div className="how-inner">
        {/* Cabeçalho da Seção */}
        <div className="how-header-dashboard">
          <p className="how-eyebrow">Como funciona</p>
          <h2 className="how-title-dashboard">
            O Programa Carbonus® te dá um incentivo para{' '}
            <span className="text-grad-neon">reduzir as emissões de CO₂.</span>
          </h2>
        </div>

        {/* Dashboard Grid (Baseado em features-9) */}
        <div className="mx-auto grid max-w-5xl border border-white/10 md:grid-cols-2 rounded-2xl overflow-hidden bg-navy/40 backdrop-blur-md">
          
          {/* BLOCO 1: Rastreamento em Tempo Real */}
          <div className="border-b md:border-b-0 border-white/10 flex flex-col justify-between">
            <div className="p-6 sm:p-12">
              <span className="text-muted-foreground flex items-center gap-2 text-sm text-gray-400">
                <MapIcon className="size-4 text-secondary" />
                Rastreamento Ecológico em Tempo Real
              </span>
              <p className="mt-6 text-2xl font-extrabold text-white">
                Sistema avançado de compensação. Localize de onde vêm seus ativos ambientais.
              </p>
            </div>

            <div aria-hidden className="relative mt-auto">
              <div className="absolute inset-0 z-10 m-auto size-fit">
                <div className="rounded-xl how-map-label relative flex size-fit w-fit items-center gap-2 border border-white/10 px-3 py-1.5 text-xs font-semibold shadow-md shadow-black/30 text-white">
                  <span className="text-lg">🇧🇷</span> Última figurinha colada em São Paulo, BR
                </div>
                <div className="rounded-xl how-map-label-bg absolute inset-2 -bottom-2 mx-auto border border-white/5 px-3 py-4 text-xs font-medium shadow-md shadow-black/5"></div>
              </div>

              <div className="relative overflow-hidden opacity-60">
                <div className="z-1 absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent"></div>
                <Map />
              </div>
            </div>
          </div>

          {/* BLOCO 2: Negociação P2P & Chat */}
          <div className="overflow-hidden how-grid-col-right p-6 sm:p-12 border-l-0 md:border-l border-white/10 flex flex-col justify-between">
            <div className="relative z-10">
              <span className="text-muted-foreground flex items-center gap-2 text-sm text-gray-400">
                <MessageCircle className="size-4 text-accent" />
                Canal de Trocas & Negociação P2P
              </span>
              <p className="my-6 text-2xl font-extrabold text-white">
                Negocie suas repetidas com outros motoristas e complete a cartela mais rápido.
              </p>
            </div>
            
            <div aria-hidden className="flex flex-col gap-6 mt-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex justify-center items-center size-5 rounded-full border border-white/10 bg-navy/40">
                    <span className="size-2 rounded-full bg-primary" />
                  </span>
                  <span className="text-muted-foreground text-xs text-gray-400">Hoje, 14:32</span>
                </div>
                <div className="rounded-xl how-chat-bubble-user mt-1.5 w-4/5 border border-white/10 p-3 text-xs text-white">
                  Preciso da figurinha "Ação Climática ODS 13". Alguém tem repetida para trocar?
                </div>
              </div>

              <div>
                <div className="rounded-xl mb-1 ml-auto w-4/5 how-chat-bubble-system p-3 text-xs text-white">
                  Conexão feita! O motorista Pedro S. enviou a figurinha. Voucher de 50L de Etanol liberado!
                </div>
                <span className="text-muted-foreground block text-right text-xs text-gray-400">Agora mesmo</span>
              </div>
            </div>
          </div>

          {/* BLOCO 3: 50 Litros de Etanol */}
          <div className="col-span-full border-t border-b border-white/10 p-8 sm:p-12 bg-gradient-to-r from-accent/5 via-transparent to-secondary/5 flex flex-col items-center justify-center text-center">
            <p className="text-4xl font-extrabold lg:text-7xl text-white tracking-tighter">
              50 Litros de Etanol
            </p>
            <p className="text-gray-400 text-sm mt-3 max-w-md font-medium">
              O incentivo garantido no seu bolso para cada cartela de 24 figurinhas completada.
            </p>
          </div>

          {/* BLOCO 4: Gráfico de Atividade Recharts */}
          <div className="relative col-span-full border-white/10 min-h-[360px] flex flex-col justify-between">
            <div className="absolute z-10 max-w-lg px-6 pr-12 pt-6 md:px-12 md:pt-8 pointer-events-none">
              <span className="text-muted-foreground flex items-center gap-2 text-sm text-gray-400">
                <Activity className="size-4 text-accent" />
                Progresso Global de Compensação
              </span>
              <p className="my-4 text-xl md:text-2xl font-extrabold text-white">
                Acompanhe o volume de carbono compensado em tempo real na plataforma.
              </p>
            </div>
            <div className="mt-32 md:mt-24">
              <MonitoringChart />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Inicializando o mapa de pontos
const mapInstance = new DottedMap({ height: 50, grid: 'diagonal' });
const points = mapInstance.getPoints();

const Map = () => {
  const viewBox = `0 0 120 60`;
  return (
    <svg viewBox={viewBox} className="w-full h-auto text-secondary/30">
      {points.map((point, index) => (
        <circle 
          key={index} 
          cx={point.x} 
          cy={point.y} 
          r={0.18} 
          fill="currentColor" 
        />
      ))}
    </svg>
  );
};

const MonitoringChart = () => {
  return (
    <ChartContainer className="h-64 w-full aspect-auto md:h-80" config={chartConfig}>
      <AreaChart
        data={chartData}
        margin={{
          left: -10,
          right: -10,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="fillCompensado" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-compensado)" stopOpacity={0.4} />
            <stop offset="90%" stopColor="var(--color-compensado)" stopOpacity={0.0} />
          </linearGradient>
          <linearGradient id="fillTotal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-total)" stopOpacity={0.4} />
            <stop offset="90%" stopColor="var(--color-total)" stopOpacity={0.0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(241, 242, 234, 0.05)" vertical={false} />
        <ChartTooltip active cursor={false} content={<ChartTooltipContent />} />
        <Area 
          strokeWidth={2.5} 
          dataKey="total" 
          type="monotone" 
          fill="url(#fillTotal)" 
          stroke="var(--color-total)" 
        />
        <Area 
          strokeWidth={2.5} 
          dataKey="compensado" 
          type="monotone" 
          fill="url(#fillCompensado)" 
          stroke="var(--color-compensado)" 
        />
      </AreaChart>
    </ChartContainer>
  );
};
