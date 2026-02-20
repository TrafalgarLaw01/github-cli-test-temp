import { expertiseAreas } from '../data/mockData';

export const Expertise = () => {
    return (
        <section id="atuacao" className="py-20 px-6 max-w-7xl mx-auto">
            <div className="mb-12 text-center md:text-left">
                <h3 className="text-3xl font-bold text-slate-100 mb-4">Áreas de Atuação</h3>
                <div className="w-16 h-1 bg-primary mx-auto md:mx-0"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {expertiseAreas.map((area, index) => (
                    <div
                        key={index}
                        className="p-8 rounded-3xl border border-border-muted/50 bg-surface-dark/40 hover:bg-surface-dark hover:border-primary/30 hover:shadow-[0_0_30px_-10px_rgba(212,175,53,0.15)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group backdrop-blur-sm"
                    >
                        <div className="text-primary mb-6 group-hover:scale-110 transition-transform">
                            <area.icon size={36} strokeWidth={1.5} />
                        </div>
                        <h4 className="text-xl font-bold text-slate-100 mb-3">{area.title}</h4>
                        <p className="text-base text-slate-400 leading-relaxed flex-grow">
                            {area.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
