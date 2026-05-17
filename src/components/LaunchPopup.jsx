// import { useEffect, useState } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';

// const LaunchPopup = () => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const showTimer = window.setTimeout(() => setVisible(true), 500);
//     const hideTimer = window.setTimeout(() => setVisible(false), 5200);
//     return () => {
//       window.clearTimeout(showTimer);
//       window.clearTimeout(hideTimer);
//     };
//   }, []);

//   return (
//     <AnimatePresence>
//       {visible ? (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9, y: 20 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           exit={{ opacity: 0, scale: 0.9, y: 20 }}
//           transition={{ duration: 0.45, ease: 'easeOut' }}
//           className="pointer-events-none fixed left-1/2 top-20 z-50 w-[92vw] max-w-xl -translate-x-1/2 rounded-[2rem] border border-white/20 bg-gradient-to-r from-fuchsia-500/20 via-sky-500/15 to-gold/10 p-5 text-white shadow-[0_30px_90px_rgba(59,130,246,0.18)] backdrop-blur-2xl"
//         >
//           <div className="flex items-center gap-4">
//             <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white/10 ring-1 ring-white/20 text-2xl">✨</div>
//             <div>
//               <p className="text-xs uppercase tracking-[0.35em] text-slate-200">Special Access</p>
//               <h3 className="mt-2 text-2xl font-semibold text-white">Welcome to the Luxury Enquiry Lounge</h3>
//               <p className="mt-2 text-sm text-slate-200">A glamorous pop-up view with premium styling and instant access to premium support.</p>
//             </div>
//           </div>
//         </motion.div>
//       ) : null}
//     </AnimatePresence>
//   );
// };

// export default LaunchPopup;


import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const LaunchPopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = window.setTimeout(() => setVisible(true), 500);

    const hideTimer = window.setTimeout(() => {
      setVisible(false);
    }, 6500);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{
            opacity: 0,
            y: -250,
            scale: 0.9,
            rotate: -4,
          }}
          animate={{
            opacity: 1,
            y: ['0vh', '18vh', '36vh', '52vh'],
            rotate: [0, 1.5, -1.5, 0],
            scale: [0.9, 1, 1.02, 1],
          }}
          exit={{
            opacity: 0,
            y: '90vh',
            scale: 0.85,
          }}
          transition={{
            duration: 5.5,
            ease: 'easeInOut',
          }}
          className="pointer-events-none fixed left-1/2 top-6 z-50 w-[94vw] max-w-md -translate-x-1/2 overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br from-[#22c55e]/30 via-[#facc15]/20 via-[#fb7185]/20 to-[#f97316]/30 p-[1px] shadow-[0_25px_90px_rgba(251,146,60,0.25)] backdrop-blur-3xl sm:max-w-xl"
        >

          {/* Animated Outer Glow */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-[-120%] bg-[conic-gradient(at_top_right,_#22c55e,_#facc15,_#fb7185,_#f97316,_#22c55e)] opacity-30 blur-3xl"
          />

          {/* Glass Layer */}
          <div className="relative overflow-hidden rounded-[2rem] bg-[#07111f]/85 p-5 backdrop-blur-3xl sm:p-6">

            {/* Animated Shine */}
            <motion.div
              animate={{
                x: ['-120%', '120%'],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />

            {/* Floating Glow Dots */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute left-3 top-3 h-3 w-3 rounded-full bg-yellow-300 blur-[2px]"
            />

            <motion.div
              animate={{
                y: [0, 8, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="absolute bottom-4 right-4 h-3 w-3 rounded-full bg-pink-400 blur-[2px]"
            />

            <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center">

              {/* Icon */}
              <motion.div
                animate={{
                  rotate: [0, 8, -8, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-[#22c55e] via-[#facc15] to-[#fb7185] text-2xl shadow-[0_0_30px_rgba(250,204,21,0.4)]"
              >
                ✨
              </motion.div>

              {/* Content */}
              <div className="flex-1">

                <motion.p
                  animate={{
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="text-[10px] uppercase tracking-[0.35em] text-yellow-200 sm:text-xs"
                >
                  Special Access
                </motion.p>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-2 text-lg font-bold leading-snug text-white sm:text-2xl"
                >
                  Welcome to the Luxury Enquiry Lounge
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="mt-2 text-xs leading-relaxed text-slate-200 sm:text-sm"
                >
                  A glamorous pop-up view with premium styling and instant access to premium support.
                </motion.p>

              </div>
            </div>

            {/* Bottom Glow Line */}
            <motion.div
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent"
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default LaunchPopup;