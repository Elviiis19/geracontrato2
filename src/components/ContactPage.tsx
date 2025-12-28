import React, { useState } from 'react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = encodeURIComponent(`[Gera Contrato] ${formData.subject}: ${formData.name}`);
    const body = encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`);
    
    // Open default mail client
    window.location.href = `mailto:contato@geracontrato.com.br?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-6">Fale Conosco</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Tem alguma dúvida técnica, sugestão de melhoria ou proposta de parceria? 
          Estamos prontos para ouvir você.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        
        {/* Contact Info Side */}
        <div className="bg-slate-900 p-10 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-50"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
            <p className="text-blue-100 mb-8 leading-relaxed">
              O Gera Contrato é uma iniciativa independente para facilitar a vida do brasileiro. Se você encontrou um erro no site ou quer sugerir um novo modelo de contrato, entre em contato.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-lg text-blue-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="font-bold text-lg">Email</p>
                  <a href="mailto:contato@geracontrato.com.br" className="text-blue-200 hover:text-white transition-colors">contato@geracontrato.com.br</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-lg text-blue-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <p className="font-bold text-lg">Suporte Jurídico?</p>
                  <p className="text-blue-200 text-sm">
                    Não oferecemos consultoria jurídica. Para dúvidas legais específicas sobre o seu caso, consulte um advogado.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20 relative z-10">
             <p className="text-sm text-blue-200 mb-4">Conecte-se com o fundador:</p>
             <div className="flex space-x-4">
               <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all text-white">
                 <span className="font-bold text-sm">in</span>
               </a>
             </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="p-10 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Seu Nome</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  placeholder="Ex: Maria Silva"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Seu Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  placeholder="Ex: maria@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Assunto</label>
              <select 
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white"
              >
                <option value="">Selecione um assunto...</option>
                <option value="Dúvida Técnica">Dúvida Técnica sobre o Site</option>
                <option value="Sugestão">Sugestão de Novo Contrato</option>
                <option value="Reportar Erro">Reportar um Erro (Bug)</option>
                <option value="Parceria">Proposta de Parceria</option>
                <option value="Outros">Outros</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Mensagem</label>
              <textarea 
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                placeholder="Descreva como podemos ajudar..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              Enviar Mensagem
            </button>
            
            <p className="text-xs text-center text-slate-400 mt-4">
              Ao clicar em enviar, seu gerenciador de email padrão será aberto com a mensagem preenchida.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};