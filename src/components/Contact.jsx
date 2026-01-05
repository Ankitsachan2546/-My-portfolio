import React from 'react';
import Section from './Section';
import config from '../config.json';
import Icon from './Icon';

const Contact = () => {
    const [status, setStatus] = React.useState('idle'); // idle, sending, success, error
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const form = e.target;
        const data = new FormData(form);
        const recipientEmail = import.meta.env.VITE_USER_EMAIL || config.email;

        try {
            const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <Section id="contact" title="Get in Touch" className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-6xl mx-auto items-center">
                <div className="space-y-10">
                    <div>
                        <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">
                            Let's build something <span className="text-gradient">together</span>
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <a href={`mailto:${config.email}`} className="glass-card flex items-center space-x-6 p-6 rounded-3xl text-gray-300 hover:text-blue-400 transition-all group overflow-hidden relative">
                            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-400/10 transition-all border border-white/5">
                                <Icon name="email" className="w-7 h-7" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">Email Me</p>
                                <span className="text-lg font-bold truncate block max-w-[200px] md:max-w-xs">{config.email}</span>
                            </div>
                        </a>

                        <a
                            href={config.links.find(l => l.text === 'linkedin')?.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card flex items-center space-x-6 p-6 rounded-3xl text-gray-300 hover:text-blue-400 transition-all group overflow-hidden relative"
                        >
                            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-400/10 transition-all border border-white/5">
                                <Icon name="linkedin" className="w-7 h-7" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">Professional Profile</p>
                                <span className="text-lg font-bold truncate block">LinkedIn</span>
                            </div>
                        </a>
                    </div>
                </div>

                <form className="glass-card space-y-8 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden" onSubmit={handleSubmit}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl -mr-16 -mt-16" />

                    {/* FormSubmit Configuration */}
                    <input type="hidden" name="_subject" value="portfolio.contact" />
                    <input type="hidden" name="_template" value="table" />

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-4 rounded-2xl bg-white/5 border border-white/5 text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all disabled:opacity-50 placeholder:text-gray-600"
                                placeholder="Anmol"
                                disabled={status === 'sending'}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                list="email-suggestions"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-4 rounded-2xl bg-white/5 border border-white/5 text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all disabled:opacity-50 placeholder:text-gray-600"
                                placeholder={config.email}
                                disabled={status === 'sending'}
                            />
                            <datalist id="email-suggestions">
                                <option value={config.email} />
                            </datalist>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-4 rounded-2xl bg-white/5 border border-white/5 text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all disabled:opacity-50 placeholder:text-gray-600 resize-none"
                                placeholder="What's on your mind?"
                                disabled={status === 'sending'}
                            ></textarea>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className={`w-full py-5 text-white rounded-[1.25rem] font-black uppercase tracking-widest text-sm transition-all flex items-center justify-center space-x-3 group ${status === 'success' ? 'bg-green-600' :
                            status === 'error' ? 'bg-red-600' :
                                'bg-blue-600 hover:bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]'
                            } active:scale-95 disabled:opacity-50`}
                    >
                        {status === 'sending' ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                <span>Processing...</span>
                            </>
                        ) : status === 'success' ? (
                            <span>Message Delivered!</span>
                        ) : status === 'error' ? (
                            <span>Submission Failed</span>
                        ) : (
                            <>
                                <span>Send Message</span>
                                <Icon name="arrow-right" className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                            </>
                        )}
                    </button>

                    {status === 'success' && (
                        <p className="text-green-400 text-xs font-bold text-center mt-4">Thanks! I'll get back to you soon.</p>
                    )}
                </form>
            </div>
        </Section>
    );
};

export default Contact;
