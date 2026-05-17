import { useEffect, useMemo, useState } from 'react';
import { fetchEnquiries, removeEnquiry } from '../api/enquiryApi';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [search, setSearch] = useState('');
  const [property, setProperty] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const loadEnquiries = async () => {
    try {
      setLoading(true);
      const response = await fetchEnquiries({ search, property });
      setEnquiries(response.data);
    } catch (error) {
      setStatusMessage('Unable to load enquiries. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEnquiries();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    await loadEnquiries();
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this enquiry permanently?')) return;
    try {
      await removeEnquiry(id);
      setEnquiries((prev) => prev.filter((item) => item._id !== id));
      setStatusMessage('Enquiry deleted successfully.');
      setTimeout(() => setStatusMessage(''), 3200);
    } catch (error) {
      setStatusMessage('Unable to delete enquiry.');
    }
  };

  const sortedEnquiries = useMemo(() => [...enquiries], [enquiries]);

  return (
    <motion.section
      className="rounded-[2rem] border border-white/10 bg-slate-950/30 p-8 shadow-glow backdrop-blur-xl"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Admin Dashboard</p>
          <h2 className="mt-3 text-4xl font-semibold">Manage Enquiries</h2>
          <p className="mt-3 max-w-2xl text-slate-400">Review every enquiry, filter by property, and remove entries with a responsive table interface.</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
          {loading ? 'Refreshing enquiries...' : `${enquiries.length} enquiries loaded`}
        </div>
      </div>

      <form onSubmit={handleSearch} className="grid gap-4 sm:grid-cols-[1.5fr_1fr_1fr]">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, email, or message"
          className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 focus:border-gold/40"
        />
        <input
          value={property}
          onChange={(e) => setProperty(e.target.value)}
          placeholder="Filter by property interest"
          className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 focus:border-gold/40"
        />
        <button type="submit" className="rounded-3xl bg-gold px-6 py-4 font-semibold text-midnight transition hover:shadow-xl">Search</button>
      </form>

      {statusMessage && <div className="mt-6 rounded-3xl border border-gold/20 bg-white/5 p-4 text-slate-200">{statusMessage}</div>}

      <div className="mt-8 overflow-x-auto rounded-[2rem] border border-white/10 bg-[#020917]/80 p-4 shadow-glow">
        <table className="min-w-full border-separate border-spacing-y-4 text-left text-sm">
          <thead>
            <tr className="text-slate-400">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Budget</th>
              <th className="px-4 py-3">Property</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Received</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedEnquiries.map((item) => (
              <tr key={item._id} className="rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl transition hover:bg-white/10">
                <td className="px-4 py-4 align-top text-white">{item.name}</td>
                <td className="px-4 py-4 align-top text-slate-300">{item.email}</td>
                <td className="px-4 py-4 align-top text-slate-300">{item.phone}</td>
                <td className="px-4 py-4 align-top text-slate-300">{item.budget}</td>
                <td className="px-4 py-4 align-top text-slate-300">{item.propertyInterest}</td>
                <td className="px-4 py-4 align-top text-slate-300">{item.enquiryType}</td>
                <td className="px-4 py-4 align-top text-slate-300">{new Date(item.createdAt).toLocaleString()}</td>
                <td className="px-4 py-4 align-top">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="rounded-full bg-rose-500 px-4 py-2 text-sm text-white transition hover:bg-rose-400"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {sortedEnquiries.length === 0 && (
              <tr>
                <td colSpan="8" className="px-4 py-8 text-center text-slate-400">No enquiries found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
};

export default AdminDashboard;
