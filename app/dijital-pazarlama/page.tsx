"use client";

import { motion, AnimatePresence } from "framer-motion";
import { marketingCases } from "@/data/marketingCases";
import { skills } from "@/data/skills";
import React, { useState } from "react";
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiLinkedin, 
  FiGithub, 
  FiDownload, 
  FiExternalLink, 
  FiAward, 
  FiBookOpen, 
  FiBriefcase, 
  FiTrendingUp, 
  FiLayers, 
  FiCheckCircle, 
  FiX, 
  FiMaximize2, 
  FiTarget, 
  FiCpu, 
  FiInstagram, 
  FiPlay,
  FiCompass,
  FiEye,
  FiImage
} from "react-icons/fi";

const accentHex = "#F59E0B"; // Amber / Kehribar Sarısı

export default function DijitalPazarlamaPage() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const mktSkills = skills.filter((s) => s.categories.includes("marketing"));

  const experiences = [
    {
      title: "Freelance Sosyal Medya & Dijital Reklam Hizmetleri",
      company: "B2C & B2B Markalar / İşletmeler",
      period: "01.06.2026 – 01.10.2026",
      details: [
        "Farklı sektörlerdeki işletmelerin ve markaların sosyal medya hesap yönetimi, profesyonel saha/ürün çekimleri, video kurgusu ve Reels içerik süreçlerinin yönetimi.",
        "İçerik planlama takvimi, görsel tasarım, video kurgusu, trend analizi ve paylaşım süreçlerinin uçtan uca yürütülmesi.",
        "Adobe Photoshop, Canva ve CapCut ile özgün kreatif üretimi; Meta Ads ve Google Ads kampanya kurguları, bütçe ve hedef kitle optimizasyonları."
      ]
    },
    {
      title: "Sosyal Medya Yöneticisi",
      company: "Cadasoft",
      period: "01.02.2026 – 01.05.2026",
      details: [
        "Instagram Reels ve sosyal medya içeriklerinin video kurguları ve görsel tasarımları.",
        "Adobe After Effects, Photoshop, Canva ve CapCut kullanarak marka kimliğine uygun görsel ve video içerikler üretme.",
        "Öne çıkan hikaye kapakları ve feed gönderilerinin kurumsal kimliğe uygun hazırlanması."
      ]
    },
    {
      title: "Sosyal Medya & Dijital Pazarlama Ekip Lideri",
      company: "SiberAtay",
      period: "05.06.2020 – 11.07.2022",
      details: [
        "Instagram, X (Twitter), Telegram ve Discord kanallarının uçtan uca yönetimi.",
        "Ekipte Reels içerik formatının kullanımını başlatarak organik etkileşimi artırma.",
        "İçerik üretiminden ekip liderliğine yükselerek Meta reklam kampanyalarının planlama, optimizasyon ve performans takibini koordine etme."
      ]
    }
  ];

  const certs = [
    "BTK Akademi – Google Dijital Pazarlama Temelleri (2026)",
    "BTK Akademi – Sosyal Medya Uzmanlığına Giriş (2026)",
    "BTK Akademi – Arama Motoru Optimizasyonu (SEO) (2026)",
    "BTK Akademi – E-Ticarete Giriş (2026)",
    "YÖK - Marmara Üniversitesi 1 Yıllık Veri Analizi Okulu Programı (2026)",
    "BTK Akademi – Veri Bilimi için Python ve Tensorflow (2026)"
  ];

  const openProject = (p: any) => {
    setSelectedProject(p);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white flex flex-col justify-between selection:bg-amber-600/30 selection:text-white">
      {/* ─── NAVBAR ─── */}
      <header className="sticky top-0 z-50 border-b backdrop-blur-2xl"
        style={{ borderColor: '#1f1f23', backgroundColor: 'rgba(10,10,12,0.85)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-amber-500/30">
              <img src="/profile_real.jpg?v=ultra" alt="Ali Burak Koyun" className="w-full h-full object-cover object-center" />
            </div>
            <div>
              <div className="text-base font-bold tracking-tight text-white">Ali Burak Koyun</div>
              <div className="text-xs text-amber-400 font-mono">Sosyal Medya & Dijital Pazarlama</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#projects"
              className="text-xs sm:text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              Reels & Portfolyo
            </a>
            <a
              href="/cv/digital-marketing-cv.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white shadow-lg transition-all hover:opacity-90"
              style={{ backgroundColor: accentHex, boxShadow: `0 4px 20px ${accentHex}40` }}
            >
              <FiDownload /> CV İndir (PDF)
            </a>
          </div>
        </div>
      </header>

      {/* ─── HERO SECTION ─── */}
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-16">
          <div className="p-8 sm:p-12 rounded-3xl border relative overflow-hidden"
            style={{ backgroundColor: '#121215', borderColor: '#222227' }}>
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ backgroundColor: accentHex }} />

            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 relative z-10">
              {/* Photo */}
              <div className="relative flex-shrink-0">
                <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-3xl overflow-hidden border-2 p-1"
                  style={{ borderColor: '#3f3f46', backgroundColor: '#ffffff' }}>
                  <img src="/profile_real.jpg?v=ultra" alt="Ali Burak Koyun" className="w-full h-full object-cover object-center rounded-[20px]" />
                </div>
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold text-white shadow-lg whitespace-nowrap"
                  style={{ backgroundColor: accentHex }}>
                  Dijital Pazarlama & Sosyal Medya
                </span>
              </div>

              {/* Texts */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-3">
                  Ali Burak Koyun
                </h1>
                <p className="text-base sm:text-xl font-medium mb-4" style={{ color: accentHex }}>
                  Meta Ads, Google Ads & Veri Odaklı Büyüme
                </p>
                <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-2xl mb-8">
                  Yönetim Bilişim Sistemleri mezunuyum. Çocukluğumdan beri sosyal medyanın içindeyim; içerik üretmekten grafik tasarıma, video editlemeden Meta Ads & Google Ads reklam yönetimine kadar tüm süreçlerde uçtan uca derin bir deneyime sahibim. Teknoloji ve veri analitiği altyapımı bu yaratıcı vizyonla birleştirerek markalar için ölçülebilir, yüksek etkileşimli ve performans odaklı büyüme stratejileri yürütüyorum.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-zinc-400 font-mono mb-8">
                  <span className="flex items-center gap-1.5"><FiMapPin /> Fatih / İstanbul</span>
                  <span className="flex items-center gap-1.5"><FiPhone /> +90 505 075 18 16</span>
                  <span className="flex items-center gap-1.5"><FiMail /> aliburak04@hotmail.com</span>
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <a
                    href="/cv/digital-marketing-cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 shadow-lg"
                    style={{ backgroundColor: accentHex, boxShadow: `0 6px 28px ${accentHex}40` }}
                  >
                    <FiEye /> CV Göster (PDF)
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ali-burak-koyun/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border text-zinc-300 hover:text-white transition-colors"
                    style={{ borderColor: '#2d2d35', backgroundColor: '#18181e' }}
                  >
                    <FiLinkedin className="text-base text-blue-400" /> LinkedIn
                  </a>
                  <a
                    href="https://github.com/AspectAliBurak"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border text-zinc-300 hover:text-white transition-colors"
                    style={{ borderColor: '#2d2d35', backgroundColor: '#18181e' }}
                  >
                    <FiGithub className="text-base" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SKILLS ─── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400">
              <FiTrendingUp className="text-xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Dijital Pazarlama & Tasarım Becerileri</h2>
              <p className="text-xs text-zinc-400">Reklam, video kurgu ve sosyal medya süreçlerinde kullandığım araçlar</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {mktSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * i }}
                whileHover={{ y: -4, borderColor: accentHex }}
                className="flex flex-col items-center text-center p-4 rounded-2xl border transition-all duration-300"
                style={{ borderColor: '#222227', backgroundColor: '#131317' }}
              >
                <div className="text-3xl mb-2.5" style={{ color: accentHex }}>{skill.icon}</div>
                <span className="text-xs font-semibold text-zinc-200">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── PORTFOLYO / PROJELER ─── */}
        <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400">
              <FiLayers className="text-xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Sosyal Medya & Reklam Portfolyosu</h2>
              <p className="text-xs text-zinc-400">Reels videolarını, kurguları ve vaka analizlerini incelemek için tıklayın</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {marketingCases.map((project: any, i: number) => (
              <motion.div
                key={project.id || project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                whileHover={{ y: -5 }}
                onClick={() => openProject(project)}
                className="group rounded-2xl border overflow-hidden flex flex-col transition-all duration-300 cursor-pointer"
                style={{ borderColor: '#222227', backgroundColor: '#131317' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${accentHex}60`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${accentHex}15`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#222227';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <div className="h-36 overflow-hidden relative bg-black/60 flex items-center justify-center">
                  {project.imgSrc ? (
                    <img
                      src={project.imgSrc}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-zinc-500 p-4 text-center">
                      <FiInstagram className="text-2xl mb-1 text-zinc-400 group-hover:text-amber-400 transition-colors" />
                      <span className="text-[11px] font-mono text-zinc-400 font-semibold">{project.title}</span>
                    </div>
                  )}
                  {project.category && (
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold text-white backdrop-blur-md"
                      style={{ backgroundColor: `${accentHex}cc` }}>
                      {project.category}
                    </span>
                  )}
                  <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FiMaximize2 className="text-xs" />
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white mb-1.5 leading-snug group-hover:text-amber-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[11px] text-zinc-400 leading-relaxed mb-3 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1 mb-3 pt-2.5 border-t border-white/5">
                      {project.tech.slice(0, 3).map((t: string) => (
                        <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono font-medium"
                          style={{ backgroundColor: '#1b1b21', color: '#cbd5e1' }}>
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-zinc-500">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-semibold pt-1"
                      style={{ color: accentHex }}>
                      <span>{project.videoReels ? 'Reels & Detaylar →' : 'Detaylar →'}</span>
                      {project.videoReels && (
                        <span className="text-[10px] text-pink-400 font-mono flex items-center gap-1">
                          <FiPlay /> {project.videoReels.length}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── DENEYİM ─── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400">
              <FiBriefcase className="text-xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">İş Deneyimi</h2>
              <p className="text-xs text-zinc-400">Sosyal medya ve dijital pazarlama alanındaki kariyer geçmişim</p>
            </div>
          </div>

          <div className="space-y-4">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border transition-all duration-300"
                style={{ borderColor: '#222227', backgroundColor: '#131317' }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-base font-bold text-white">{exp.title}</h3>
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full border border-white/5"
                    style={{ color: accentHex, backgroundColor: `${accentHex}10` }}>
                    {exp.period}
                  </span>
                </div>
                <div className="text-xs font-semibold text-zinc-300 mb-3">{exp.company}</div>
                <ul className="space-y-1.5 text-xs text-zinc-400">
                  {exp.details.map((d, di) => (
                    <li key={di} className="flex items-start gap-2">
                      <span className="text-zinc-600 mt-1">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ─── EĞİTİM & SERTİFİKALAR ─── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-7 rounded-3xl border flex flex-col justify-between"
              style={{ borderColor: '#222227', backgroundColor: '#131317' }}>
              <div>
                <div className="flex items-center gap-2.5 mb-5 text-zinc-200">
                  <FiBookOpen className="text-xl" style={{ color: accentHex }} />
                  <h3 className="text-lg font-bold text-white">Eğitim</h3>
                </div>

                <div className="space-y-5">
                  <div className="border-l-2 pl-4" style={{ borderColor: accentHex }}>
                    <div className="text-sm font-bold text-white">Yönetim Bilişim Sistemleri (Lisans)</div>
                    <div className="text-xs text-zinc-400 mt-0.5">Lisans Derecesi • Mezun</div>
                    <div className="text-xs font-mono text-zinc-500 mt-1">2022 – 2026</div>
                  </div>


                  <div className="border-l-2 pl-4 border-zinc-700">
                    <div className="text-sm font-bold text-white">Samiha Ayverdi Anadolu Lisesi</div>
                    <div className="text-xs text-zinc-500 font-mono mt-1">2018 – 2022</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span>Diller:</span>
                <span className="text-white">Türkçe (Anadil) • İngilizce (B1)</span>
              </div>
            </div>

            <div className="p-7 rounded-3xl border flex flex-col justify-between"
              style={{ borderColor: '#222227', backgroundColor: '#131317' }}>
              <div>
                <div className="flex items-center gap-2.5 mb-5 text-zinc-200">
                  <FiAward className="text-xl" style={{ color: accentHex }} />
                  <h3 className="text-lg font-bold text-white">Sertifikalar</h3>
                </div>

                <div className="space-y-2.5">
                  {certs.map((c, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 p-2.5 rounded-xl border border-white/5"
                      style={{ backgroundColor: '#18181e' }}>
                      <span className="mt-0.5" style={{ color: accentHex }}>✓</span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── MODAL (REELS OYNATICI VE GALERİ İÇERİR) ─── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            style={{ backgroundColor: 'rgba(5, 5, 8, 0.92)', backdropFilter: 'blur(16px)' }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl border text-left shadow-2xl"
              style={{ backgroundColor: '#111115', borderColor: '#26262e' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-30 w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors border border-white/10"
                style={{ backgroundColor: 'rgba(20,20,26,0.85)', backdropFilter: 'blur(8px)' }}
              >
                <FiX className="text-xl" />
              </button>

              <div className="p-6 sm:p-10 space-y-8">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {selectedProject.category && (
                      <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold text-white"
                        style={{ backgroundColor: `${accentHex}cc` }}>
                        {selectedProject.category}
                      </span>
                    )}
                    {selectedProject.storyHighlightUrl && (
                      <a
                        href={selectedProject.storyHighlightUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border border-white/10 text-zinc-300 hover:text-white transition-colors"
                        style={{ backgroundColor: '#181820' }}
                      >
                        <FiCompass className="text-amber-400" /> Öne Çıkan Hikayeler <FiExternalLink className="text-[10px]" />
                      </a>
                    )}
                    {selectedProject.instagramUrl && (
                      <a
                        href={selectedProject.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border border-white/10 text-zinc-300 hover:text-white transition-colors"
                        style={{ backgroundColor: '#181820' }}
                      >
                        <FiInstagram /> Instagram Hesabı <FiExternalLink className="text-[10px]" />
                      </a>
                    )}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
                    {selectedProject.title}
                  </h2>
                  <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Reels Videosu Varsa Yan Yana Grid Player */}
                {selectedProject.videoReels && selectedProject.videoReels.length > 0 && (
                  <div className="pt-2 pb-4">
                    <div className="flex items-center gap-2 mb-5">
                      <FiPlay className="text-pink-400 text-base" />
                      <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white">
                        Kurgulanan Reels & Video İçerikleri ({selectedProject.videoReels.length} Adet)
                      </h3>
                    </div>

                    <div className={`grid grid-cols-1 ${selectedProject.videoReels.length > 2 ? 'sm:grid-cols-2 lg:grid-cols-2' : 'sm:grid-cols-2'} gap-6 max-w-4xl mx-auto`}>
                      {selectedProject.videoReels.map((reel: any, idx: number) => (
                        <div
                          key={idx}
                          className="p-4 rounded-3xl border border-zinc-800 bg-[#16161d] flex flex-col items-center shadow-xl"
                        >
                          <div className="w-full aspect-[9/16] rounded-2xl overflow-hidden bg-black relative border border-white/10 shadow-inner">
                            <video
                              src={reel.videoSrc}
                              poster={reel.poster}
                              controls
                              playsInline
                              preload="metadata"
                              className="w-full h-full object-contain bg-black"
                            />
                          </div>

                          <div className="w-full mt-3.5 flex items-center justify-between text-xs">
                            <span className="font-semibold text-zinc-300">
                              {reel.title}
                            </span>
                            <a
                              href={reel.instagramUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-pink-400 hover:text-pink-300 font-medium"
                            >
                              <FiInstagram /> Gönderiyi Gör ↗
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}



                {/* Reklam Kampanyası Sonuç Paneli */}
                {selectedProject.campaignResultsImg && (
                  <div className="pt-4 border-t border-white/5">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                          <FiTrendingUp className="text-sm" /> Meta Ads Reklam Kampanyası Performans Sonuçları
                        </h3>
                        <p className="text-[11px] text-zinc-400 mt-0.5">
                          Gerçek reklam yöneticisi panelinden canlı kampanya metrikleri ve arama sonuçları
                        </p>
                      </div>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-emerald-500/30 bg-[#0d1512] p-2 sm:p-3 shadow-xl">
                      <img
                        src={selectedProject.campaignResultsImg}
                        alt="Meta Ads Kampanya Sonuçları"
                        className="w-full h-auto object-contain rounded-xl"
                      />
                    </div>
                  </div>
                )}

                {/* Grafik, Post ve Gönderi Galerisi */}
                {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                  <div className="pt-4 border-t border-white/5">
                    <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                      Paylaşılan Yüksek Kaliteli Tasarımlar & Feed Gönderileri
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedProject.gallery.map((img: string, idx: number) => (
                        <div key={idx} className="rounded-2xl overflow-hidden border border-white/10 bg-[#16161d] flex flex-col items-center justify-center p-2 shadow-lg">
                          <img src={img} alt="Tasarım" className="w-full h-auto object-contain rounded-xl hover:scale-[1.02] transition-transform" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Case Study Hikayesi */}
                {selectedProject.fullStory && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/5">
                    <div className="p-5 rounded-2xl border" style={{ backgroundColor: '#15151c', borderColor: '#23232c' }}>
                      <div className="flex items-center gap-2 text-rose-400 font-semibold text-xs font-mono mb-2">
                        <FiTarget className="text-sm" /> PROBLEM & İHTİYAÇ
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {selectedProject.fullStory.problem}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl border" style={{ backgroundColor: '#15151c', borderColor: '#23232c' }}>
                      <div className="flex items-center gap-2 font-semibold text-xs font-mono mb-2" style={{ color: accentHex }}>
                        <FiCpu className="text-sm" /> YAKLAŞIM & METODOLOJİ
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {selectedProject.fullStory.approach}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl border" style={{ backgroundColor: '#15151c', borderColor: '#23232c' }}>
                      <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs font-mono mb-2">
                        <FiTrendingUp className="text-sm" /> SONUÇ & KAZANIMLAR
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {selectedProject.fullStory.results}
                      </p>
                    </div>
                  </div>
                )}

                <div className="space-y-4 pt-4 border-t border-white/5">
                  {selectedProject.highlights && (
                    <div>
                      <h4 className="text-xs font-mono font-semibold text-zinc-400 mb-2 uppercase tracking-wider">
                        Öne Çıkan Başarılar & Metrikler
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedProject.highlights.map((h: string, idx: number) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-zinc-200 p-2.5 rounded-xl border border-white/5"
                            style={{ backgroundColor: '#15151c' }}>
                            <FiCheckCircle style={{ color: accentHex }} className="flex-shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="text-xs font-mono font-semibold text-zinc-400 mb-2 uppercase tracking-wider">
                      Kullanılan Araçlar & Platformlar
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t: string) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium border border-white/5"
                          style={{ backgroundColor: '#171720', color: '#e2e8f0' }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── FOOTER ─── */}
      <footer className="border-t mt-20 pt-16 pb-12" style={{ borderColor: '#1f1f23', backgroundColor: '#0c0c0e' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-3">İletişime Geçin</h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Sosyal medya yönetimi, video kurgu ve reklam kampanyalarınız için dilediğiniz kanaldan ulaşabilirsiniz.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <a href="mailto:aliburak04@hotmail.com"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold border text-white hover:opacity-90"
                style={{ backgroundColor: accentHex }}>
                <FiMail /> aliburak04@hotmail.com
              </a>
              <a href="tel:+905050751816"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold border border-white/10 text-zinc-300 hover:text-white"
                style={{ backgroundColor: '#18181e' }}>
                <FiPhone /> +90 505 075 18 16
              </a>
              <a href="https://www.linkedin.com/in/ali-burak-koyun/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold border border-white/10 text-zinc-300 hover:text-white"
                style={{ backgroundColor: '#18181e' }}>
                <FiLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/AspectAliBurak" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold border border-white/10 text-zinc-300 hover:text-white"
                style={{ backgroundColor: '#18181e' }}>
                <FiGithub /> GitHub
              </a>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 text-center text-xs text-zinc-500 font-mono">
            © {new Date().getFullYear()} Ali Burak Koyun • Sosyal Medya & Dijital Pazarlama Portfolyosu
          </div>
        </div>
      </footer>
    </div>
  );
}
