export default function Impressum() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/90 to-primary py-12 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-light md:text-5xl font-bold mb-4">Impressum</h1>
          <p className="text-xl max-w-3xl mx-auto">Rechtliche Informationen über diese Website</p>
        </div>
      </section>

      {/* Impressum Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="prose max-w-none">
              <h2 className="text-dark font-bold mb-4 text-primary">Angaben gemäß § 5 TMG</h2>
              
              <div className="mb-8">
                <p className="text-dark">Bernhard Steinkamp</p>
                <p className="text-dark">Professionelle Coaching-Dienstleistungen</p>
                <p className="text-dark">Musterstraße 123</p>
                <p className="text-dark">10115 Berlin</p>
                <p className="text-dark">Germany</p>
              </div>
              
              <h3 className="text-dark font-bold mb-3 text-primary">Kontakt</h3>
              <div className="mb-8">
                <p className="text-dark">Telefon: +49 30 1234567</p>
                <p className="text-dark">E-Mail: <a href="mailto:coaching@steinkamp.com" className="text-primary hover:underline">coaching@steinkamp.com</a></p>
              </div>
              
              <h3 className="text-dark font-bold mb-3 text-primary">Umsatzsteuer-Identifikationsnummer</h3>
              <div className="mb-8">
                <p className="text-dark">USt-IdNr.: DE123456789</p>
              </div>
              
              <h3 className="text-dark font-bold mb-3 text-primary">Inhaltlich Verantwortlicher</h3>
              <div className="mb-8">
                <p className="text-dark">Bernhard Steinkamp</p>
                <p className="text-dark">Musterstraße 123</p>
                <p className="text-dark">10115 Berlin</p>
                <p className="text-dark">Germany</p>
              </div>
              
              <h2 className="text-dark font-bold mb-4 text-primary">Streitschlichtung</h2>
              <div className="mb-8">
                <p className="text-dark mb-4">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="text-dark">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
              
              <h2 className="text-dark font-bold mb-4 text-gray-800">Haftung für Inhalte</h2>
              <div className="mb-8">
                <p className="text-gray-600 mb-4">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p className="text-gray-600">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>
              
              <h2 className="text-dark font-bold mb-4 text-gray-800">Haftung für Links</h2>
              <div className="mb-8">
                <p className="text-gray-600">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
                <p className="text-gray-600 mt-4">
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </div>
              
              <h2 className="text-dark font-bold mb-4 text-gray-800">Urheberrecht</h2>
              <div className="mb-8">
                <p className="text-gray-600">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
                <p className="text-gray-600 mt-4">
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}