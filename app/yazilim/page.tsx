"use client";

import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
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
  FiCode, 
  FiLayers, 
  FiCheckCircle, 
  FiX, 
  FiMaximize2, 
  FiTarget, 
  FiTrendingUp, 
  FiCpu,
  FiEye 
} from "react-icons/fi";

const accentHex = "#8B5CF6";

export default function YazilimPage() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [selectedImg, setSelectedImg] = useState<string>("");

  const swSkills = skills.filter((s) => s.categories.includes("software"));

  const experiences = [
    {
      title: "Freelancer (Yazılım Geliştirme)",
      company: "Serbest Çalışan",
      period: "01.03.2026 – 01.07.2026",
      details: [
        "Web siteleri ve masaüstü/mobil uygulama projelerinde ihtiyaç analizi, UI kodlama ve süreç yönetimi.",
        "Görsel raporlama, kullanıcı deneyimi ve dijital süreçlerin takibi üzerine uçtan uca çalışmalar."
      ]
    },
    {
      title: "Yazılım Geliştirme Stajyeri",
      company: "Hobim",
      period: "07.07.2025 – 04.08.2025",
      details: [
        "Hobim şirketinin yazılım ekibinde C# ile kurumsal masaüstü iş programları geliştirme.",
        "Microsoft SQL Server ile veritabanı tasarımı, T-SQL sorguları, nesne tabanlı programlama (OOP) ve veri erişim katmanı optimizasyonları."
      ]
    }
  ];

  const certs = [
    "Turkcell – Python Programlama Kursu (2024)",
    "BTK Akademi – Veri Bilimi için Python ve Tensorflow (2026)",
    "YÖK - Marmara Üniversitesi 1 Yıllık Veri Analizi Okulu Programı (2026)"
  ];

  const openProject = (p: any) => {
    setSelectedProject(p);
    setSelectedImg(p.imgSrc);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white flex flex-col justify-between selection:bg-purple-600/30 selection:text-white">
      {/* ─── NAVBAR ─── */}
      <header className="sticky top-0 z-50 border-b backdrop-blur-2xl"
        style={{ borderColor: '#1f1f23', backgroundColor: 'rgba(10,10,12,0.85)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-purple-500/30">
              <img src="/profile.jpg" alt="Ali Burak Koyun" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-base font-bold tracking-tight text-white">Ali Burak Koyun</div>
              <div className="text-xs text-purple-400 font-mono">Yazılım Geliştirici</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#projects"
              className="text-xs sm:text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              Projeler
            </a>
            <a
              href="/cv/software-developer-cv.pdf"
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
                  style={{ borderColor: '#3f3f46', backgroundColor: '#18181f' }}>
                  <img src="/profile.jpg" alt="Ali Burak Koyun" className="w-full h-full object-cover rounded-[20px]" />
                </div>
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold text-white shadow-lg whitespace-nowrap"
                  style={{ backgroundColor: accentHex }}>
                  Yazılım Geliştirici
                </span>
              </div>

              {/* Texts */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-3">
                  Ali Burak Koyun
                </h1>
                <p className="text-base sm:text-xl font-medium mb-4" style={{ color: accentHex }}>
                  C#, Python & Nesne Tabanlı Programlama
                </p>
                <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-2xl mb-8">
                  Yönetim Bilişim Sistemleri mezunuyum. C# (Windows Forms, OOP), Python ve Microsoft SQL Server odaklı kurumsal iş uygulamaları, masaüstü otomasyon sistemleri ve veritabanı mimarileri geliştiriyorum.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-zinc-400 font-mono mb-8">
                  <span className="flex items-center gap-1.5"><FiMapPin /> Fatih / İstanbul</span>
                  <span className="flex items-center gap-1.5"><FiPhone /> +90 505 075 18 16</span>
                  <span className="flex items-center gap-1.5"><FiMail /> aliburak04@hotmail.com</span>
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <a
                    href="/cv/software-developer-cv.pdf"
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
            <div className="p-2.5 rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-400">
              <FiCode className="text-xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Teknolojiler & Beceriler</h2>
              <p className="text-xs text-zinc-400">Yazılım projelerimde aktif olarak kullandığım araçlar ve diller</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {swSkills.map((skill, i) => (
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
            <div className="p-2.5 rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-400">
              <FiLayers className="text-xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Yazılım Portfolyosu</h2>
              <p className="text-xs text-zinc-400">Projelerin detaylarını, arayüz görsellerini ve vaka analizini incelemek için karta tıklayın</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project: any, i: number) => (
              <motion.div
                key={project.id || project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i }}
                whileHover={{ y: -6 }}
                onClick={() => openProject(project)}
                className="group rounded-3xl border overflow-hidden flex flex-col transition-all duration-300 cursor-pointer"
                style={{ borderColor: '#222227', backgroundColor: '#131317' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${accentHex}60`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 36px ${accentHex}15`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#222227';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <div className="h-48 overflow-hidden relative bg-black/40">
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-mono font-semibold text-white backdrop-blur-md"
                    style={{ backgroundColor: `${accentHex}cc` }}>
                    {project.category}
                  </span>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FiMaximize2 className="text-xs" />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {project.highlights && (
                      <div className="mb-4 space-y-1">
                        {project.highlights.slice(0, 2).map((h: string) => (
                          <div key={h} className="flex items-center gap-1.5 text-xs text-zinc-300">
                            <FiCheckCircle style={{ color: accentHex }} />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-white/5">
                      {project.tech.map((t: string) => (
                        <span key={t} className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium"
                          style={{ backgroundColor: '#1b1b21', color: '#cbd5e1' }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs font-semibold pt-1"
                      style={{ color: accentHex }}>
                      <span>Detayları & Ekran Görüntülerini Gör →</span>
                      {project.gallery && (
                        <span className="text-[11px] text-zinc-500 font-mono">
                          {project.gallery.length} Görsel
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
            <div className="p-2.5 rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-400">
              <FiBriefcase className="text-xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">İş Deneyimi</h2>
              <p className="text-xs text-zinc-400">Yazılım alanındaki profesyonel iş ve staj geçmişim</p>
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

                  <div className="border-l-2 pl-4 border-emerald-500/60">
                    <div className="text-sm font-bold text-white">Marmara Üniversitesi</div>
                    <div className="text-xs text-zinc-300 mt-0.5">Veri Analizi Okulu (1 Yıllık Yoğun Program)</div>
                    <div className="text-xs text-zinc-400 mt-1">Python, SQL, Power BI, Veri Modelleme & Algoritmalar</div>
                    <div className="text-xs font-mono text-emerald-400 mt-1">Başarıyla Tamamlandı • 2026</div>
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

      {/* ─── MODAL ─── */}
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

              <div className="relative">
                <div className="h-64 sm:h-80 md:h-[420px] w-full overflow-hidden bg-black/60 flex items-center justify-center">
                  <img
                    src={selectedImg}
                    alt={selectedProject.title}
                    className="w-full h-full object-contain md:object-cover transition-all duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#111115] via-transparent to-transparent pointer-events-none" />

                {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                  <div className="absolute bottom-4 left-6 right-6 flex items-center gap-2.5 overflow-x-auto pb-2">
                    {selectedProject.gallery.map((img: string, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImg(img)}
                        className="flex-shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-transform duration-200 hover:scale-105 bg-black/40"
                        style={{ borderColor: selectedImg === img ? accentHex : 'rgba(255,255,255,0.25)' }}
                      >
                        <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-10 space-y-8">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold text-white"
                      style={{ backgroundColor: `${accentHex}cc` }}>
                      {selectedProject.category}
                    </span>
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border border-white/10 text-zinc-300 hover:text-white hover:border-white/30 transition-colors"
                        style={{ backgroundColor: '#181820' }}
                      >
                        <FiGithub /> GitHub <FiExternalLink className="text-[10px]" />
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
                        Öne Çıkan Başarılar & Nitelikler
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
                      Kullanılan Teknolojiler
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
              Yazılım projeleriniz ve iş fırsatları için dilediğiniz kanaldan ulaşabilirsiniz.
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
            © {new Date().getFullYear()} Ali Burak Koyun • Yazılım Geliştirici Portfolyosu
          </div>
        </div>
      </footer>
    </div>
  );
}
