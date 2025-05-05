import React from 'react';
import { Container } from '@/components/ui/container';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';
import Link from 'next/link';
import { Metadata } from 'next';

// Export metadata - these will be Dutch only without translations
export const metadata: Metadata = {
  title: 'Privacybeleid - iSystem Academy',
  description: 'Lees het privacybeleid voor het gebruik van de iSystem Academy platform.',
};

export default function PrivacyPage() {
  // Format current date in Dutch format using server-side formatting
  const currentDate = format(new Date(), 'd MMMM yyyy', { locale: nl });

  return (
    <div className="min-h-screen bg-white">
      <Container className="py-16 max-w-4xl">
        <nav className="mb-8">
          <Link href="/" className="text-primary hover:underline">
            Home
          </Link>{' '}
          &gt; Privacybeleid
        </nav>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacybeleid - iSystem.ai</h1>
        <p className="text-gray-600 mb-8">Laatst bijgewerkt: {currentDate}</p>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            iSystem.ai B.V. ("iSystem.ai", "wij", "ons", "onze") respecteert uw privacy en is toegewijd aan het beschermen van uw persoonsgegevens. Dit Privacybeleid legt uit hoe wij persoonsgegevens verzamelen, gebruiken, openbaar maken en beschermen wanneer u gebruik maakt van onze Diensten (zoals gedefinieerd in de <Link href="/legal/terms" className="text-primary hover:underline">Gebruiksvoorwaarden</Link>), inclusief de iSystem Academy en het toekomstige iSystem.ai platform. Dit beleid is opgesteld in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG/GDPR).
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. Verwerkingsverantwoordelijke</h2>
          <p>
            De verwerkingsverantwoordelijke voor uw persoonsgegevens is:<br />
            iSystem.ai B.V.<br />
            [Registratieadres/KvK-nummer invoegen]<br />
            [Contactadres invoegen]<br />
            Email: <a href="mailto:privacy@isystem.ai" className="text-primary hover:underline">privacy@isystem.ai</a><br />
            [Indien van toepassing: Functionaris Gegevensbescherming (DPO) contactgegevens invoegen]
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Welke Persoonsgegevens Verzamelen Wij?</h2>
          <p>
            Wij kunnen de volgende categorieën persoonsgegevens verzamelen:
          </p>
          <ul className="list-disc ml-8 mb-4">
            <li><strong>Accountgegevens:</strong> Naam, e-mailadres, wachtwoord (versleuteld), eventueel telefoonnummer, achtergrondinformatie (zoals verstrekt bij aanmelding, bijv. 'nieuwkomer', 'werkzoekend'), taalvoorkeuren.</li>
            <li><strong>Profielgegevens:</strong> Informatie die u toevoegt aan uw profiel, zoals werkervaring, opleiding, vaardigheden, profielfoto (optioneel).</li>
            <li><strong>Gebruiksgegevens:</strong> Informatie over hoe u de Dienst gebruikt, zoals gevolgde cursussen, voortgang, quizresultaten, opdrachtinzendingen, interacties met de AI Tutor, forum posts, bekeken pagina's, loggegevens (IP-adres, browsertype, toegangstijden).</li>
            <li><strong>Communicatiegegevens:</strong> Gegevens uit communicatie met ons (bijv. supportvragen) of via de Dienst (bijv. forum posts, chatberichten indien van toepassing).</li>
            <li><strong>Betalingsgegevens (Indien van toepassing):</strong> Bij aankoop van betaalde diensten verwerken wij geen creditcardgegevens direct; deze worden verwerkt door onze externe betalingsprovider (bijv. Stripe). Wij kunnen transactie-informatie ontvangen (maar geen volledige kaartnummers).</li>
            <li><strong>Technische Gegevens:</strong> Informatie over uw apparaat en internetverbinding, inclusief IP-adres, browser type/versie, besturingssysteem.</li>
            <li><strong>Cookiegegevens:</strong> Zie ons Cookiebeleid hieronder (Sectie 9).</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. Doeleinden en Rechtsgronden voor Verwerking</h2>
          <p>
            Wij verwerken uw persoonsgegevens voor de volgende doeleinden en op basis van de volgende rechtsgronden (AVG Artikel 6):
          </p>
          <ul className="list-disc ml-8 mb-4">
            <li><strong>Leveren en beheren van de Dienst:</strong> Om uw account aan te maken en te beheren, toegang te verlenen tot cursussen en functies (inclusief AI Tutor), uw voortgang bij te houden. (Rechtsgrond: Uitvoering van een overeenkomst).</li>
            <li><strong>Personaliseren van de leerervaring:</strong> Om leermateriaal en ondersteuning (incl. AI Tutor) aan te passen aan uw behoeften en voortgang (toekomstige platformfunctie). (Rechtsgrond: Gerechtvaardigd belang om de dienst te verbeteren; mogelijk Toestemming voor specifieke personalisatie).</li>
            <li><strong>Communicatie:</strong> Om u serviceberichten, updates, support en antwoorden op uw vragen te sturen. (Rechtsgrond: Uitvoering van een overeenkomst; Gerechtvaardigd belang).</li>
            <li><strong>Verbetering van de Dienst:</strong> Om gebruiksgegevens te analyseren voor het verbeteren van de functionaliteit, inhoud, AI-modellen en gebruikerservaring. (Rechtsgrond: Gerechtvaardigd belang).</li>
            <li><strong>Naleving en Rapportage (voor Instellingen - Fase 2):</strong> Om Instellingen te voorzien van rapportages over voortgang en naleving van hun gebruikers (met passende waarborgen). (Rechtsgrond: Uitvoering van een overeenkomst met de Instelling; mogelijk Wettelijke verplichting afhankelijk van context).</li>
            <li><strong>Marketing (met toestemming):</strong> Om u informatie te sturen over nieuwe cursussen of functies, indien u hiervoor toestemming heeft gegeven. (Rechtsgrond: Toestemming).</li>
            <li><strong>Beveiliging en Fraudepreventie:</strong> Om de Dienst te beveiligen en misbruik te detecteren/voorkomen. (Rechtsgrond: Gerechtvaardigd belang; Wettelijke verplichting).</li>
            <li><strong>Wettelijke Verplichtingen:</strong> Om te voldoen aan toepasselijke wet- en regelgeving. (Rechtsgrond: Wettelijke verplichting).</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Delen van Persoonsgegevens</h2>
          <p>
            Wij delen uw persoonsgegevens alleen in de volgende gevallen:
          </p>
          <ul className="list-disc ml-8 mb-4">
            <li><strong>Dienstverleners:</strong> Met externe partijen die diensten voor ons uitvoeren (bijv. hosting providers zoals [AWS/Google Cloud - specificeer], betalingsverwerkers, analyse tools, AI-platform providers [indien van toepassing en met data processing agreement]). Deze partijen mogen de gegevens alleen verwerken volgens onze instructies en voor de afgesproken doeleinden.</li>
            <li><strong>Instellingen (Fase 2):</strong> Indien u de Dienst gebruikt via een Instelling (gemeente, school), kunnen wij rapportagegegevens over uw voortgang delen met die Instelling, conform de overeenkomst met hen en met respect voor uw privacy.</li>
            <li><strong>Partners (Workshops):</strong> Beperkte informatie (bijv. aanwezigheidslijst) kan gedeeld worden met partners die helpen bij de logistiek van offline workshops, uitsluitend voor dat doel.</li>
            <li><strong>Wettelijke Vereisten:</strong> Indien wettelijk verplicht of noodzakelijk om onze rechten te beschermen of te reageren op juridische processen.</li>
            <li><strong>Bedrijfsoverdracht:</strong> Bij een fusie, overname of verkoop van bedrijfsonderdelen kunnen gegevens worden overgedragen aan de nieuwe eigenaar, met passende waarborgen.</li>
            <li><strong>Met Uw Toestemming:</strong> In andere gevallen zullen wij uw expliciete toestemming vragen alvorens gegevens te delen.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. Internationale Doorgifte van Gegevens</h2>
          <p>
            Onze servers bevinden zich primair binnen de Europese Economische Ruimte (EER). Indien wij gegevens doorgeven aan dienstverleners buiten de EER, zorgen wij voor passende waarborgen conform de AVG (bijv. Standard Contractual Clauses, adequaatheidsbesluit).
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">6. Gegevensbewaring</h2>
          <p>
            Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk is voor de doeleinden waarvoor ze zijn verzameld, tenzij een langere bewaartermijn wettelijk vereist of toegestaan is (bijv. voor boekhouding). Accountgegevens worden bewaard zolang uw account actief is en voor een redelijke periode daarna om heractivering mogelijk te maken of te voldoen aan wettelijke verplichtingen. Gebruiksgegevens kunnen geanonimiseerd worden bewaard voor analyse.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">7. Uw Rechten onder de AVG</h2>
          <p>
            U heeft de volgende rechten met betrekking tot uw persoonsgegevens:
          </p>
          <ul className="list-disc ml-8 mb-4">
            <li><strong>Recht op inzage:</strong> U kunt een kopie van uw gegevens opvragen.</li>
            <li><strong>Recht op rectificatie:</strong> U kunt onjuiste gegevens laten corrigeren.</li>
            <li><strong>Recht op verwijdering ('recht op vergetelheid'):</strong> U kunt vragen om verwijdering van uw gegevens onder bepaalde omstandigheden.</li>
            <li><strong>Recht op beperking van de verwerking:</strong> U kunt vragen om beperking van de verwerking van uw gegevens.</li>
            <li><strong>Recht op dataportabiliteit:</strong> U kunt vragen om overdracht van uw gegevens in een machineleesbaar formaat.</li>
            <li><strong>Recht van bezwaar:</strong> U kunt bezwaar maken tegen de verwerking van uw gegevens voor bepaalde doeleinden.</li>
            <li><strong>Rechten met betrekking tot geautomatiseerde besluitvorming:</strong> U heeft het recht niet onderworpen te worden aan besluitvorming die uitsluitend op geautomatiseerde verwerking is gebaseerd en u rechtens treft of aanmerkelijk treft, tenzij dit noodzakelijk is voor uw overeenkomst met ons of u hiervoor uitdrukkelijk toestemming heeft gegeven.</li>
          </ul>
          <p>
            Om deze rechten uit te oefenen, kunt u contact met ons opnemen via <a href="mailto:privacy@isystem.ai" className="text-primary hover:underline">privacy@isystem.ai</a>. Wij zullen binnen 30 dagen reageren op uw verzoek, tenzij een langere periode nodig is, waarvan u op de hoogte zult worden gebracht. U heeft ook het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl).
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">8. Cookies en Vergelijkbare Technologieën</h2>
          <p>
            Wij gebruiken cookies en vergelijkbare technologieën om de functionaliteit en veiligheid van onze Dienst te waarborgen, uw ervaring te verbeteren en het gebruik van onze Dienst te analyseren. Wij gebruiken de volgende soorten cookies:
          </p>
          <ul className="list-disc ml-8 mb-4">
            <li><strong>Noodzakelijke cookies:</strong> Vereist om de Dienst te laten functioneren (bijv. authenticatie, beveiliging).</li>
            <li><strong>Functionele cookies:</strong> Voor het onthouden van uw voorkeuren (bijv. taalinstelling).</li>
            <li><strong>Analytische cookies:</strong> Om te begrijpen hoe bezoekers de Dienst gebruiken (bijv. Google Analytics).</li>
          </ul>
          <p>
            U kunt cookies beheren via uw browserinstellingen. Het uitschakelen van bepaalde cookies kan echter gevolgen hebben voor de functionaliteit van de Dienst.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">9. Gegevensbeveiliging</h2>
          <p>
            Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen verlies, misbruik, ongeautoriseerde toegang, openbaarmaking of wijziging. Deze maatregelen omvatten onder meer versleuteling, toegangscontroles, regelmatige beveiligingsevaluaties en medewerkerstraining. Hoewel wij streven naar het hoogste niveau van bescherming, kunnen wij geen absolute veiligheid garanderen.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">10. Kinderen</h2>
          <p>
            Onze Dienst is niet gericht op personen jonger dan 16 jaar ('Kinderen'). Wij verzamelen niet bewust persoonlijk identificeerbare informatie van Kinderen. Als u ontdekt dat een Kind ons persoonlijke gegevens heeft verstrekt, neem dan contact met ons op. Als wij er kennis van nemen dat wij persoonlijke gegevens van Kinderen hebben verzameld zonder verificatie van ouderlijke toestemming, zullen wij stappen ondernemen om deze informatie te verwijderen uit onze servers.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">11. Wijzigingen in dit Privacybeleid</h2>
          <p>
            Wij kunnen dit Privacybeleid van tijd tot tijd wijzigen. Wijzigingen worden van kracht zodra het bijgewerkte Privacybeleid op de Dienst wordt geplaatst. Bij materiële wijzigingen zullen wij u hiervan op de hoogte stellen via een prominente kennisgeving op onze website of via e-mail. Wij raden u aan dit Privacybeleid regelmatig te controleren op updates.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">12. Contact</h2>
          <p>
            Als u vragen, opmerkingen of verzoeken heeft over dit Privacybeleid of onze gegevensverwerkingspraktijken, kunt u contact met ons opnemen via:
          </p>
          <p>
            iSystem.ai B.V.<br />
            Email: <a href="mailto:privacy@isystem.ai" className="text-primary hover:underline">privacy@isystem.ai</a>
          </p>
        </div>
      </Container>
    </div>
  );
}