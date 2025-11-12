"use client";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 via-purple-50 to-amber-100 py-8 px-4 sm:py-12 sm:px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
      </div>

      <main className="mx-auto max-w-5xl relative z-10">
        <section className="invitation-card relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/95 via-white/90 to-pink-50/80 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl animate-fade-up border border-white/50">
          {/* decorative floating petals */}
          <div className="petal p1" aria-hidden />
          <div className="petal p2" aria-hidden />
          <div className="petal p3" aria-hidden />
          <div className="petal p4" aria-hidden />
          <div className="petal p5" aria-hidden />
          <div className="petal p6" aria-hidden />

          {/* Decorative corner elements */}
          <div className="corner-decor corner-tl" />
          <div className="corner-decor corner-tr" />
          <div className="corner-decor corner-bl" />
          <div className="corner-decor corner-br" />

          <header className="flex flex-col items-center gap-3 sm:gap-4 text-center mb-8 mt-16 ">

            <div className="space-y-10">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto" />
              <h2 className="text-xs sm:text-sm uppercase tracking-[0.3em] text-rose-600 font-medium">Undangan Pernikahan</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto" />
            </div>
            <h1 className="name-script text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-rose-700 via-pink-600 to-purple-700 bg-clip-text text-transparent leading-tight px-4">
              Muhammad Hubbi El Fairuz
              <span className="block text-2xl sm:text-4xl my-2 text-rose-500">&</span>
              Aida Nur Fajriani
            </h1>
            <div className="flex items-center gap-2 text-sm sm:text-base text-zinc-700 bg-gradient-to-r from-rose-50 to-purple-50 px-6 py-3 rounded-full shadow-sm">
              <span className="text-lg">📅</span>
              <p>Sabtu, 10 Januari 2026 • 10:00 WIB</p>
            </div>
          </header>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="content-card">
                <h3 className="mb-3 text-xl font-semibold bg-gradient-to-r from-rose-700 to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
                  <span className="text-2xl">💒</span> Acara
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  Dengan penuh suka cita kami mengundang Bapak/Ibu/Saudara/i untuk
                  hadir dalam acara pernikahan kami. Bertempat di Gedung Serbaguna
                  Melati — Jl. Mawar No. 45, Bandung.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="info-card group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl group-hover:animate-bounce">⏰</span>
                    <p className="text-sm font-semibold text-rose-700">Waktu</p>
                  </div>
                  <p className="text-zinc-700 text-sm leading-relaxed">
                    <strong className="text-purple-600">10:00</strong> — Akad Nikah<br/>
                    <strong className="text-purple-600">12:00</strong> — Resepsi
                  </p>
                </div>
                <div className="info-card group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl group-hover:animate-bounce">📍</span>
                    <p className="text-sm font-semibold text-rose-700">Lokasi</p>
                  </div>
                  <a
                    className="text-purple-600 hover:text-rose-600 text-sm font-medium hover:underline transition-colors"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    Gedung Serbaguna Melati<br />Jl. Mawar No. 45, Bandung
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="mailto:RSVP@example.com?subject=Konfirmasi%20Kehadiran%20-%20Muhammad%20%26%20Aida"
                  className="cta-button cta-primary group"
                  aria-label="Konfirmasi Kehadiran via email"
                >
                  <span className="group-hover:scale-110 inline-block transition-transform">✉️</span>
                  <span>Konfirmasi Kehadiran</span>
                </a>
                <a
                  href="#"
                  className="cta-button cta-secondary group"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="group-hover:scale-110 inline-block transition-transform">📅</span>
                  <span>Tambahkan ke Kalender</span>
                </a>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="sidebar-card">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">👔</span>
                  <h4 className="text-base font-semibold text-rose-800">Dress Code</h4>
                </div>
                <p className="text-sm text-zinc-700 bg-gradient-to-r from-rose-50 to-purple-50 p-3 rounded-lg">
                  Batik / Kemeja rapi
                </p>
              </div>

              <div className="sidebar-card">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">📱</span>
                  <h4 className="text-base font-semibold text-rose-800">Kontak</h4>
                </div>
                <div className="space-y-2">
                  <a href="tel:089517164916" className="contact-link">
                    <span className="font-medium text-purple-600">Hubbi</span>
                    <span className="text-zinc-600">0895-1716-4916</span>
                  </a>
                  <a href="tel:088212926540" className="contact-link">
                    <span className="font-medium text-rose-600">Aida</span>
                    <span className="text-zinc-600">0882-1292-6540</span>
                  </a>
                </div>
              </div>

              <div className="sidebar-card bg-gradient-to-br from-amber-50 to-orange-50">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🎁</span>
                  <h4 className="text-base font-semibold text-amber-800">Hadiah</h4>
                </div>
                <p className="text-xs text-zinc-600 italic">
                  Doa restu Anda adalah hadiah terindah bagi kami
                </p>
              </div>
            </aside>
          </div>

          <section className="mt-8 content-card">
            <h3 className="mb-6 text-xl font-semibold bg-gradient-to-r from-rose-700 to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
              <span className="text-2xl">⏳</span> Jadwal Acara
            </h3>
            <div className="timeline space-y-4">
              <div className="timeline-item">
                <div className="timeline-marker">1</div>
                <div className="timeline-content">
                  <div className="timeline-time">10:00 WIB</div>
                  <div className="timeline-title">Akad Nikah</div>
                  <p className="text-xs text-zinc-600">Prosesi sakral pernikahan</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">2</div>
                <div className="timeline-content">
                  <div className="timeline-time">11:30 WIB</div>
                  <div className="timeline-title">Sesi Foto Keluarga</div>
                  <p className="text-xs text-zinc-600">Bersama keluarga besar</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">3</div>
                <div className="timeline-content">
                  <div className="timeline-time">12:00 WIB</div>
                  <div className="timeline-title">Resepsi & Jamuan</div>
                  <p className="text-xs text-zinc-600">Makan siang bersama</p>
                </div>
              </div>
            </div>
          </section>

          <footer className="mt-10 text-center space-y-3">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto" />
            <p className="text-zinc-600 italic text-sm sm:text-base px-4">
              "Dengan hormat, kami menantikan kehadiran Anda untuk berbagi kebahagiaan bersama"
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-zinc-500">
              <span className="text-xl">💕</span>
              <p className="font-medium bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                Hubbi & Aida
              </p>
              <span className="text-xl">💕</span>
            </div>
            <p className="text-xs text-zinc-400">10 Januari 2026</p>
          </footer>
        </section>
      </main>
    </div>
  );
}
