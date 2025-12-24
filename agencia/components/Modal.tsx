
import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-900/60 backdrop-blur-sm">
      <div 
        className="fixed inset-0" 
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl border border-border-subtle shadow-2xl overflow-hidden animate-fade-in-up flex flex-col">
        {children}
      </div>
    </div>
  );
};
