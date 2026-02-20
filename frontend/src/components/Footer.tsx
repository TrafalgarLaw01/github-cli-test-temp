import { contactInfo } from '../data/mockData';

export const Footer = () => {
    return (
        <footer className="bg-surface-dark border-t border-border-muted py-12 px-6">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
                <div className="space-y-2">
                    <h2 className="text-primary text-xl font-bold uppercase tracking-[0.2em]">{contactInfo.name}</h2>
                    <p className="text-slate-500 text-sm font-medium tracking-wider">ADVOGADO CRIMINALISTA • {contactInfo.oab}</p>
                </div>

                <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
                    Defesa especializada em casos de alta complexidade com rigor técnico e ética profissional inabalável.
                </p>

                <div className="pt-4 flex justify-center">
                    <a
                        href={contactInfo.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-full sm:w-auto relative overflow-hidden bg-primary/10 text-primary border border-primary/30 px-10 py-4 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-primary hover:text-background-dark hover:shadow-[0_0_30px_-5px_rgba(212,175,53,0.4)] active:scale-95 transition-all duration-300"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">Agendar Atendimento</span>
                        {/* Shine Effect */}
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] skew-x-[-45deg] group-hover:animate-shine pointer-events-none" />
                    </a>
                </div>

                <div className="pt-8 border-t border-border-muted/30">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-600 font-medium uppercase tracking-tighter">
                        <p>© {new Date().getFullYear()} Juan M. Montiel Advocacia. Todos os direitos reservados.</p>
                        <p>Desenvolvido com excelência técnica e design estratégico.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
