import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, User, FileText, Shield, Globe, Clock, ChevronRight, ArrowLeft } from 'lucide-react';

export default function Impressum() {
  const [activeSection, setActiveSection] = useState('angaben');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl mb-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors duration-300"
        >
          <ArrowLeft size={20} />
          Zurück zur Startseite
        </Link>
      </div>
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Impressum</h1>
          
          <div className="space-y-8">
            {/* Angaben gemäß § 5 TMG */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <FileText className="mr-2 h-5 w-5 text-teal-600" />
                Angaben gemäß § 5 TMG
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-bold">L</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Praxis für Logopädie Andrea Birkendorf</h3>
                    <p className="text-gray-600">Bolsgasse 21<br />53913 Swisttal</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="text-teal-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Vertreten durch</h3>
                    <p className="text-gray-600">Andrea Birkendorf (Logopädin)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kontakt */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Phone className="mr-2 h-5 w-5 text-teal-600" />
                Kontakt
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-teal-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Telefon</h3>
                    <p className="text-gray-600">02226 905917</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-teal-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">E-Mail</h3>
                    <p className="text-gray-600">info@logopaedie-birkendorf.de</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Verantwortlich nach § 18 Abs. 2 MStV */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <User className="mr-2 h-5 w-5 text-teal-600" />
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="text-teal-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Verantwortlich für den Inhalt</h3>
                    <p className="text-gray-600">Andrea Birkendorf</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-teal-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Anschrift</h3>
                    <p className="text-gray-600">
                      Bolsgasse 21<br />
                      53913 Swisttal
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Haftungsausschluss */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Shield className="mr-2 h-5 w-5 text-teal-600" />
                Haftungsausschluss
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                  <p className="text-gray-700 leading-relaxed">
                    Haftung für Inhalte<br />
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                  <p className="text-gray-700 leading-relaxed">
                    Haftung für Links<br />
                    Unser Angebot kann Links zu externen Webseiten Dritter enthalten, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                  <p className="text-gray-700 leading-relaxed">
                    Urheberrecht<br />
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                  <p className="text-gray-700 leading-relaxed">
                    Quelle<br />
                    Impressumgenerator von eRecht24
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}