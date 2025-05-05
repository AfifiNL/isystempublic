import React from 'react';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';
import Link from 'next/link';
import { Container } from '@/components/ui/container';

export const metadata = {
  title: 'Gebruiksvoorwaarden - iSystem Academy',
  description: 'De gebruiksvoorwaarden voor het gebruik van iSystem Academy leerplatform.',
};

export default function TermsPage() {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "d MMMM yyyy", { locale: nl });
  
  return (
    <main className="py-12">
      <Container className="max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Gebruiksvoorwaarden - iSystem Academy</h1>
        <div className="text-sm mb-8">
          <p>Laatst bijgewerkt: {formattedDate}</p>
        </div>
        
        <section className="prose max-w-none">
          <h2>1. Inleiding</h2>
          <p>
            Welkom bij iSystem Academy. Deze Gebruiksvoorwaarden zijn van toepassing op uw toegang tot en gebruik van het 
            leerplatform en educatieve diensten van iSystem Academy (gezamenlijk de "Diensten" genoemd).
          </p>
          <p>
            Door onze Diensten te gebruiken, stemt u in met deze voorwaarden. Als u niet instemt met deze voorwaarden, 
            mag u geen gebruik maken van ons leerplatform.
          </p>
          
          <h2>2. Definities</h2>
          <p>
            In deze Gebruiksvoorwaarden wordt verstaan onder:
          </p>
          <ul>
            <li>"iSystem Academy", "wij", "ons" of "onze": de aanbieder van de educatieve diensten.</li>
            <li>"Leerling", "Cursist", "u" of "uw": elke persoon die toegang heeft tot of gebruik maakt van onze leerplatform.</li>
            <li>"Leermateriaal": alle informatie, cursussen, opdrachten, video's, audio of andere educatieve materialen die via ons platform worden aangeboden.</li>
            <li>"Intellectuele Eigendomsrechten": alle rechten op intellectuele eigendommen, waaronder maar niet beperkt tot auteursrechten op leermateriaal, handelsmerken, en educatieve content.</li>
          </ul>
          
          <h2>3. Leeraccount en registratie</h2>
          <p>
            Voor toegang tot ons leerplatform dient u een account aan te maken. U bent verantwoordelijk voor:
          </p>
          <ul>
            <li>Het verstrekken van nauwkeurige en volledige informatie tijdens de registratie.</li>
            <li>Het bijwerken van uw accountgegevens wanneer deze veranderen.</li>
            <li>Het handhaven van de vertrouwelijkheid van uw wachtwoord.</li>
            <li>Alle leeractiviteiten die plaatsvinden onder uw account.</li>
          </ul>
          
          <h2>4. Toegang en gebruik van het leerplatform</h2>
          <p>
            iSystem Academy verleent u een beperkte, herroepbare, niet-exclusieve, niet-overdraagbare licentie om 
            ons leerplatform te gebruiken voor educatieve doeleinden in overeenstemming met deze voorwaarden.
          </p>
          <p>
            U mag niet:
          </p>
          <ul>
            <li>Het leerplatform gebruiken op een wijze die in strijd is met toepasselijke wet- en regelgeving.</li>
            <li>Het leermateriaal gebruiken voor commerciële doeleinden zonder onze uitdrukkelijke schriftelijke toestemming.</li>
            <li>Leermateriaal delen met derden die geen toegang hebben tot het platform.</li>
            <li>Proberen beveiligingsmaatregelen te omzeilen of het platform te hacken.</li>
          </ul>
          
          <h2>5. Leermateriaal en intellectuele eigendom</h2>
          <p>
            Alle rechten, eigendomsrechten en belangen in het leerplatform, inclusief cursussen, opdrachten en alle educatieve content, 
            zijn en blijven het exclusieve eigendom van iSystem Academy en haar licentiegevers.
          </p>
          <p>
            Het leermateriaal mag uitsluitend worden gebruikt voor persoonlijke studiedoeleinden. Het is niet toegestaan om:
          </p>
          <ul>
            <li>Leermateriaal te kopiëren, distribueren of publiekelijk te vertonen zonder toestemming.</li>
            <li>Leermateriaal te wijzigen of afgeleide werken te creëren.</li>
            <li>Leermateriaal te gebruiken voor commerciële doeleinden.</li>
          </ul>
          
          <h2>6. Betalingen en vergoedingen</h2>
          <p>
            Voor sommige cursussen en leermaterialen kan een vergoeding worden gevraagd. In dat geval:
          </p>
          <ul>
            <li>Worden de kosten duidelijk vermeld voordat u zich inschrijft.</li>
            <li>Zijn betalingen definitief en worden geen restituties verleend, tenzij anders vermeld bij de specifieke cursus.</li>
            <li>Behoudt iSystem Academy zich het recht voor om prijzen te wijzigen, met kennisgeving vooraf aan bestaande cursisten.</li>
          </ul>
          
          <h2>7. Gedragsregels voor leerlingen</h2>
          <p>
            Als leerling stemt u ermee in om:
          </p>
          <ul>
            <li>Het leerplatform niet te gebruiken om ongepaste of aanstootgevende inhoud te plaatsen.</li>
            <li>De leerervaring van anderen niet te verstoren.</li>
            <li>Geen valse identiteit aan te nemen of anderen verkeerd voor te stellen.</li>
            <li>Geen geautomatiseerde processen te gebruiken om met het leerplatform te interageren.</li>
          </ul>
          
          <h2>8. Privacybeleid</h2>
          <p>
            Ons privacybeleid beschrijft hoe wij omgaan met uw persoonlijke gegevens wanneer u gebruik maakt van ons leerplatform. 
            Door ons platform te gebruiken, stemt u in met de verzameling en het gebruik van informatie zoals beschreven in ons 
            <Link href="/legal/privacy" className="text-blue-600 hover:underline"> Privacybeleid</Link>.
          </p>
          
          <h2>9. Beëindiging van toegang</h2>
          <p>
            Wij behouden ons het recht voor om uw toegang tot het leerplatform te beëindigen of op te schorten zonder voorafgaande kennisgeving 
            indien u deze voorwaarden schendt of om andere redenen die wij redelijk achten.
          </p>
          
          <h2>10. Aansprakelijkheid</h2>
          <p>
            Het leerplatform en de educatieve diensten worden aangeboden "zoals ze zijn", zonder enige garantie, expliciet of impliciet. 
            Wij streven naar nauwkeurige en actuele leermaterialen, maar kunnen de volledigheid of geschiktheid voor specifieke doeleinden niet garanderen.
          </p>
          
          <h2>11. Toepasselijk recht</h2>
          <p>
            Deze voorwaarden worden beheerst door Nederlands recht. Eventuele geschillen zullen worden voorgelegd aan de bevoegde rechter in Nederland.
          </p>
          
          <h2>12. Contact</h2>
          <p>
            Als u vragen heeft over deze Gebruiksvoorwaarden, kunt u contact met ons opnemen via:
          </p>
          <p>
            E-mail: academy-legal@isystem.ai<br />
            Adres: Breda, Nederland
          </p>
          
          <div className="mt-8">
            <Link href="/en" className="text-blue-600 hover:underline">
              Terug naar Academy home
            </Link> | <Link href="/legal/privacy" className="text-blue-600 hover:underline">
              Privacybeleid
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}