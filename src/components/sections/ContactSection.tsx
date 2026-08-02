import { useState, FormEvent } from 'react';
import { SOCIAL_LINKS } from '../../data/portfolioData';
import { Linkedin, Github, Globe, ExternalLink, Send, CheckCircle2 } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const getSocialIcon = (label: string) => {
    switch (label) {
      case 'LinkedIn':
        return <Linkedin className="w-5 h-5 text-[#C77D10]" />;
      case 'GitHub':
        return <Github className="w-5 h-5 text-[#C77D10]" />;
      default:
        return <Globe className="w-5 h-5 text-[#C77D10]" />;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#C77D10]/15 text-[#C77D10] border border-[#C77D10]/30 text-xs font-semibold uppercase tracking-wider mb-2">
          Get In Touch
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Contact Me
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Column: Social Link Capsules */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white mb-4">
            Connect & Social Profiles
          </h3>
          <div className="flex flex-col gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl bg-[#14213D] border border-[#C77D10]/30 hover:border-[#C77D10] shadow-[0_8px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_25px_rgba(199,125,16,0.2)] transition-all duration-300"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#0A111F] border border-white/5 group-hover:scale-110 transition-transform">
                    {getSocialIcon(link.label)}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#9CA3AF] font-semibold">
                      {link.label}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white group-hover:text-[#C77D10] transition-colors">
                      {link.handle}
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-[#C77D10] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#14213D] border border-[#C77D10]/30 shadow-[0_12px_35px_rgba(0,0,0,0.6)] relative">
          <h3 className="text-xl font-bold text-white mb-6">
            Send a Message
          </h3>

          {submitted ? (
            <div className="py-12 text-center space-y-3 animate-fadeIn">
              <CheckCircle2 className="w-12 h-12 text-[#C77D10] mx-auto animate-bounce" />
              <h4 className="text-xl font-bold text-white">
                Message Sent!
              </h4>
              <p className="text-sm text-[#9CA3AF]">
                Thank you for reaching out. Form fields have been reset.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#D1D5DB] mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-[#0A111F] border border-white/10 text-white placeholder-[#9CA3AF]/60 focus:outline-none focus:border-[#C77D10] focus:ring-1 focus:ring-[#C77D10] transition-colors text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#D1D5DB] mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#0A111F] border border-white/10 text-white placeholder-[#9CA3AF]/60 focus:outline-none focus:border-[#C77D10] focus:ring-1 focus:ring-[#C77D10] transition-colors text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#D1D5DB] mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0A111F] border border-white/10 text-white placeholder-[#9CA3AF]/60 focus:outline-none focus:border-[#C77D10] focus:ring-1 focus:ring-[#C77D10] transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-[#C77D10] text-[#0A111F] font-bold text-sm hover:bg-[#C77D10]/90 shadow-[0_0_15px_rgba(199,125,16,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C77D10]"
              >
                <Send className="w-4 h-4" />
                <span>Submit Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
