import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle2, MessageCircle } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // Point this to the Laravel backend running locally
      await axios.post('http://localhost:8000/api/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[128px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Let's Collaborate
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted"
          >
            Have a project in mind or want to discuss opportunities? Drop me a message.
          </motion.p>
        </div>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="p-8 md:p-12 rounded-3xl bg-secondary/50 border border-white/5 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-text-muted">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-primary/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                placeholder="Your Name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-text-muted">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-primary/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                placeholder="Your Email"
              />
            </div>
          </div>

          <div className="space-y-2 mb-8">
            <label htmlFor="message" className="text-sm font-medium text-text-muted">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-primary/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent text-white font-semibold flex items-center justify-center gap-2 hover:bg-accent/80 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'idle' && (
                <>
                  Send Message <Send size={18} />
                </>
              )}
              {status === 'loading' && (
                <>
                  Sending <Loader2 size={18} className="animate-spin" />
                </>
              )}
              {status === 'success' && (
                <>
                  Message Sent <CheckCircle2 size={18} />
                </>
              )}
              {status === 'error' && (
                <>
                  Failed to Send. Try Again
                </>
              )}
            </button>

            <a
              href="https://wa.me/6285766636042"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 font-semibold flex items-center justify-center gap-2 hover:bg-[#25D366] hover:text-white transition-all"
            >
              Chat WhatsApp <MessageCircle size={18} />
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
