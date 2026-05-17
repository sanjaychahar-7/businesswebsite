import { motion } from 'framer-motion';

const WhatsAppFloatingButton = () => {
  // Sample dynamic data (later you can replace with form state)
  const name = '';
  const address = '';
  const mobile = '';
  const email = '';
  const appointmentTime = '';

  const message = `
Hello, I am interested in your luxury property project.

Name: ${name}
Mobile: ${mobile}
Email: ${email}
Address: ${address}
Preferred Appointment Time: ${appointmentTime}

Please share complete details.
`;

  const whatsappMessage = encodeURIComponent(message.trim());
  const phoneNumber = "919999198610"; 
  const link = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
  

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#22c55e] to-[#10b981] px-5 py-4 text-midnight shadow-[0_20px_60px_rgba(37,211,98,0.35)]"
    >
      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-[#047857] shadow-lg">
        💬
        <span className="absolute inset-0 rounded-full bg-[#22c55e]/20 blur-xl animate-pulse" />
      </span>

      <span className="text-sm font-semibold">Chat on WhatsApp</span>
    </motion.a>
  );
};

export default WhatsAppFloatingButton;