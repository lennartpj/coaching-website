export const runtime = 'edge';

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/90 to-primary py-12 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-light md:text-5xl font-bold mb-4">Datenschutzerklärung</h1>
          <p className="text-light max-w-3xl mx-auto">Wie wir Ihre persönlichen Daten verarbeiten und schützen</p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="prose max-w-none">
              <p className="text-dark mb-6">Zuletzt aktualisiert: {new Date().toLocaleDateString('de-DE', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              
              <h2 className="text-2xl font-bold mb-4 text-dark">1. Einleitung</h2>
              <p className="text-dark mb-6">
                Bernhard Steinkamp ({`\"wir\"`}, {`\"unser\"`} oder {`\"uns\"`}) respektiert Ihre Privatsphäre und verpflichtet sich, Ihre persönlichen Daten zu schützen. Diese Datenschutzerklärung informiert Sie darüber, wie wir mit Ihren persönlichen Daten umgehen, wenn Sie unsere Website besuchen, und klärt Sie über Ihre Datenschutzrechte und den gesetzlichen Schutz auf.
              </p>
              
              <h2 className="text-2xl font-bold mb-4 text-dark">2. Die Daten, die wir über Sie sammeln</h2>
              <p className="text-dark mb-4">
                Personenbezogene Daten oder persönliche Informationen sind alle Informationen über eine Person, durch die diese identifiziert werden kann. Wir können verschiedene Arten von personenbezogenen Daten über Sie sammeln, verwenden, speichern und übertragen, die wir wie folgt gruppiert haben:
              </p>
              <ul className="list-disc pl-6 mb-6 text-dark">
                <li className="mb-2"><strong>Identitätsdaten</strong> umfassen Vorname, Nachname, Benutzername oder ähnliche Kennungen.</li>
                <li className="mb-2"><strong>Kontaktdaten</strong> umfassen E-Mail-Adresse und Telefonnummern.</li>
                <li className="mb-2"><strong>Technische Daten</strong> umfassen Internetprotokolladresse (IP), Browsertyp und -version, Zeitzoneneinstellung und Standort, Arten und Versionen von Browser-Plugins, Betriebssystem und Plattform sowie andere Technologien auf den Geräten, mit denen Sie auf diese Website zugreifen.</li>
                <li className="mb-2"><strong>Nutzungsdaten</strong> umfassen Informationen darüber, wie Sie unsere Website und Dienstleistungen nutzen.</li>
              </ul>
              
              <h2 className="text-2xl font-bold mb-4 text-gray-800">3. Wie wir Ihre personenbezogenen Daten sammeln</h2>
              <p className="text-gray-700 mb-4">
                Wir verwenden verschiedene Methoden, um Daten von und über Sie zu sammeln, darunter:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li className="mb-2"><strong>Direkte Interaktionen.</strong> Sie können uns Ihre Identitäts- und Kontaktdaten mitteilen, indem Sie Formulare ausfüllen oder per E-Mail oder auf andere Weise mit uns korrespondieren.</li>
                <li className="mb-2"><strong>Automatisierte Technologien oder Interaktionen.</strong> Während Sie mit unserer Website interagieren, können wir automatisch technische Daten über Ihre Geräte, Browsing-Aktionen und -Muster sammeln.</li>
              </ul>
              
              <h2 className="text-2xl font-bold mb-4 text-gray-800">4. Wie wir Ihre personenbezogenen Daten verwenden</h2>
              <p className="text-gray-700 mb-4">
                Wir werden Ihre personenbezogenen Daten nur verwenden, wenn das Gesetz dies erlaubt. Am häufigsten werden wir Ihre personenbezogenen Daten unter folgenden Umständen verwenden:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li className="mb-2">Wenn wir den Vertrag erfüllen müssen, den wir mit Ihnen abschließen werden oder bereits abgeschlossen haben.</li>
                <li className="mb-2">Wenn es für unsere berechtigten Interessen (oder die eines Dritten) notwendig ist und Ihre Interessen und Grundrechte diese Interessen nicht überwiegen.</li>
                <li className="mb-2">Wenn wir eine gesetzliche Verpflichtung erfüllen müssen.</li>
              </ul>
              
              <h2 className="text-2xl font-bold mb-4 text-gray-800">5. Datensicherheit</h2>
              <p className="text-gray-700 mb-6">
                Wir haben angemessene Sicherheitsmaßnahmen getroffen, um zu verhindern, dass Ihre personenbezogenen Daten versehentlich verloren gehen, unbefugt verwendet oder abgerufen, verändert oder offengelegt werden. Darüber hinaus beschränken wir den Zugriff auf Ihre personenbezogenen Daten auf diejenigen Mitarbeiter, Vertreter, Auftragnehmer und andere Dritte, die eine geschäftliche Notwendigkeit dafür haben.
              </p>
              
              <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Datenspeicherung</h2>
              <p className="text-gray-700 mb-6">
                Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die Erfüllung der Zwecke, für die wir sie erhoben haben, vernünftigerweise erforderlich ist, einschließlich der Erfüllung gesetzlicher, regulatorischer, steuerlicher, buchhalterischer oder berichtspflichtiger Anforderungen.
              </p>
              
              <h2 className="text-2xl font-bold mb-4 text-gray-800">7. Ihre gesetzlichen Rechte</h2>
              <p className="text-gray-700 mb-4">
                Unter bestimmten Umständen haben Sie nach den Datenschutzgesetzen Rechte in Bezug auf Ihre personenbezogenen Daten, einschließlich des Rechts auf:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li className="mb-2">Zugang zu Ihren personenbezogenen Daten anfordern.</li>
                <li className="mb-2">Berichtigung Ihrer personenbezogenen Daten anfordern.</li>
                <li className="mb-2">Löschung Ihrer personenbezogenen Daten anfordern.</li>
                <li className="mb-2">Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten.</li>
                <li className="mb-2">Einschränkung der Verarbeitung Ihrer personenbezogenen Daten anfordern.</li>
                <li className="mb-2">Übertragung Ihrer personenbezogenen Daten anfordern.</li>
                <li className="mb-2">Recht auf Widerruf der Einwilligung.</li>
              </ul>
              
              <h2 className="text-2xl font-bold mb-4 text-gray-800">8. Kontaktieren Sie uns</h2>
              <p className="text-dark mb-6">
                Wenn Sie Fragen zu dieser Datenschutzerklärung oder unseren Datenschutzpraktiken haben, kontaktieren Sie uns bitte unter: <a href="mailto:coaching@steinkamp.com" className="text-primary hover:underline">coaching@steinkamp.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}