import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, FileCheck2, Layers3, ShieldCheck } from 'lucide-react';

import certQuality1 from '@/imports/about/certificates/cert-quality-1.webp';
import certQuality2 from '@/imports/about/certificates/cert-quality-2.webp';
import certTrts1 from '@/imports/about/certificates/cert-trts-1.webp';
import certTrts2 from '@/imports/about/certificates/cert-trts-2.webp';
import certTrts3 from '@/imports/about/certificates/cert-trts-3.webp';
import certTrts4 from '@/imports/about/certificates/cert-trts-4.webp';
import certWelding1 from '@/imports/about/certificates/cert-welding-1.webp';
import certWelding2 from '@/imports/about/certificates/cert-welding-2.webp';
import certWelding3 from '@/imports/about/certificates/cert-welding-3.webp';
import certWelding4 from '@/imports/about/certificates/cert-welding-4.webp';
import pattern from '@/imports/pattern.svg';
import { PhotoViewer, PhotoViewerImage } from './PhotoViewer';

type CertificateGroup = {
  code: string;
  title: string;
  description: string;
  icon: typeof ShieldCheck;
  images: PhotoViewerImage[];
};

const certificateGroups: CertificateGroup[] = [
  {
    code: '01',
    title: 'Сертификация ТР ТС',
    description:
      'Первые листы сертификатов ЕАЭС по выпускаемому оборудованию и комплектующим.',
    icon: ShieldCheck,
    images: [
      { src: certTrts1, alt: 'Сертификат ТР ТС — диафрагмы ограничительные' },
      { src: certTrts2, alt: 'Сертификат ТР ТС — монтажные вставки' },
      { src: certTrts3, alt: 'Сертификат ТР ТС — пароперегреватели' },
      { src: certTrts4, alt: 'Сертификат ТР ТС — сосуды и аппараты' },
    ],
  },
  {
    code: '02',
    title: 'Система менеджмента качества',
    description:
      'Документы, подтверждающие систему менеджмента качества и соответствие отраслевым требованиям.',
    icon: FileCheck2,
    images: [
      { src: certQuality2, alt: 'Сертификат соответствия отраслевым требованиям' },
      { src: certQuality1, alt: 'Сертификат ИСО 9001' },
    ],
  },
  {
    code: '03',
    title: 'Аттестация технологий сварки',
    description:
      'Первые листы аттестаций НАКС по применяемым сварочным технологиям.',
    icon: Layers3,
    images: [
      { src: certWelding1, alt: 'Аттестация технологии сварки НАКС — документ 1' },
      { src: certWelding2, alt: 'Аттестация технологии сварки НАКС — документ 2' },
      { src: certWelding3, alt: 'Аттестация технологии сварки НАКС — документ 3' },
      { src: certWelding4, alt: 'Аттестация технологии сварки НАКС — документ 4' },
    ],
  },
];

export function AboutCertificatesSection() {
  const [activeGroupIndex, setActiveGroupIndex] = useState<number | null>(null);

  const activeGroup = activeGroupIndex === null ? null : certificateGroups[activeGroupIndex];

  return (
    <section className="relative overflow-hidden bg-[#eef0f1] px-6 py-24 sm:px-10 lg:px-16">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(80,98,108,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(80,98,108,0.08)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div
        className="absolute -right-28 top-20 h-[520px] w-[520px] opacity-[0.055]"
        style={{
          backgroundColor: '#263740',
          maskImage: `url(${pattern})`,
          maskSize: '170px 170px',
          WebkitMaskImage: `url(${pattern})`,
          WebkitMaskSize: '170px 170px',
        }}
      />
      <div className="absolute left-0 top-0 h-full w-[18vw] skew-x-[-16deg] bg-[#50626c]/8" />

      <div className="relative mx-auto max-w-[1680px]">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#50626c]">
              Документы
            </div>
            <h2
              className="max-w-3xl text-[#263740]"
              style={{
                fontSize: 'clamp(36px, 5.2vw, 74px)',
                fontWeight: 800,
                letterSpacing: '-0.06em',
                lineHeight: 0.96,
              }}
            >
              Сертификаты и подтверждения
            </h2>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {certificateGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.button
                key={group.title}
                type="button"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                onClick={() => setActiveGroupIndex(index)}
                className="group relative flex min-h-[680px] flex-col overflow-hidden border border-[#50626c]/12 bg-white text-left shadow-[0_24px_80px_rgba(38,55,64,0.1)] transition-all duration-500 hover:-translate-y-1 hover:border-[#50626c]/30"
              >
                <div className="absolute right-0 top-0 h-full w-24 skew-x-[-18deg] bg-[#50626c]/6 transition-colors duration-500 group-hover:bg-[#50626c]/12" />

                <div className="relative shrink-0 p-7 pb-4 sm:p-8 sm:pb-5">
                  <div className="mb-10 flex items-start justify-between">
                    <div className="text-sm font-black tracking-[0.16em] text-[#50626c]/55">
                      {group.code}
                    </div>
                    <div className="flex h-14 w-14 rotate-45 items-center justify-center bg-[#263740] text-white transition-transform duration-500 group-hover:rotate-[60deg]">
                      <Icon className="-rotate-45" size={24} strokeWidth={1.6} />
                    </div>
                  </div>

                  <h3 className="max-w-sm text-3xl font-extrabold leading-[1.05] tracking-[-0.05em] text-[#263740]">
                    {group.title}
                  </h3>
                </div>

                <div className="relative mt-auto p-5 pt-0 sm:p-6 sm:pt-0">
                  <div className="relative h-[335px] overflow-hidden border-t border-[#50626c]/12 pt-8">
                    {group.images.slice(0, 3).map((image, imageIndex) => (
                      <img
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        className="absolute bottom-0 h-[285px] w-[200px] border border-[#50626c]/12 bg-white object-cover shadow-[0_22px_50px_rgba(38,55,64,0.18)] transition-transform duration-500 group-hover:-translate-y-2"
                        style={{
                          left: `${imageIndex * 62}px`,
                          transform: `rotate(${(imageIndex - 1) * 5}deg) translateY(${imageIndex * 8}px)`,
                          zIndex: 3 - imageIndex,
                        }}
                      />
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-end border-t border-[#50626c]/12 pt-5">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-[#263740]">
                      Смотреть
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {activeGroup && (
        <PhotoViewer
          images={activeGroup.images}
          initialIndex={0}
          onClose={() => setActiveGroupIndex(null)}
        />
      )}
    </section>
  );
}
