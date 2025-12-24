
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-white text-text-main font-display overflow-x-hidden">
      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b border-border-subtle bg-white/90 backdrop-blur-md px-4 lg:px-10 py-3">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined !text-4xl">smart_toy</span>
            </div>
            <h2 className="text-text-main text-xl font-bold leading-tight tracking-tight">Operandi</h2>
          </div>
          <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
            <nav className="flex items-center gap-9">
              <a className="text-text-muted hover:text-primary text-sm font-medium transition-colors" href="#solutions">Solutions</a>
              <a className="text-text-muted hover:text-primary text-sm font-medium transition-colors" href="#case-studies">Case Studies</a>
              <a className="text-text-muted hover:text-primary text-sm font-medium transition-colors" href="#pricing">Pricing</a>
            </nav>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-primary-dark transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-md shadow-blue-500/20">
              Contact Us
            </button>
          </div>
          <button className="lg:hidden text-text-main">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      <main className="flex flex-col w-full">
        {/* Hero Section */}
        <section className="relative px-4 py-16 lg:py-28 bg-white overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-blue-100/60 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-[1280px] mx-auto w-full relative z-10">
            <div className="flex flex-col-reverse gap-10 lg:gap-20 lg:flex-row items-center">
              <div className="flex flex-col gap-6 lg:max-w-[600px] flex-1">
                <div className="flex flex-col gap-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 w-fit">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-xs font-bold text-primary uppercase tracking-wide">AI for LatAm E-commerce</span>
                  </div>
                  <h1 className="text-text-main text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                    Clarity in <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Automated Growth</span>
                  </h1>
                  <p className="text-text-muted text-lg lg:text-xl font-medium leading-relaxed max-w-[540px]">
                    Operandi automates the repetitive, so you can focus on clarity and strategy. We build specialized AI agents that handle support, pricing, and inventory for high-growth merchants.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <button className="flex items-center justify-center rounded-lg h-14 px-8 bg-primary hover:bg-primary-dark text-white text-base font-bold transition-all hover:-translate-y-1 shadow-lg shadow-blue-500/30">
                    Get a Free Audit
                  </button>
                  <button className="flex items-center justify-center rounded-lg h-14 px-8 bg-white border border-border-subtle hover:bg-gray-50 text-text-main text-base font-bold transition-all hover:border-primary/30">
                    Watch Demo
                    <span className="material-symbols-outlined ml-2 text-xl text-primary">play_circle</span>
                  </button>
                </div>
              </div>
              <div className="flex-1 w-full flex justify-center lg:justify-end relative">
                <div className="relative z-10 w-full max-w-[550px] aspect-square rounded-3xl bg-gradient-to-br from-white to-blue-50 border border-border-subtle shadow-2xl shadow-blue-900/10 p-4 overflow-hidden group">
                  <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply" style={{backgroundImage: "url('https://picsum.photos/seed/ai1/800/800')"}}></div>
                  <div className="absolute top-1/4 left-8 right-8 bg-white/80 backdrop-blur-xl border border-white/50 p-5 rounded-2xl shadow-lg transform transition-transform duration-700 group-hover:-translate-y-2">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-1.5 rounded-full">
                          <span className="material-symbols-outlined text-green-600 text-lg">check_circle</span>
                        </div>
                        <span className="text-sm font-bold text-text-main">Order Recovery Agent</span>
                      </div>
                      <span className="text-xs text-text-muted bg-gray-100 px-2 py-1 rounded-full">Just now</span>
                    </div>
                    <div className="mt-5 flex items-center justify-between text-xs font-medium">
                      <span className="text-text-muted">Recovered Revenue</span>
                      <span className="text-green-600 font-bold bg-green-50 px-2 py-1 rounded-md">+$1,240.50</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-24 px-4 bg-white border-t border-border-subtle">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-col gap-4 mb-16 max-w-2xl">
              <h2 className="text-text-main text-3xl lg:text-4xl font-bold leading-tight">Stop losing sales to inefficiencies</h2>
              <p className="text-text-muted text-lg">Manual processes are the bottleneck of your growth. We solve these instantly.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: 'shopping_cart_off', title: 'Abandoned Carts', desc: '70% of carts are abandoned. Manual follow-ups are too slow.' },
                { icon: 'schedule', title: 'Support Delay', desc: 'Waiting hours for a resolution kills conversion rates.' },
                { icon: 'inventory_2', title: 'Inventory Chaos', desc: 'Overselling damages your brand reputation.' }
              ].map((item, idx) => (
                <div key={idx} className="group flex flex-col gap-6 rounded-2xl border border-border-subtle bg-white p-8 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="text-text-main text-xl font-bold">{item.title}</h3>
                  <p className="text-text-muted text-base leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-24 px-4 bg-surface-subtle" id="case-studies">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-text-main text-3xl font-bold mb-2">Proven Results</h2>
                <p className="text-text-muted text-lg">See how we're transforming businesses across the region.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CaseStudyCard 
                to="/case-study-chatbot"
                img="https://picsum.photos/seed/cs1/600/400"
                category="Automation"
                title="Support Bot"
                desc="Reduced support time by 15 hours weekly for ModaLatam."
                metrics={[{ val: '40%', label: 'Sales Lift' }]}
              />
              <CaseStudyCard 
                to="/case-study-logistics"
                img="https://picsum.photos/seed/cs2/600/400"
                category="Logistics"
                title="Logística Inteligente"
                desc="Automated delay notifications for electronics retail."
                metrics={[{ val: '-40%', label: 'Inquiries' }]}
              />
              <CaseStudyCard 
                to="/case-study-recovery"
                img="https://picsum.photos/seed/cs3/600/400"
                category="Marketing"
                title="Recovery Agents"
                desc="WhatsApp recovery flows generating $140k+ revenue."
                metrics={[{ val: '3.5x', label: 'ROI' }]}
              />
            </div>
          </div>
        </section>

        {/* Pricing/CTA Section */}
        <section className="py-24 px-4 bg-primary text-white text-center">
            <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
                <h2 className="text-4xl font-bold">Ready to automate your growth?</h2>
                <p className="text-blue-100 text-lg">Book a strategy call to see if Operandi is the right fit for your e-commerce operations.</p>
                <button className="h-14 px-10 bg-white text-primary rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-xl">
                    Schedule Your Free Audit
                </button>
            </div>
        </section>
      </main>

      <footer className="bg-white border-t border-border-subtle py-12 px-4">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">smart_toy</span>
                <span className="text-xl font-bold">Operandi</span>
            </div>
            <p className="text-text-muted text-sm">© 2024 Operandi Inc. Empowering LATAM Commerce.</p>
        </div>
      </footer>
    </div>
  );
};

const CaseStudyCard = ({ to, img, category, title, desc, metrics }: any) => (
  <Link to={to} className="flex flex-col rounded-2xl overflow-hidden bg-white border border-border-subtle hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
    <div className="h-56 bg-cover bg-center relative" style={{ backgroundImage: `url(${img})` }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/30">{category}</div>
    </div>
    <div className="p-8 flex flex-col flex-1">
      <h3 className="text-text-main text-xl font-bold mb-2">{title}</h3>
      <p className="text-text-muted text-sm mb-8 flex-1 leading-relaxed">{desc}</p>
      <div className="pt-6 border-t border-border-subtle flex gap-8">
        {metrics.map((m: any, i: number) => (
          <div key={i}>
            <p className="text-2xl font-bold text-primary">{m.val}</p>
            <p className="text-[10px] text-text-muted font-bold uppercase mt-1 tracking-wider">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  </Link>
);

export default Home;
