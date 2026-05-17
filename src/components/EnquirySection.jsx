import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { submitEnquiry } from '../api/enquiryApi';
import SuccessModal from './SuccessModal';
import { properties } from '../data/properties';

const initialState = {
  name: '',
  email: '',
  phone: '',
  budget: '₹ 10L - ₹ 50L',
  propertyInterest: properties[0]?.title || '',
  message: '',
  enquiryType: 'Email',
};

const EnquirySection = ({ setToast }) => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const propertyOptions = useMemo(() => properties.map((property) => property.title), []);

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Enter your full name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email';
    if (!form.phone.trim()) next.phone = 'Enter a contact number';
    if (!form.budget.trim()) next.budget = 'Select your budget';
    if (!form.propertyInterest.trim()) next.propertyInterest = 'Select a property interest';
    if (form.message.trim().length < 12) next.message = 'Message should describe your needs';
    if (!form.enquiryType.trim()) next.enquiryType = 'Choose an enquiry method';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      await submitEnquiry(form);
      setSuccess(true);
      setForm(initialState);
      setToast('Your enquiry has been submitted. We will reach out shortly.');
      setTimeout(() => setToast(null), 4000);
    } catch (error) {
      const message = error?.response?.data?.message || 'Unable to submit enquiry. Please try again.';
      setToast(message);
      setTimeout(() => setToast(null), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/40 p-8 shadow-glow backdrop-blur-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >

      {/* 🌟 BACKGROUND AURORA LIGHTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gold/20 blur-[100px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/20 blur-[120px] rounded-full animate-pulse"></div>
      </div>

      {/* 🔥 ROTATING SOFT LIGHT RING */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[420px] h-[420px]">

          <div className="absolute inset-0 rounded-full border border-gold/20 animate-spinSlow"></div>
          <div className="absolute inset-6 rounded-full border border-pink-400/20 animate-reverseSpin"></div>

          <div className="absolute inset-0 animate-spinSlow">
            <div className="absolute top-0 left-1/2 w-2.5 h-2.5 bg-gold rounded-full shadow-[0_0_20px_gold]"></div>
          </div>

          <div className="absolute inset-16 rounded-full bg-gold/5 blur-2xl animate-pulse"></div>
        </div>
      </div>

      {/* HEADER (UNCHANGED CONTENT) */}
      <div className="mb-8 relative z-10">
        <span className="inline-flex rounded-full bg-gold/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-gold shadow-sm">
          White Glove Enquiry
        </span>

        <h2 className="mt-6 text-4xl font-semibold text-white">
          Luxury Property Enquiry
        </h2>

        <p className="mt-4 max-w-2xl text-slate-300">
          Complete the enquiry form to receive premium follow-up from our sales consultancy. Select how you'd like to connect.
        </p>
      </div>

      {/* FORM (UNCHANGED LOGIC + CONTENT) */}
      <form className="relative z-10 space-y-6" onSubmit={handleSubmit} noValidate>

        <div className="grid gap-4 sm:grid-cols-2">

          {[
            { label: 'Full Name', name: 'name', type: 'text', value: form.name },
            { label: 'Email Address', name: 'email', type: 'email', value: form.email },
            { label: 'Phone Number', name: 'phone', type: 'tel', value: form.phone },
            { label: 'Budget Range', name: 'budget', type: 'select', value: form.budget },
          ].map((field) => (
            <motion.label
              key={field.name}
              className="relative block overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition duration-300 focus-within:border-gold/50 focus-within:bg-white/10"
              whileHover={{ y: -4, scale: 1.02 }}
            >

              {/* ✨ moving shine overlay */}
              <div className="absolute inset-0 animate-shine bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <span className="pointer-events-none absolute left-4 top-4 text-sm text-slate-400">
                {field.label}
              </span>

              {field.type === 'select' ? (
                <select
                  value={field.value}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className="mt-6 w-full bg-transparent text-white"
                >
                  {['₹ 10lacs - ₹ 20lacs', '₹ 20lacs - ₹ 3.5lacs', '₹ 3.5lacs - ₹ 6lacs', 'Custom'].map((option) => (
                    <option key={option} value={option} className="bg-[#020713] text-white">
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  value={field.value}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className="mt-6 w-full bg-transparent text-white outline-none"
                />
              )}

              {errors[field.name] && (
                <span className="mt-2 block text-xs text-rose-300">
                  {errors[field.name]}
                </span>
              )}
            </motion.label>
          ))}
        </div>

        {/* PROPERTY + CONTACT (UNCHANGED) */}
        <div className="grid gap-4 sm:grid-cols-2">

          <motion.label
            className="relative block overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
            whileHover={{ y: -4, scale: 1.02 }}
          >
            <span className="absolute left-4 top-4 text-sm text-slate-400">
              Property Interest
            </span>

            <select
              value={form.propertyInterest}
              onChange={(e) => handleChange('propertyInterest', e.target.value)}
              className="mt-6 w-full bg-transparent text-white"
            >
              {propertyOptions.map((option) => (
                <option key={option} value={option} className="bg-[#020713] text-white">
                  {option}
                </option>
              ))}
            </select>
          </motion.label>

          <motion.label
            className="relative block overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
            whileHover={{ y: -4, scale: 1.02 }}
          >
            <span className="absolute left-4 top-4 text-sm text-slate-400">
              Preferred Contact
            </span>

            <select
              value={form.enquiryType}
              onChange={(e) => handleChange('enquiryType', e.target.value)}
              className="mt-6 w-full bg-transparent text-white"
            >
              {['Email', 'WhatsApp', 'Call', 'Meeting', 'General'].map((option) => (
                <option key={option} value={option} className="bg-[#020713] text-white">
                  {option}
                </option>
              ))}
            </select>
          </motion.label>
        </div>

        {/* MESSAGE (UNCHANGED) */}
        <motion.label
          className="relative block overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
          whileHover={{ y: -4, scale: 1.02 }}
        >
          <span className="absolute left-4 top-4 text-sm text-slate-400">
            Message
          </span>

          <textarea
            value={form.message}
            onChange={(e) => handleChange('message', e.target.value)}
            rows="5"
            className="mt-6 w-full resize-none bg-transparent text-white outline-none"
          />
        </motion.label>

        {/* BUTTON (LUXURY SHINE ONLY) */}
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="relative w-full overflow-hidden rounded-full bg-gradient-to-r from-gold via-[#f8d274] to-[#c7992f] px-8 py-4 font-semibold text-midnight shadow-[0_16px_40px_rgba(212,175,55,0.35)]"
        >
          <div className="absolute inset-0 animate-shine bg-white/20" />
          {loading ? 'Sending...' : 'Send Enquiry'}
        </motion.button>
      </form>

      {/* FOOTER (UNCHANGED) */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 relative z-10">
        {[
          { label: 'Fast Response', value: '24-48 hours' },
          { label: 'Verified Listings', value: 'Premium selection' },
          { label: 'Secure Process', value: 'Private assistance' },
          { label: 'Luxury Support', value: 'Concierge service' },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            className="rounded-3xl border border-white/10 bg-white/5 p-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 * index }}
            whileHover={{ y: -6, scale: 1.03 }}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              {item.label}
            </p>
            <p className="mt-2 text-xl font-semibold text-white">
              {item.value}
            </p>
          </motion.div>
        ))}
      </div>

      {success && <SuccessModal onClose={() => setSuccess(false)} />}

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spinSlow {
          animation: spinSlow 25s linear infinite;
        }

        @keyframes reverseSpin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .animate-reverseSpin {
          animation: reverseSpin 18s linear infinite;
        }

        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(120%); }
        }

        .animate-shine {
          animation: shine 3s linear infinite;
        }
      `}</style>

    </motion.section>
  );
};

export default EnquirySection;