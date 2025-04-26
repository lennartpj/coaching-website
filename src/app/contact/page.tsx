'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // This will be replaced with Cloudflare Functions endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Vielen Dank für Ihre Nachricht! Ich werde mich in Kürze bei Ihnen melden.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setFormStatus({
          submitted: true,
          success: false,
          message: data.message || 'Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.'
        });
      }
    } catch {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontaktieren Sie mich</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">Lassen Sie uns besprechen, wie Coaching Ihnen helfen kann, Ihre Ziele zu erreichen</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Nehmen Sie Kontakt auf</h2>
              <p className="text-dark mb-8">
                Ich bin hier, um alle Fragen zu meinen Coaching-Angeboten zu beantworten. Füllen Sie das Formular aus und ich werde mich so schnell wie möglich bei Ihnen melden.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark mb-1">E-Mail</h3>
                    <p className="text-medium">info@steinkamp-coaching.de</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark mb-1">Telefon</h3>
                    <p className="text-medium">+49 (0) 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark mb-1">Standort</h3>
                    <p className="text-medium">Musterstraße 123<br />12345 Musterstadt</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-black"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">E-Mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-black"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-dark mb-1">Betreff</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-black"
                  >
                    <option value="">Bitte wählen Sie</option>
                    <option value="career">Karriere-Coaching</option>
                    <option value="personal">Persönliches Wachstums-Coaching</option>
                    <option value="business">Business-Coaching</option>
                    <option value="other">Anderes</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark mb-1">Nachricht</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-black"
                  ></textarea>
                </div>

                {formStatus.submitted && (
                  <div className={`p-4 rounded-md ${formStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    {formStatus.message}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-dark">Häufig gestellte Fragen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-dark">Wie laufen Coaching-Sitzungen ab?</h3>
              <p className="text-medium">Coaching-Sitzungen werden in der Regel per Videoanruf durchgeführt und dauern 60 Minuten. Wir besprechen Ihre Ziele und Herausforderungen und entwickeln maßgeschneiderte, umsetzbare Strategien für Ihre Bedürfnisse.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-dark">Wie viele Sitzungen benötige ich?</h3>
              <p className="text-medium">Die Anzahl der Sitzungen variiert je nach Ihren Zielen und Ihrer Situation. Einige Klienten erreichen ihre Ziele bereits nach wenigen Sitzungen, während andere von einer kontinuierlichen Unterstützung über mehrere Monate profitieren.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-dark">Bieten Sie Rückerstattungen an?</h3>
              <p className="text-medium">Wenn Sie mit Ihrer ersten Coaching-Sitzung nicht zufrieden sind, biete ich eine 100%ige Geld-zurück-Garantie. Bei Paketbuchungen sind Rückerstattungen für nicht genutzte Sitzungen anteilig möglich.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-dark">Kann ich meinen Termin ändern?</h3>
              <p className="text-medium">Ja, Termine können mit einer Frist von mindestens 24 Stunden ohne zusätzliche Kosten verschoben werden. Bei kurzfristigen Absagen oder versäumten Terminen kann eine Gebühr anfallen.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}