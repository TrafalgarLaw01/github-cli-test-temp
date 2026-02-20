import { useState } from 'react';
import { faqs } from '../data/mockData';
import { ChevronDown } from 'lucide-react';

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 px-6 max-w-3xl mx-auto">
            <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-slate-100 mb-4">Dúvidas Frequentes</h3>
                <div className="w-16 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="space-y-2">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div
                            key={index}
                            className={`border border-border-muted/60 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-surface-dark/50 shadow-lg shadow-black/20' : 'bg-transparent'}`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex items-center justify-between w-full text-left p-6 outline-none"
                            >
                                <span className={`font-medium pr-8 transition-colors ${isOpen ? 'text-primary' : 'text-slate-100 hover:text-white'}`}>
                                    {faq.question}
                                </span>
                                <div
                                    className={`bg-primary/10 text-primary rounded-full p-1.5 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                >
                                    <ChevronDown size={18} strokeWidth={2.5} />
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-border-muted/30 mt-2">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
