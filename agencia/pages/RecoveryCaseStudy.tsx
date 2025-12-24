
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../components/Modal';
import { CaseStudyHeader } from '../components/CaseStudyHeader';

const RecoveryCaseStudy: React.FC = () => {
  const navigate = useNavigate();
  const handleClose = () => navigate('/');

  return (
    <Modal onClose={handleClose}>
      <CaseStudyHeader 
        icon="payments" 
        subtitle="Revenue Ops" 
        title="WhatsApp Cart Recovery" 
        onClose={handleClose} 
      />
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-10 lg:p-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-border-subtle pb-12">
                <div className="flex-1">
                    <h1 className="text-4xl font-black text-text-main mb-4 leading-tight">
                        $142,500 Recovered <br/> via Conversational Commerce
                    </h1>
                    <p className="text-lg text-text-muted">
                        ModaLatam saw a 3.5x ROI by switching from email to AI-driven WhatsApp recovery flows.
                    </p>
                </div>
                <div className="size-32 rounded-full bg-green-50 text-green-600 flex flex-col items-center justify-center border-4 border-green-100 shrink-0">
                    <span className="text-2xl font-black leading-none">$142k</span>
                    <span className="text-[10px] font-bold uppercase mt-1">Growth</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-text-main">Why Email Fails</h3>
                    <p className="text-text-muted leading-relaxed">
                        In Latin American markets, email open rates hover below 20%. WhatsApp reaches customers where they are with 98% open rates and instant engagement.
                    </p>
                    <ul className="space-y-3">
                        {['Instant Response', 'Slang Recognition', 'Voice Message Support'].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-text-main font-bold">
                                <span className="material-symbols-outlined text-green-500">done_all</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="rounded-2xl border border-border-subtle shadow-xl overflow-hidden p-4 bg-slate-50">
                    <div className="space-y-4">
                        <div className="bg-white p-3 rounded-xl rounded-bl-none shadow-sm max-w-[80%] border border-border-subtle">
                           <p className="text-sm">Found your perfect fit? Check out before these sell out!</p>
                        </div>
                        <div className="bg-primary text-white p-3 rounded-xl rounded-br-none shadow-md ml-auto max-w-[80%]">
                           <p className="text-sm font-medium">I have a question about sizing. Is the XL true to size?</p>
                        </div>
                        <div className="bg-white p-3 rounded-xl rounded-bl-none shadow-sm max-w-[80%] border border-border-subtle">
                           <p className="text-sm">Yes! This model runs slightly large. We recommend the L for a tailored fit. Want me to swap it in your cart? 🤖</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Modal>
  );
};

export default RecoveryCaseStudy;
