import React from 'react';
import { Mic, Headphones, Play, ExternalLink, Radio } from 'lucide-react';
import { SectionBadge } from './SectionBadge';
import { SPOTIFY_PODCAST_LINK, PODCAST_NAME } from '../data/config';

/* Spotify SVG icon */
const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const episodeHighlights = [
  {
    num: '01',
    title: 'Ansiedade no cotidiano: como reconhecer e agir',
    duration: 'Comportamento',
  },
  {
    num: '02',
    title: 'A relação entre emoções e alimentação compulsiva',
    duration: 'Alimentação',
  },
  {
    num: '03',
    title: 'Mindfulness e regulação emocional na prática',
    duration: 'DBT',
  },
  {
    num: '04',
    title: 'Como a TCC pode transformar seus hábitos',
    duration: 'TCC',
  },
];

const tagColors: Record<string, string> = {
  'Comportamento': 'bg-brand-teal-veryLight text-brand-teal border-brand-teal/30',
  'Alimentação':   'bg-brand-coral-soft text-brand-coral border-brand-coral/30',
  'DBT':           'bg-sky-100 text-sky-700 border-sky-300',
  'TCC':           'bg-brand-teal-veryLight text-brand-teal border-brand-teal/30',
};

export const PodcastSection: React.FC = () => {
  return (
    <section id="podcast" className="py-16 md:py-24 bg-brand-dark relative overflow-hidden">

      {/* ── Decorative background glows ── */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-56 h-56 bg-green-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* ── Left Column: Podcast Identity (5 cols) ── */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-7">

            <SectionBadge text="🎙️ Podcast" variant="green" className="border-brand-teal/40 bg-brand-teal/10 text-brand-teal-light" />

            <div className="space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                {PODCAST_NAME}
              </h2>
              <p className="font-sans text-base sm:text-lg text-white/70 leading-relaxed">
                Uma conversa honesta sobre saúde mental, emoções e comportamento humano no contexto da vida moderna. Episódios práticos para quem quer entender a mente e transformar hábitos.
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 text-left">
              {[
                { icon: <Mic className="w-4 h-4" />, label: 'Episódios', value: 'No Spotify' },
                { icon: <Headphones className="w-4 h-4" />, label: 'Conteúdo gratuito', value: 'Acesso livre' },
                { icon: <Radio className="w-4 h-4" />, label: 'Especialidade', value: 'Saúde Mental' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2.5 text-white/60">
                  <span className="w-8 h-8 rounded-lg bg-brand-teal/20 text-brand-teal-light flex items-center justify-center flex-shrink-0">
                    {stat.icon}
                  </span>
                  <div>
                    <p className="font-sans text-[11px] text-white/40 leading-none">{stat.label}</p>
                    <p className="font-sans text-xs font-semibold text-white/70 leading-tight mt-0.5">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Primary Spotify CTA */}
            <a
              href={SPOTIFY_PODCAST_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#1DB954] hover:bg-[#1ed760] text-white font-semibold text-sm transition-all duration-300 shadow-[0_8px_30px_rgba(29,185,84,0.40)] hover:shadow-[0_8px_30px_rgba(29,185,84,0.60)] hover:-translate-y-0.5 active:scale-95"
            >
              <SpotifyIcon className="w-5 h-5 flex-shrink-0" />
              <span>Ouvir no Spotify</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Secondary subtle link */}
            <p className="font-sans text-xs text-white/35 leading-relaxed max-w-sm">
              Disponível gratuitamente no Spotify. Novos episódios sobre comportamento, ansiedade, DBT e saúde mental.
            </p>
          </div>

          {/* ── Right Column: Episode Cards (7 cols) ── */}
          <div className="lg:col-span-7 space-y-3">

            {/* Player Preview Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 mb-5 flex items-center gap-4">
              {/* Fake waveform / album art placeholder */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1DB954] via-emerald-600 to-brand-teal-dark flex items-center justify-center flex-shrink-0 shadow-md">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-sans text-[11px] text-white/40 uppercase tracking-wider mb-0.5">Podcast em destaque</p>
                <p className="font-serif text-base font-bold text-white leading-tight truncate">{PODCAST_NAME}</p>
                <p className="font-sans text-xs text-white/50 mt-0.5">Erica Luena • Psicóloga Clínica</p>
              </div>
              <a
                href={SPOTIFY_PODCAST_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#1DB954] hover:bg-[#1ed760] flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-md flex-shrink-0"
                aria-label="Ouvir no Spotify"
              >
                <Play className="w-4 h-4 text-white ml-0.5" />
              </a>
            </div>

            {/* Episode List */}
            <p className="font-sans text-[11px] text-white/35 uppercase tracking-widest px-1">Temas abordados</p>
            <div className="space-y-2.5">
              {episodeHighlights.map((ep, i) => (
                <a
                  key={i}
                  href={SPOTIFY_PODCAST_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/20 transition-all duration-200 cursor-pointer"
                >
                  {/* Episode number */}
                  <span className="font-serif text-xs font-bold text-white/30 group-hover:text-white/50 transition-colors w-5 flex-shrink-0">
                    {ep.num}
                  </span>

                  {/* Play icon (shows on hover) */}
                  <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-[#1DB954] flex items-center justify-center transition-all duration-200 flex-shrink-0">
                    <Play className="w-3 h-3 text-white ml-0.5" />
                  </div>

                  {/* Title */}
                  <span className="font-sans text-sm text-white/70 group-hover:text-white transition-colors flex-1 leading-snug">
                    {ep.title}
                  </span>

                  {/* Tag */}
                  <span className={`hidden sm:inline-flex text-[10px] font-semibold px-2.5 py-1 rounded-full border ${tagColors[ep.duration]} flex-shrink-0`}>
                    {ep.duration}
                  </span>
                </a>
              ))}
            </div>

            {/* More episodes link */}
            <a
              href={SPOTIFY_PODCAST_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 w-fit text-xs text-white/40 hover:text-[#1DB954] font-medium transition-colors duration-200 group"
            >
              <SpotifyIcon className="w-3.5 h-3.5 group-hover:text-[#1DB954]" />
              <span>Ver todos os episódios no Spotify</span>
              <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

