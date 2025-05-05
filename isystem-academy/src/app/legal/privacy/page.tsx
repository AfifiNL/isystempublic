import React from 'react';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';
import Link from 'next/link';
import { Container } from '@/components/ui/container';

export const metadata = {
  title: 'Privacybeleid - iSystem Academy',
  description: 'Informatie over hoe iSystem Academy uw persoonsgegevens verzamelt, gebruikt en beschermt.',
};

export default function PrivacyPage() {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "d MMMM yyyy", { locale: nl });
  
  return (
    <main className="py-12">
      <Container className="max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Privacybeleid - iSystem Academy</h1>
        <div className="text-sm mb-8">
          <p>Laatst bijgewerkt: {formattedDate}</p>
        </div>
        
        <section className="prose max-w-none">
          <h2>1. Inleiding</h2>
          <p>
            Bij iSystem Academy vinden we uw privacy belangrijk. Dit privacybeleid legt uit hoe wij uw persoonsgegevens 
            verzamelen, gebruiken, delen en beschermen wanneer u onze leerplatform bezoekt of gebruik maakt van onze 
            diensten.
          </p>
          
          <h2>2. Gegevensverzameling in Educatieve Context</h2>
          <p>
            Wij verzamelen bepaalde persoonsgegevens wanneer u:
          </p>
          <ul>
            <li>Ons Academy platform bezoekt</li>
            <li>Een leeraccount aanmaakt</li>
            <li>Zich inschrijft voor een cursus of training</li>
            <li>Voortgang maakt in uw leertraject</li>
            <li>Feedback geeft of vragen stelt via het platform</li>
          </ul>
          
          <h2>3. Soorten gegevens</h2>
          <p>
            De persoonsgegevens die wij kunnen verzamelen omvatten:
          </p>
          <ul>
            <li>Naam en contactgegevens</li>
            <li>Inloggegevens en accountinformatie</li>
            <li>Leerresultaten en voortgangsdata</li>
            <li>Interactiegegevens met lesmateriaal</li>
            <li>Feedback en beoordelingen</li>
          </ul>
          
          <h2>4. Gebruik van gegevens</h2>
          <p>
            Wij gebruiken uw persoonsgegevens voor:
          </p>
          <ul>
            <li>Het leveren en verbeteren van onze leerdiensten</li>
            <li>Het bijhouden van uw voortgang en leerresultaten</li>
            <li>Personalisatie van uw leerervaring</li>
            <li>Communicatie over uw inschrijvingen en beschikbare cursussen</li>
            <li>Analyse en verbetering van ons onderwijsmateriaal</li>
          </ul>
          
          <h2>5. Delen van gegevens</h2>
          <p>
            Wij delen uw persoonsgegevens alleen met:
          </p>
          <ul>
            <li>Docenten en begeleiders die betrokken zijn bij uw leertraject</li>
            <li>Dienstverleners die ons helpen bij het leveren van onze leerdiensten</li>
            <li>Autoriteiten wanneer wettelijk vereist</li>
            <li>Onderwijspartners met uw toestemming</li>
          </ul>
          
          <h2>6. Beveiliging van Leergegevens</h2>
          <p>
            Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen 
            onbevoegde toegang, verlies of misbruik. We behandelen leerresultaten en voortgangsdata met extra bescherming.
          </p>
          
          <h2>7. Uw rechten als Leerling</h2>
          <p>
            U hebt het recht om:
          </p>
          <ul>
            <li>Toegang te krijgen tot uw leergegevens en persoonsgegevens</li>
            <li>Onjuiste gegevens te corrigeren</li>
            <li>Verwijdering van uw gegevens te verzoeken</li>
            <li>Bezwaar te maken tegen bepaalde verwerkingen</li>
            <li>Uw gegevens in een gestructureerd formaat te ontvangen</li>
          </ul>
          
          <h2>8. Cookies en Leertechnologie</h2>
          <p>
            Wij gebruiken cookies en educatieve analysetechnologie om uw leerervaring te verbeteren en ons te helpen 
            onze educatieve diensten te optimaliseren. U kunt uw cookievoorkeuren aanpassen via uw browserinstellingen.
          </p>
          
          <h2>9. Wijzigingen in ons privacybeleid</h2>
          <p>
            Wij kunnen dit privacybeleid van tijd tot tijd bijwerken. De meest recente versie is altijd beschikbaar 
            op ons Academy platform.
          </p>
          
          <h2>10. Contact</h2>
          <p>
            Als u vragen hebt over ons privacybeleid of de manier waarop wij uw persoonsgegevens verwerken in een educatieve context, kunt u contact met ons opnemen via:
          </p>
          <p>
            E-mail: academy-privacy@isystem.ai<br />
            Adres: Breda, Nederland
          </p>
          
          <div className="mt-8">
            <Link href="/en" className="text-blue-600 hover:underline">
              Terug naar Academy home
            </Link> | <Link href="/legal/terms" className="text-blue-600 hover:underline">
              Gebruiksvoorwaarden
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}