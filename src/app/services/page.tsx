"use client";

import Image from 'next/image';

export const runtime = 'edge';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

export default function Services() {
  // Define animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Coaching-Angebote</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">Personalisierte Coaching-Lösungen, die Ihnen helfen, Ihre Ziele zu erreichen und Ihr volles Potenzial zu entfalten</p>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-light">Wie ich Ihnen zum Erfolg verhelfen kann</h2>
            <p className="text-light text-lg">
              Meine Coaching-Angebote sind darauf ausgerichtet, auf Ihre spezifischen Bedürfnisse und Herausforderungen einzugehen. Ob Sie Ihre Karriere voranbringen, Ihre Führungskompetenzen verbessern oder persönliches Wachstum erreichen möchten - ich biete maßgeschneiderte Coaching-Programme, um Sie auf Ihrem Weg zu unterstützen.
            </p>
          </div>

          {/* Career Development */}
          <motion.div
            id="career"
            className="mb-20 scroll-mt-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="bg-primary text-white p-6 rounded-lg flex justify-center">
                  <Image src="/file.svg" alt="Career Development" width={120} height={120} />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-light">Karriereentwicklungs-Coaching</h3>
                <p className="text-light mb-4">
                  Bewältigen Sie Karriereübergänge, verbessern Sie Ihre Führungskompetenzen und erreichen Sie Ihre beruflichen Ziele mit personalisiertem Karriere-Coaching.
                </p>
                <div className="bg-primary/5 p-6 rounded-lg mb-6 border-l-4 border-primary">
                  <h4 className="font-semibold mb-3 text-light">Dieses Angebot umfasst:</h4>
                  <ul className="space-y-2 text-medium">
                    <li className="flex items-start">
                      <span className="text-light mr-2">•</span>
                      <span>Bewertung und Planung des Karrierewegs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-light mr-2">•</span>
                      <span>Entwicklung von Führungskompetenzen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-light mr-2">•</span>
                      <span>Verbesserung der professionellen Kommunikation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-light mr-2">•</span>
                      <span>Work-Life-Balance Strategien</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Personal Growth */}
          <motion.div
            id="personal"
            className="mb-20 scroll-mt-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/3">
                <div className="bg-primary text-white p-6 rounded-lg flex justify-center">
                  <Image src="/window.svg" alt="Personal Growth" width={120} height={120} />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-light">Persönliches Wachstums-Coaching</h3>
                <p className="text-light mb-4">
                  Entwickeln Sie Selbstbewusstsein, überwinden Sie einschränkende Überzeugungen und stärken Sie Ihr Selbstvertrauen in allen Lebensbereichen durch gezieltes persönliches Entwicklungs-Coaching.
                </p>
                <div className="bg-primary/5 p-6 rounded-lg mb-6 border-l-4 border-primary">
                  <h4 className="font-semibold mb-3 text-light">Dieses Angebot umfasst:</h4>
                  <ul className="space-y-2 text-medium">
                    <li className="flex items-start">
                      <span className="text-light mr-2">•</span>
                      <span>Klärung persönlicher Werte</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-light mr-2">•</span>
                      <span>Zielsetzung und Erfolgsstrategien</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-light mr-2">•</span>
                      <span>Aufbau von Selbstvertrauen und Selbstwertgefühl</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-light mr-2">•</span>
                      <span>Stressbewältigungstechniken</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Business Strategy */}
          <motion.div
            id="business"
            className="mb-20 scroll-mt-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="bg-primary text-white p-6 rounded-lg flex justify-center">
                  <Image src="/globe.svg" alt="Business Strategy" width={120} height={120} />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-light">Business-Strategie-Coaching</h3>
                <p className="text-light mb-4">
                  Optimieren Sie Ihre Unternehmensstrategie, verbessern Sie die Teamdynamik und entwickeln Sie effektive Führungsansätze mit maßgeschneidertem Business-Coaching.
                </p>
                <div className="bg-primary/5 p-6 rounded-lg mb-6 border-l-4 border-primary">
                  <h4 className="font-semibold mb-3 text-light">Dieses Angebot umfasst:</h4>
                  <ul className="space-y-2 text-medium">
                    <li className="flex items-start">
                      <span className="text-light mr-2">•</span>
                      <span>Strategische Unternehmensentwicklung</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-light mr-2">•</span>
                      <span>Team- und Führungskräfteentwicklung</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-light mr-2">•</span>
                      <span>Change Management und Transformation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-light mr-2">•</span>
                      <span>Konfliktmanagement und Mediation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit für den nächsten Schritt?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">Vereinbaren Sie ein kostenloses 30-minütiges Beratungsgespräch und entdecken Sie, welches Coaching-Angebot am besten zu Ihren Zielen passt.</p>
          <Button href="/contact" size="lg">Kontakt aufnehmen</Button>
        </div>
      </section>
    </div>
  );
}