import { motion } from 'framer-motion';

const PropertyCard = ({ property, setToast }) => {
  const whatsappMessage = encodeURIComponent('Hello, I am interested in your luxury property project. Please share details.');
  const whatsappUrl = `https://wa.me/15551234567?text=${whatsappMessage}`;
  const mailUrl = `mailto:pcoder573@gmail.com?subject=Property%20Enquiry%20for%20${encodeURIComponent(property.title)}&body=I%20would%20like%20more%20information%20about%20${encodeURIComponent(property.title)}.`;

  return (
    <motion.div
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#04111d] via-[#081432] to-[#0a1d3d] p-6 shadow-glow backdrop-blur-xl"
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.35 }}
    >
      <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-gold/10 blur-2xl" />
      <div className="relative">
        <div className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-gold shadow-sm">{property.location}</div>
        <h3 className="text-2xl font-semibold text-white">{property.title}</h3>
        <p className="mt-3 text-slate-300">{property.interest}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200">{property.budget}</span>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setToast('Use the enquiry form to send a premium email enquiry.');
            setTimeout(() => setToast(null), 3200);
          }}
          className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:-translate-y-1 hover:border-gold/40 hover:text-gold"
        >
          View Details
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full bg-gradient-to-r from-[#22c55e] via-[#2dd4bf] to-[#38bdf8] px-5 py-3 text-sm text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1"
        >
          WhatsApp Enquiry
        </a>
        <a
          href={mailUrl}
          className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:-translate-y-1 hover:border-gold/40 hover:text-gold"
        >
          Email Enquiry
        </a>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
