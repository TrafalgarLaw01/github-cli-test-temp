import { contactInfo } from '../data/mockData';
import { MapPin, Phone, Instagram, Building2 } from 'lucide-react';

export const Location = () => {
    return (
        <section id="localizacao" className="bg-surface-dark py-20 px-6 border-t border-border-muted/20">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                    <h3 className="text-3xl font-bold text-slate-100 mb-4">Localização e Contato</h3>
                    <p className="text-slate-400 text-base">Atendimento nacional com sede em Mato Grosso do Sul.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <a
                        href={contactInfo.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-3xl overflow-hidden border border-border-muted/50 h-[400px] relative w-full group block hover:shadow-[0_0_30px_-10px_rgba(212,175,53,0.15)] transition-all duration-300"
                    >
                        <iframe
                            src={contactInfo.googleMapsEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0, pointerEvents: 'none' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localização do Escritório"
                        />
                        <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-background-dark/40 transition-all duration-300">
                            <div className="bg-primary text-background-dark px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <MapPin size={20} />
                                Ver no Google Maps
                            </div>
                        </div>
                    </a>

                    <div className="flex flex-col gap-6">
                        <a
                            href={contactInfo.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-6 bg-background-dark border border-border-muted/50 rounded-3xl gap-4 hover:border-primary/40 hover:shadow-[0_0_20px_-5px_rgba(212,175,53,0.15)] group hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background-dark transition-all shrink-0">
                                <Phone size={24} />
                            </div>
                            <div className="min-w-0">
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1 truncate">Telefone / WhatsApp</p>
                                <p className="text-slate-100 font-medium text-lg truncate">{contactInfo.displayPhone}</p>
                            </div>
                        </a>

                        <a
                            href={contactInfo.instaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-6 bg-background-dark border border-border-muted/50 rounded-3xl gap-4 hover:border-primary/40 hover:shadow-[0_0_20px_-5px_rgba(212,175,53,0.15)] group hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background-dark transition-all shrink-0">
                                <Instagram size={24} />
                            </div>
                            <div className="min-w-0">
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1 truncate">Instagram</p>
                                <p className="text-slate-100 font-medium text-lg truncate">{contactInfo.instagram}</p>
                            </div>
                        </a>

                        <a
                            href={contactInfo.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-start p-6 bg-background-dark border border-border-muted/50 rounded-3xl gap-4 hover:border-primary/40 hover:shadow-[0_0_20px_-5px_rgba(212,175,53,0.15)] group hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background-dark transition-all shrink-0">
                                <Building2 size={24} />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1 truncate group-hover:text-primary transition-colors">Escritório</p>
                                <p className="text-slate-100 font-medium text-sm md:text-base leading-relaxed break-words">
                                    Ponta Porã, MS - Atendimento em todo estado e tribunais superiores.
                                </p>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
};
