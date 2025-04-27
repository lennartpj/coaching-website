import Image from 'next/image';
import Button from '@/components/Button';

export const runtime = 'edge';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-20 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Entfalten Sie Ihr Potenzial mit professionellem Coaching</h1>
              <p className="text-xl mb-8 text-white/90">Erschließen Sie Ihre Fähigkeiten und erreichen Sie Ihre Ziele mit persönlichem Coaching von Bernhard Steinkamp.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg" className="bg-accent text-white">Termin vereinbaren</Button>
                <Button href="/services" variant="outline" size="lg" className="bg-white/10 text-white hover:bg-white/20 border-white/30">Leistungen entdecken</Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm">
                <Image 
                  src="/profilep.png" 
                  alt="Coaching Icon" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Wie ich Ihnen helfen kann</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-accent">
              <div className="mb-4 text-accent">
                <Image src="/file.svg" alt="Karriere-Coaching" width={50} height={50} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Karriereentwicklung</h3>
              <p className="text-gray-700 mb-4">Bewältigen Sie Karriereübergänge, verbessern Sie Führungskompetenzen und erreichen Sie berufliches Wachstum.</p>
              <Button href="/services#career" variant="outline" size="sm">Mehr erfahren</Button>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-accent">
              <div className="mb-4 text-accent">
                <Image src="/window.svg" alt="Persönliches Wachstum" width={50} height={50} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Persönliches Wachstum</h3>
              <p className="text-gray-700 mb-4">Entwickeln Sie Selbstbewusstsein, überwinden Sie einschränkende Überzeugungen und stärken Sie Ihr Selbstvertrauen in allen Lebensbereichen.</p>
              <Button href="/services#personal" variant="outline" size="sm">Mehr erfahren</Button>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-accent">
              <div className="mb-4 text-accent">
                <Image src="/globe.svg" alt="Business-Coaching" width={50} height={50} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Geschäftsstrategie</h3>
              <p className="text-gray-700 mb-4">Verbessern Sie die Unternehmensleistung, optimieren Sie die Teamdynamik und entwickeln Sie effektive Führungsstrategien.</p>
              <Button href="/services#business" variant="outline" size="sm">Mehr erfahren</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Was Klienten sagen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md border-l-4 border-accent hover:shadow-lg transition-all duration-300">
              <p className="italic text-gray-700 mb-4">{`\"Die Zusammenarbeit mit Bernhard hat meinen Führungsansatz grundlegend verändert. Seine Einsichten halfen mir, einen herausfordernden Übergang zu meistern und einen effektiveren Managementstil zu entwickeln.\"`}</p>
              <div className="font-semibold text-gray-800">- Marketingdirektor, Technologieunternehmen</div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md border-l-4 border-accent hover:shadow-lg transition-all duration-300">
              <p className="italic text-gray-700 mb-4">{`\"Bernhards Coaching hat mir während eines bedeutenden Karrierewechsels Klarheit und Selbstvertrauen gegeben. Sein strukturierter Ansatz und seine durchdachte Anleitung waren genau das, was ich brauchte.\"`}</p>
              <div className="font-semibold text-gray-800">- Senior Projektmanager, Finanzsektor</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit für den nächsten Schritt?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">Vereinbaren Sie ein kostenloses 30-minütiges Beratungsgespräch, um zu besprechen, wie Coaching Ihnen helfen kann, Ihre Ziele zu erreichen.</p>
          <Button href="/contact" size="lg">Kontaktieren Sie mich heute</Button>
        </div>
      </section>
    </div>
  );
}
