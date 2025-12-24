
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../components/Modal';
import { CaseStudyHeader } from '../components/CaseStudyHeader';

const ChatbotCaseStudy: React.FC = () => {
  const navigate = useNavigate();
  const handleClose = () => navigate('/');

  return (
    <Modal onClose={handleClose}>
      <CaseStudyHeader 
        icon="smart_toy" 
        subtitle="Success Story" 
        title="Automating Customer Support" 
        onClose={handleClose} 
      />
      <div className="flex-1 overflow-y-auto custom-scrollbar p-0 bg-white">
        <div className="flex flex-col lg:flex-row h-full">
          <div className="flex-1 p-6 md:p-10 lg:p-12 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-text-main text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
                Reducing Support Costs by <span className="text-primary">40%</span> with AI
              </h1>
              <p className="text-text-muted text-lg font-normal leading-relaxed max-w-2xl">
                How we helped <strong className="text-text-main">MercadoFlow</strong> implement an Expert Catalog Chatbot to streamline operations and boost sales response time.
              </p>
            </div>
            
            <div className="relative group w-full rounded-xl overflow-hidden border border-border-subtle bg-surface-subtle shadow-md aspect-video">
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-105" 
                    style={{backgroundImage: 'url("https://picsum.photos/seed/demo1/1200/800")'}}
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <button className="size-20 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-primary shadow-2xl hover:bg-primary hover:text-white transition-all">
                        <span className="material-symbols-outlined text-4xl ml-1">play_arrow</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-border-subtle">
                <div>
                    <h3 className="text-text-main text-xl font-bold mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">error</span>
                        The Challenge
                    </h3>
                    <p className="text-text-muted leading-relaxed">
                        The client was overwhelmed by repetitive queries about stock, leading to slow response times (avg. 4 hours) and lost sales. Their team was handling over 2,000 tickets a week.
                    </p>
                </div>
                <div>
                    <h3 className="text-text-main text-xl font-bold mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">psychology</span>
                        The Solution
                    </h3>
                    <p className="text-text-muted leading-relaxed">
                        We trained a custom agent on their Shopify product catalog and historical tickets, integrating it directly with WhatsApp Business API.
                    </p>
                </div>
            </div>
          </div>

          <aside className="lg:w-[360px] bg-surface-subtle border-l border-border-subtle p-6 md:p-8 flex flex-col gap-8">
            <h3 className="text-text-main text-lg font-bold border-b border-border-subtle pb-4">Performance Metrics</h3>
            <div className="flex flex-col gap-4">
                {[
                    { label: 'Automated Resolutions', val: '70%', icon: 'auto_mode' },
                    { label: 'Avg. Response Time', val: '< 1 min', icon: 'timer' },
                    { label: 'Cost Reduction', val: '40%', icon: 'savings' }
                ].map((m, i) => (
                    <div key={i} className="bg-white p-5 rounded-xl border border-border-subtle shadow-sm flex items-center gap-4">
                        <div className="size-10 rounded-lg bg-blue-50 text-primary flex items-center justify-center">
                            <span className="material-symbols-outlined">{m.icon}</span>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase text-text-muted tracking-widest">{m.label}</p>
                            <p className="text-2xl font-black text-text-main">{m.val}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-auto bg-primary text-white p-6 rounded-2xl shadow-xl shadow-blue-500/20">
                <p className="text-sm font-bold mb-2">Want these results?</p>
                <button className="w-full h-11 bg-white text-primary font-bold rounded-lg hover:bg-blue-50 transition-colors">
                    Book Call
                </button>
            </div>
          </aside>
        </div>
      </div>
    </Modal>
  );
};

export default ChatbotCaseStudy;
