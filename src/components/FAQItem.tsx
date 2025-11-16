import React, { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
interface FAQItemProps {
  question: string;
  answer: string;
}
export function FAQItem({
  question,
  answer
}: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="border-b border-gray-200 last:border-b-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-5 flex items-center justify-between text-left hover:text-purple-600 transition-colors">
        <span className="font-semibold text-gray-900 pr-8">{question}</span>
        <ChevronDownIcon className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <div className="pb-5 text-gray-600 leading-relaxed">{answer}</div>}
    </div>;
}