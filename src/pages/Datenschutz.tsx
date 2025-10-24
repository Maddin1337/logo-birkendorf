import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Database, Globe, Mail, Phone, User, FileText, AlertTriangle, ArrowLeft } from 'lucide-react';

export default function Datenschutz() {
  const [activeSection, setActiveSection] = useState('allgemeines');

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
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Datenschutzerklärung</h1>
          
          <div className="space-y-8">
            {/* Verantwortliche Stelle */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <User className="mr-2 h-5 w-5 text-teal-600" />
                Verantwortliche Stelle im Sinne der Datenschutzgesetze
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
                    <Mail className="text-teal-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">E-Mail-Adresse</h3>
                    <p className="text-gray-600">info@logopaedie-birkendorf.de</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-teal-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Telefonnummer</h3>
                    <p className="text-gray-600">02226 905917</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ihre Betroffenenrechte */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Shield className="mr-2 h-5 w-5 text-teal-600" />
                Ihre Betroffenenrechte
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                  <p className="text-gray-700 leading-relaxed">
                    Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>Berichtigung unrichtiger personenbezogener Daten</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>Löschung Ihrer bei uns gespeicherten Daten</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                  <p className="text-gray-700 leading-relaxed">
                    Sie können sich jederzeit mit einer Beschwerde an die für Sie zuständige Aufsichtsbehörde wenden. Ihre zuständige Aufsichtsbehörde richtet sich nach dem Bundesland Ihres Wohnsitzes, Ihrer Arbeit oder der mutmaßlichen Verletzung. Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: 
                    <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" className="text-teal-600 hover:text-teal-700 underline" target="_blank" rel="noopener noreferrer">
                      https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Zweck der Datenverarbeitung */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Database className="mr-2 h-5 w-5 text-teal-600" />
                Zweck der Datenverarbeitung durch die verantwortliche Stelle und Dritte
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                  <p className="text-gray-700 leading-relaxed">
                    Wir verarbeiten Ihre personenbezogenen Daten nur zu den in dieser Datenschutzerklärung genannten Zwecken. Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den genannten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>die Verarbeitung zur Abwicklung eines Vertrags mit Ihnen erforderlich ist</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>die Verarbeitung zur Wahrung berechtigter Interessen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Löschung bzw. Sperrung der Daten */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Lock className="mr-2 h-5 w-5 text-teal-600" />
                Löschung bzw. Sperrung der Daten
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                  <p className="text-gray-700 leading-relaxed">
                    Wir halten uns an die Grundsätze der Datenverarbeitung und Datensparsamkeit. Wir speichern Ihre personenbezogenen Daten daher nur so lange, wie dies zur Erreichung der hier genannten Zwecke erforderlich ist oder wie es die vom Gesetzgeber vorgesehenen vielfältigen Speicherfristen vorsehen. Nach Fortfall des jeweiligen Zweckes bzw. Ablaufs dieser Fristen werden die entsprechenden Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht.
                  </p>
                </div>
              </div>
            </div>

            {/* Erfassung allgemeiner Informationen beim Besuch unserer Website */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Globe className="mr-2 h-5 w-5 text-teal-600" />
                Erfassung allgemeiner Informationen beim Besuch unserer Website
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                  <p className="text-gray-700 leading-relaxed">
                    Wenn Sie auf unsere Website zugreifen, werden automatisch mittels eines Cookies Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) enthalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und ähnliches. Hierbei handelt es sich ausschließlich um Informationen, welche keine Rückschlüsse auf Ihre Person zulassen.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                  <p className="text-gray-700 leading-relaxed">
                    Diese Informationen sind technisch notwendig, um von Ihnen angeforderte Inhalte von Webseiten korrekt auszuliefern und fallen bei Nutzung des Internets zwingend an. Sie werden insbesondere zu folgenden Zwecken verarbeitet:
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>Sicherstellung eines problemlosen Verbindungsaufbaus der Website</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>Sicherstellung einer reibungslosen Nutzung unserer Website</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>Auswertung der Systemsicherheit und -stabilität sowie</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>zu weiteren administrativen Zwecken</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                  <p className="text-gray-700 leading-relaxed">
                    Die Verarbeitung Ihrer personenbezogenen Daten basiert auf unserem berechtigten Interesse aus den vorgenannten Zwecken zur Datenerhebung. Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu ziehen. Empfänger der Daten sind nur die verantwortliche Stelle und ggf. Auftragsverarbeiter.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                  <p className="text-gray-700 leading-relaxed">
                    Anonyme Informationen dieser Art werden von uns ggfs. statistisch ausgewertet, um unseren Internetauftritt und die dahinterstehende Technik zu optimieren.
                  </p>
                </div>
              </div>
            </div>

            {/* Cookies */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <FileText className="mr-2 h-5 w-5 text-teal-600" />
                Cookies
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                  <p className="text-gray-700 leading-relaxed">
                    Wie viele andere Webseiten verwenden wir auch so genannte „Cookies". Cookies sind kleine Textdateien, die von einem Websiteserver auf Ihre Festplatte übertragen werden. Hierdurch erhalten wir automatisch bestimmte Daten wie z. B. IP-Adresse, verwendeter Browser, Betriebssystem und Ihre Verbindung zum Internet.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                  <p className="text-gray-700 leading-relaxed">
                    Cookies können nicht verwendet werden, um Programme zu starten oder Viren auf einen Computer zu übertragen. Anhand der in Cookies enthaltenen Informationen können wir Ihnen die Navigation erleichtern und die korrekte Anzeige unserer Webseiten ermöglichen.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                  <p className="text-gray-700 leading-relaxed">
                    In keinem Fall werden die von uns erfassten Daten an Dritte weitergegeben oder ohne Ihre Einwilligung eine Verknüpfung mit personenbezogenen Daten hergestellt.
                  </p>
                </div>
              </div>
            </div>

            {/* Erbringung kostenpflichtiger Leistungen */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5 text-teal-600" />
                Erbringung kostenpflichtiger Leistungen
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                  <p className="text-gray-700 leading-relaxed">
                    Zur Erbringung kostenpflichtiger Leistungen werden von uns zusätzliche Daten erfragt, wie z.B. Zahlungsangaben, um Ihre Bestellung ausführen zu können. Wir speichern diese Daten in unseren Systemen bis die gesetzlichen Aufbewahrungsfristen abgelaufen sind.
                  </p>
                </div>
              </div>
            </div>

            {/* SSL-Verschlüsselung */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Lock className="mr-2 h-5 w-5 text-teal-600" />
                SSL-Verschlüsselung
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                  <p className="text-gray-700 leading-relaxed">
                    Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.
                  </p>
                </div>
              </div>
            </div>

            {/* Kontaktformular */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Mail className="mr-2 h-5 w-5 text-teal-600" />
                Kontaktformular
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                  <p className="text-gray-700 leading-relaxed">
                    Treten Sie bzgl. Fragen jeglicher Art per E-Mail oder Kontaktformular mit uns in Kontakt, erteilen Sie uns zum Zwecke der Kontaktaufnahme Ihre freiwillige Einwilligung. Hierfür ist die Angabe einer validen E-Mail-Adresse erforderlich. Diese dient der Zuordnung der Anfrage und der anschließenden Beantwortung derselben. Die Angabe weiterer Daten ist optional. Die von Ihnen gemachten Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert. Nach Erledigung der von Ihnen gestellten Anfrage werden personenbezogene Daten automatisch gelöscht.
                  </p>
                </div>
              </div>
            </div>

            {/* Verwendung von Google Maps */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Globe className="mr-2 h-5 w-5 text-teal-600" />
                Verwendung von Google Maps
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                  <p className="text-gray-700 leading-relaxed">
                    Diese Webseite verwendet Google Maps API, um geographische Informationen visuell darzustellen. Bei der Nutzung von Google Maps werden von Google auch Daten über die Nutzung der Kartenfunktionen durch Besucher erhoben, verarbeitet und genutzt. Nähere Informationen über die Datenverarbeitung durch Google können Sie den Google-Datenschutzhinweisen entnehmen. Dort können Sie im Datenschutzcenter auch Ihre persönlichen Datenschutz-Einstellungen verändern.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                  <p className="text-gray-700 leading-relaxed">
                    Ausführliche Anleitungen zur Verwaltung der eigenen Daten im Zusammenhang mit Google-Produkten finden Sie hier.
                  </p>
                </div>
              </div>
            </div>

            {/* Änderung unserer Datenschutzbestimmungen */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Eye className="mr-2 h-5 w-5 text-teal-600" />
                Änderung unserer Datenschutzbestimmungen
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                  <p className="text-gray-700 leading-relaxed">
                    Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
                  </p>
                </div>
              </div>
            </div>

            {/* Fragen an den Datenschutzbeauftragten */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Phone className="mr-2 h-5 w-5 text-teal-600" />
                Fragen an den Datenschutzbeauftragten
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                  <p className="text-gray-700 leading-relaxed">
                    Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="text-teal-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Verantwortliche Person</h3>
                      <p className="text-gray-600">Andrea Birkendorf</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-teal-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">E-Mail-Adresse</h3>
                      <p className="text-gray-600">info@logopaedie-birkendorf.de</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}