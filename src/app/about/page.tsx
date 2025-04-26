import Image from 'next/image';
import Button from '@/components/Button';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Über Bernhard Steinkamp</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">Wirtschaftspsychologe, systemischer Coach und Unternehmensberater – Ihr Partner für nachhaltige Entwicklung von Menschen und Organisationen.</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border-4 border-white/20 -mt-50">
                <Image 
                  src="/profilep.png" 
                  alt="Bernhard Steinkamp" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 text-primary">Mein Werdegang</h2>
              <p className="text-light mb-4 leading-relaxed">
                Nach meinem Studium der Wirtschaftspsychologie (M.Sc.) an der Hochschule Fresenius und einer Ausbildung im systemischen Coaching, habe ich meine Leidenschaft für die Förderung von Menschen und Organisationen zum Beruf gemacht. 
              </p>
              <p className="text-light mb-4 leading-relaxed">
                In meiner aktuellen Rolle als systemischer Coach und Unternehmensberater bei Delta Projekt unterstütze ich Einzelpersonen und Unternehmen dabei, Veränderungsprozesse aktiv zu gestalten, Potenziale zu entfalten und neue Perspektiven zu entwickeln. Davor war ich als HR-Manager und Personalleiter tätig und bringe umfassende Erfahrung in Personalentwicklung, Organisationsberatung und strategischem HR-Management mit.
              </p>
              <p className="text-light mb-6 leading-relaxed">
                Mein Ansatz kombiniert psychologische Expertise, unternehmerisches Denken und bewährte Methoden des systemischen Coachings. Dabei stehen Ihre individuellen Ziele und Bedürfnisse stets im Mittelpunkt meiner Arbeit.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Systemisches Coaching</span>
                <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Personalentwicklung</span>
                <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Organisationsberatung</span>
                <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Führungskräfteentwicklung</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-dark">Qualifikationen & Berufserfahrung</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-gray-300 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-dark">Ausbildung & Zertifizierungen</h3>
              <ul className="space-y-3 text-dark">
                <li>Master of Science (M.Sc.) in Wirtschaftspsychologie – Hochschule Fresenius</li>
                <li>Bachelor of Science (B.Sc.) in Wirtschaftspsychologie – University of Applied Sciences Europe</li>
                <li>Ausbildung zum Systemischen Coach – Ars Vitae Institut</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-gray-300 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-dark">Berufliche Stationen</h3>
              <ul className="space-y-3 text-dark">
                <li>Systemischer Coach und Unternehmensberater – Delta Projekt</li>
                <li>Personalleiter (HR-Manager) – HAHN Unternehmensgruppe</li>
                <li>HR-Mitarbeiter – Malteser</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-light">Meine Coaching-Philosophie</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-gray-300 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-dark">Klientenzentrierter Ansatz</h3>
              <p className="text-dark">Jede Lösung entsteht im Dialog. Mein Coaching ist individuell und ressourcenorientiert, abgestimmt auf Ihre persönlichen und beruflichen Herausforderungen.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-gray-300 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-dark">Handlungsorientierte Entwicklung</h3>
              <p className="text-dark">Ich unterstütze Sie dabei, klare Ziele zu definieren und praxisnahe Lösungen zu entwickeln, um nachhaltige Veränderungen zu erzielen.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-gray-300 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-dark">Ganzheitliche Perspektive</h3>
              <p className="text-dark">Erfolg entsteht im Zusammenspiel von beruflicher Leistung und persönlicher Balance – mein Coaching berücksichtigt stets beide Aspekte.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit, Ihre Coaching-Reise zu starten?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">Vereinbaren Sie ein kostenloses Erstgespräch und lassen Sie uns besprechen, wie ich Sie auf Ihrem Weg unterstützen kann.</p>
          <Button href="/contact" size="lg" variant="primary">Kontakt aufnehmen</Button>
        </div>
      </section>
    </div>
  );
}
