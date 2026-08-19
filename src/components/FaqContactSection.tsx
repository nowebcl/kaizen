"use client";

import React, { useState } from "react";
import { Plus, Minus, Phone, Send, CheckCircle2 } from "lucide-react";
import { SITE_DATA } from "@/data/content";

export default function FaqContactSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    }, 800);
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: FAQ (Dark Card) */}
          <div className="lg:col-span-5 bg-[#0B131E] rounded-2xl p-7 sm:p-9 text-white shadow-xl border border-gray-800 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#E32819]">
                  PREGUNTAS FRECUENTES
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  ¿Tienes dudas? <br />
                  Estamos para ayudarte.
                </h2>
              </div>

              {/* Accordion list */}
              <div className="space-y-3 pt-2">
                {SITE_DATA.faqs.map((faq) => {
                  const isOpen = openFaq === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="border border-gray-800/80 rounded-lg overflow-hidden bg-[#111A25] transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full px-4 py-3.5 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-gray-200 hover:text-white transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.question}</span>
                        <span className="text-gray-400 flex-shrink-0">
                          {isOpen ? <Minus className="w-4 h-4 text-[#E32819]" /> : <Plus className="w-4 h-4" />}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-xs text-gray-300 border-t border-gray-800/60 leading-relaxed animate-in fade-in">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct Phone Callout */}
            <div className="mt-8 pt-6 border-t border-gray-800/80 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E32819]/20 border border-[#E32819]/40 text-[#E32819] flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 animate-pulse-subtle" />
              </div>
              <div>
                <span className="block text-xs text-gray-400 font-medium">
                  ¿Prefieres hablar con un experto?
                </span>
                <a
                  href={`tel:${SITE_DATA.company.phone.replace(/\s+/g, "")}`}
                  className="text-base sm:text-lg font-black text-white hover:text-[#E32819] transition-colors"
                >
                  {SITE_DATA.company.phoneFormatted}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (White Card) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-10 shadow-xl border border-gray-200/80">
            <div className="space-y-2 mb-8">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
                Hablemos de tu proyecto
              </h3>
              <p className="text-sm text-gray-600">
                Cuéntanos tus necesidades y nuestro equipo te contactará a la brevedad con una propuesta a medida.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold text-emerald-950">
                  ¡Mensaje enviado con éxito!
                </h4>
                <p className="text-sm text-emerald-800">
                  Gracias por contactar a Kaizen Ingeniería. Uno de nuestros especialistas técnicos revisará tu requerimiento y te contactará en menos de 24 horas hábiles.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="inline-block text-xs font-bold text-[#E32819] hover:underline uppercase tracking-wider mt-2"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Ej. Juan Pérez"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#E32819] focus:ring-2 focus:ring-[#E32819]/20 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="correo@empresa.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#E32819] focus:ring-2 focus:ring-[#E32819]/20 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+56 9 1234 5678"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#E32819] focus:ring-2 focus:ring-[#E32819]/20 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Nombre de la empresa"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#E32819] focus:ring-2 focus:ring-[#E32819]/20 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Cuéntanos sobre tu proyecto... *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="Describe el tipo de servicio, lugar de faena, requerimientos técnicos o plazos estimados..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#E32819] focus:ring-2 focus:ring-[#E32819]/20 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#E32819] hover:bg-[#B8180B] active:scale-[0.99] text-white font-bold py-3.5 px-6 rounded-lg shadow-lg shadow-red-900/30 transition-all flex items-center justify-center gap-2 uppercase tracking-wider text-sm disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Enviando requerimiento...</span>
                  ) : (
                    <>
                      <span>ENVIAR MENSAJE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
