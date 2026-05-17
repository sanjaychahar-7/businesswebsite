import { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import EnquirySection from './components/EnquirySection';
import AdminDashboard from './components/AdminDashboard';
import LaunchPopup from './components/LaunchPopup';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import { properties } from './data/properties';
import PropertyCard from './components/PropertyCard';
import ContactUs from "./components/ContactUs";

const navLinkClass = ({ isActive }) =>
  `transition-colors duration-300 px-3 py-2 rounded-full ${isActive
    ? 'bg-gold text-midnight'
    : 'text-slate-300 hover:text-white'
  }`;

function App() {
  const [toast, setToast] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-[#020713] via-[#06112b] to-[#0d1d38] text-white">

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl animate-blob"></div>
        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute left-1/2 bottom-20 h-56 w-56 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <LaunchPopup />
      <WhatsAppFloatingButton />

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Header */}
        <header className="mb-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 px-6 py-6 shadow-glow backdrop-blur-xl">

          <div className="flex items-center justify-between">

            {/* Logo + Title */}
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gold">
                Luxury Real Estate
              </p>

              <motion.h1
                className="mt-3 text-3xl font-semibold text-white sm:text-5xl"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                JSKS Enquiry Experience
              </motion.h1>

              {/* <p className="mt-4 max-w-xl text-slate-300">
                Submit a luxury property enquiry, choose a premium contact
                method, and manage enquiries in one polished admin dashboard.
              </p> */}
            </div>

            {/* Mobile Toggle Button */}
            {/* Premium Animated Mobile Toggle Button */}
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              whileHover={{
                scale: 1.08,
                rotate: 2,
              }}
              whileTap={{
                scale: 0.92,
              }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 18,
              }}
              className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/10 shadow-[0_0_40px_rgba(255,255,255,0.12)] backdrop-blur-2xl md:hidden"
            >

              {/* Rotating Neon Glow */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-[-130%] bg-[conic-gradient(at_top_right,_#22d3ee,_#a855f7,_#facc15,_#22d3ee)] opacity-40 blur-2xl"
              />

              {/* Glass Layer */}
              <div className="absolute inset-[1.5px] rounded-[1.3rem] bg-[#081120]/90 backdrop-blur-2xl" />

              {/* Animated Shine */}
              <motion.div
                animate={{
                  x: ['-150%', '150%'],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />

              {/* Floating Glow Dots */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute left-2 top-2 h-2 w-2 rounded-full bg-cyan-400 blur-[2px]"
              />

              <motion.div
                animate={{
                  y: [0, 5, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="absolute bottom-2 right-2 h-2 w-2 rounded-full bg-fuchsia-400 blur-[2px]"
              />

              {/* Hamburger / Close Icon */}
              <div className="relative z-10 flex flex-col gap-[5px]">

                {/* Top Line */}
                <motion.span
                  animate={
                    menuOpen
                      ? {
                        rotate: 45,
                        y: 8,
                        width: 30,
                        backgroundColor: '#facc15',
                      }
                      : {
                        rotate: 0,
                        y: 0,
                        width: 28,
                        backgroundColor: '#ffffff',
                      }
                  }
                  transition={{
                    duration: 0.35,
                  }}
                  className="h-[3px] rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                />

                {/* Middle Line */}
                <motion.span
                  animate={
                    menuOpen
                      ? {
                        opacity: 0,
                        x: -20,
                      }
                      : {
                        opacity: 1,
                        x: 0,
                      }
                  }
                  transition={{
                    duration: 0.25,
                  }}
                  className="h-[3px] w-7 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                />

                {/* Bottom Line */}
                <motion.span
                  animate={
                    menuOpen
                      ? {
                        rotate: -45,
                        y: -8,
                        width: 30,
                        backgroundColor: '#22d3ee',
                      }
                      : {
                        rotate: 0,
                        y: 0,
                        width: 28,
                        backgroundColor: '#ffffff',
                      }
                  }
                  transition={{
                    duration: 0.35,
                  }}
                  className="h-[3px] rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                />
              </div>

              {/* Outer Pulse Ring */}
              <motion.div
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [0.25, 0, 0.25],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 rounded-[1.4rem] border border-cyan-400/40"
              />

              {/* Extra Soft Glow */}
              <div className="absolute inset-0 rounded-[1.4rem] shadow-[0_0_40px_rgba(34,211,238,0.15)]" />
            </motion.button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex flex-wrap items-center gap-3">
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>

              <NavLink to="/contact" className={navLinkClass}>
                ContactUs
              </NavLink>

              <NavLink to="/dashboard" className={navLinkClass}>
                Admin Dashboard
              </NavLink>
            </nav>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35 }}
                className="mt-6 overflow-hidden md:hidden"
              >
                <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                  <NavLink
                    to="/"
                    className={navLinkClass}
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/contact"
                    className={navLinkClass}
                    onClick={() => setMenuOpen(false)}
                  >
                    ContactUs
                  </NavLink>

                  <NavLink
                    to="/dashboard"
                    className={navLinkClass}
                    onClick={() => setMenuOpen(false)}
                  >
                    Admin Dashboard
                  </NavLink>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <main className="space-y-16">
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="grid gap-8 lg:grid-cols-[1.15fr_0.9fr]">

                    <EnquirySection setToast={setToast} />

                    <div className="space-y-6">

                      {/* Contact Options */}
                      <motion.div
                        className="rounded-[2rem] border border-white/10 bg-slate-950/30 p-6 shadow-glow backdrop-blur-xl"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        <p className="text-sm uppercase tracking-[0.25em] text-gold">
                          Contact Options
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold">
                          Choose a refined way to connect
                        </h2>

                        <p className="mt-3 text-slate-300">
                          Select email, WhatsApp, phone call, or schedule a
                          meeting with our luxury enquiry concierge.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                          {[
                            {
                              title: 'Email Enquiry',
                              description:
                                'Send a premium email request directly.',
                              action: 'mailto:admin@example.com',
                            },
                            {
                              title: 'WhatsApp Enquiry',
                              description:
                                'Start a live luxury property chat.',
                              action:
                                'https://wa.me/15551234567?text=Hello',
                            },
                            {
                              title: 'Direct Call',
                              description:
                                'Speak with our agent instantly.',
                              action: 'tel:+15551234567',
                            },
                            {
                              title: 'Book Meeting',
                              description:
                                'Arrange a private consultation.',
                              action: 'https://calendly.com',
                            },
                          ].map((item, index) => (
                            <motion.a
                              key={item.title}
                              href={item.action}
                              target="_blank"
                              rel="noreferrer"
                              className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-gold/40 hover:bg-white/10"
                              whileHover={{ y: -4 }}
                              transition={{
                                duration: 0.2,
                                delay: index * 0.05,
                              }}
                            >
                              <h3 className="text-lg font-semibold text-white group-hover:text-gold">
                                {item.title}
                              </h3>

                              <p className="mt-3 text-slate-400">
                                {item.description}
                              </p>
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>

                      {/* Properties */}
                      <motion.div
                        className="rounded-[2rem] border border-white/10 bg-slate-950/30 p-6 shadow-glow backdrop-blur-xl"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.35 }}
                      >
                        <p className="text-sm uppercase tracking-[0.25em] text-gold">
                          Featured Projects
                        </p>

                        <div className="mt-7 space-y-4">
                          {properties.map((property) => (
                            <PropertyCard
                              key={property.id}
                              property={property}
                              setToast={setToast}
                            />
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.section>
              </main>
            }
          />

          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>

      {/* Toast */}
      {toast ? (
        <div className="fixed bottom-6 right-6 rounded-3xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-xl">
          <p className="text-sm text-slate-300">{toast}</p>
        </div>
      ) : null}
    </div>
  );
}

export default App;