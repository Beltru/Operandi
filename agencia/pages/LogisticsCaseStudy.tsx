
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../components/Modal';
import { CaseStudyHeader } from '../components/CaseStudyHeader';

const LogisticsCaseStudy: React.FC = () => {
  const navigate = useNavigate();
  const handleClose = () => navigate('/');

  return (
    <Modal onClose={handleClose}>
      <CaseStudyHeader 
        icon="local_shipping" 
        subtitle="Logistics" 
        title="Intelligent Logistics Operations" 
        onClose={handleClose} 
      />
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-10 lg:p-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-black text-text-main tracking-tight">
                    Optimizing the Last Mile with AI
                </h1>
                <p className="text-xl text-text-muted max-w-2xl mx-auto">
                    How predictive delay detection reduced WISMO (Where Is My Order) inquiries by 40%.
                </p>
            </div>

            <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl relative group">
                <img 
                    src="https://picsum.photos/seed/logistics/1600/900" 
                    alt="Logistics warehouse" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white max-w-md">
                        <p className="text-primary text-xs font-black uppercase tracking-widest mb-2">Real-time alert</p>
                        <p className="text-text-main font-bold italic">"Your order #4529 is delayed due to weather. Expected arrival: Tomorrow before 5 PM."</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <MetricBox label="Inquiry Reduction" val="-40%" sub="Support Savings" />
                <MetricBox label="Proactive Alerts" val="100%" sub="Coverage" />
                <MetricBox label="Customer CSAT" val="+22pt" sub="Sentiment" />
            </div>

            <div className="prose prose-lg max-w-none text-text-muted leading-relaxed border-t border-border-subtle pt-12">
                <p>
                    For high-volume merchants, shipping updates are the #1 support burden. Operandi's logistics engine connects to freight APIs to predict delays 12 hours before they occur, triggering personalized WhatsApp messages that resolve the customer's anxiety before they reach for support.
                </p>
            </div>
        </div>
      </div>
    </Modal>
  );
};

const MetricBox = ({ label, val, sub }: any) => (
  <div className="p-8 rounded-2xl border border-border-subtle bg-surface-subtle hover:border-primary/20 transition-colors">
    <p className="text-text-muted text-xs font-bold uppercase tracking-widest mb-1">{label}</p>
    <p className="text-4xl font-black text-text-main mb-2 tracking-tight">{val}</p>
    <p className="text-primary text-xs font-bold uppercase">{sub}</p>
  </div>
);

export default LogisticsCaseStudy;
