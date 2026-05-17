import { motion } from 'framer-motion';

const SuccessModal = ({ onClose }) => (
  <motion.div
    className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/80 p-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="w-full max-w-xl rounded-[2rem] border border-gold/20 bg-[#071021] p-8 text-center shadow-glow backdrop-blur-xl"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold/10 text-4xl text-gold">✅</div>
      <h3 className="mt-6 text-3xl font-semibold text-white">Enquiry Confirmed</h3>
      <p className="mt-4 text-slate-300">Your enquiry is now in our premium pipeline. Our luxury property advisor will connect with you shortly.</p>
      <button
        onClick={onClose}
        className="mt-8 rounded-full bg-gold px-8 py-3 text-midnight transition hover:shadow-xl"
      >
        Continue browsing
      </button>
    </motion.div>
  </motion.div>
);

export default SuccessModal;
