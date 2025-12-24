
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ChatbotCaseStudy from './pages/ChatbotCaseStudy';
import LogisticsCaseStudy from './pages/LogisticsCaseStudy';
import RecoveryCaseStudy from './pages/RecoveryCaseStudy';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study-chatbot" element={<ChatbotCaseStudy />} />
        <Route path="/case-study-logistics" element={<LogisticsCaseStudy />} />
        <Route path="/case-study-recovery" element={<RecoveryCaseStudy />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
