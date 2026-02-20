import { expertInfo } from '../data/mockData';
import { FileText, GraduationCap } from 'lucide-react';

export const About = () => {
    return (
        <section id="sobre" className="bg-surface-dark py-16 px-6 border-y border-border-muted/20">
            <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto items-center">
                <div className="relative aspect-[3/4] w-full max-w-[320px] mx-auto md:mx-0 rounded-3xl overflow-hidden shadow-2xl shadow-primary/5 group flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/20 to-transparent z-10 transition-all duration-500 group-hover:opacity-70"></div>
                    <img
                        alt="Juan M. Montiel - Advogado Criminalista"
                        className="object-cover w-full h-full grayscale hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk0gZL4TlaIIhzekAXkd3rUt0UvYQAn_fqYDi3lvV0IDWim1inibc8XMdaD08wgZyTd8NLJHLb3YjIaXwE_WSGLARnpRj-B_P-qh-VmYdHjqsvSRjNGJIB-t0MEizm4V5sWLeLVH6aTw3SrdfhOiwtouP35b8rJ5wlBsHez5gwgBfqFV4JmX6khp3P-jPFJ7FjvSy3f4MjQrXRExZTA_spmm5fTg6eywFZW3yvGJmelSINT3ouN4SYVoFVRjuoNT6Z2h8whLC9dT8"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                        <p className="text-primary text-xs font-bold tracking-widest uppercase">Fundador</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-100">{expertInfo.title}</h3>
                    <div className="space-y-4">
                        <p className="text-slate-400 text-lg leading-relaxed border-l-2 border-primary/50 pl-4">
                            {expertInfo.subtitle}. <br />
                            <span className="text-sm mt-2 block">{expertInfo.description}</span>
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href={expertInfo.articlesLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center sm:justify-start gap-3 text-primary text-sm font-semibold bg-background-dark/50 px-6 py-4 rounded-full border border-primary/20 hover:border-primary/60 hover:shadow-[0_0_20px_-5px_rgba(212,175,53,0.3)] hover:-translate-y-1 transition-all duration-300"
                            >
                                <FileText size={18} strokeWidth={2} />
                                Artigos Publicados
                            </a>
                            <a
                                href={expertInfo.dissertationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center sm:justify-start gap-3 text-primary text-sm font-semibold bg-background-dark/50 px-6 py-4 rounded-full border border-primary/20 hover:border-primary/60 hover:shadow-[0_0_20px_-5px_rgba(212,175,53,0.3)] hover:-translate-y-1 transition-all duration-300"
                            >
                                <GraduationCap size={18} strokeWidth={2} />
                                Dissertação de Mestrado
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
