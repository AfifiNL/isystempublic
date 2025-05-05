import React from 'react';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';
import Link from 'next/link';
import { Metadata } from 'next';
import { Container } from '@/components/ui/container';

type TermsPageProps = {
  params: { lang: string };
};

export async function generateMetadata({ params }: TermsPageProps): Promise<Metadata> {
  // Properly await params before destructuring in Next.js
  const awaitedParams = await params;
  const { lang } = awaitedParams;
  
  return {
    title: 'Gebruiksvoorwaarden - iSystem.ai',
    description: 'De gebruiksvoorwaarden voor het gebruik van iSystem.ai platform en diensten.',
  };
}

export default async function TermsPage({ params }: TermsPageProps) {
  // Properly await params in the component
  const awaitedParams = await params;
  const { lang } = awaitedParams;
  
  const currentDate = new Date();
  const formattedDate = format(currentDate, "d MMMM yyyy", { locale: nl });
  
  return (
    <main className="py-12">
      <Container className="max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Gebruiksvoorwaarden</h1>
        <div className="text-sm mb-8">
          <p>Laatst bijgewerkt: {formattedDate}</p>
        </div>
        
        <section className="prose max-w-none">
          <h2>1. Inleiding</h2>
          <p>
            Welkom bij iSystem.ai. Deze Gebruiksvoorwaarden zijn van toepassing op uw toegang tot en gebruik van de 
            website, mobiele applicaties en diensten van iSystem.ai (gezamenlijk de "Diensten" genoemd).
          </p>
          <p>
            Door onze Diensten te gebruiken, stemt u in met deze voorwaarden. Als u niet instemt met deze voorwaarden, 
            mag u geen gebruik maken van onze Diensten.
          </p>
          
          <h2>2. Definities</h2>
          <p>
            In deze Gebruiksvoorwaarden wordt verstaan onder:
          </p>
          <ul>
            <li>"iSystem.ai", "wij", "ons" of "onze": de aanbieder van de Diensten.</li>
            <li>"Gebruiker", "u" of "uw": elke persoon die toegang heeft tot of gebruik maakt van onze Diensten.</li>
            <li>"Content": alle informatie, teksten, afbeeldingen, video's, audio of andere materialen die via onze Diensten worden gepubliceerd of gedeeld.</li>
            <li>"Intellectuele Eigendomsrechten": alle rechten op intellectuele eigendommen, waaronder maar niet beperkt tot auteursrechten, handelsmerken, octrooien, databankrechten en bedrijfsgeheimen.</li>
          </ul>
          
          <h2>3. Account en registratie</h2>
          <p>
            Voor sommige van onze Diensten dient u een account aan te maken. U bent verantwoordelijk voor:
          </p>
          <ul>
            <li>Het verstrekken van nauwkeurige en volledige informatie tijdens de registratie.</li>
            <li>Het bijwerken van uw accountgegevens wanneer deze veranderen.</li>
            <li>Het handhaven van de vertrouwelijkheid van uw wachtwoord.</li>
            <li>Alle activiteiten die plaatsvinden onder uw account.</li>
          </ul>
          
          <h2>4. Toegang en gebruik van de Diensten</h2>
          <p>
            iSystem.ai verleent u een beperkte, herroepbare, niet-exclusieve, niet-overdraagbare licentie om 
            onze Diensten te gebruiken voor persoonlijke, niet-commerciële doeleinden in overeenstemming met deze voorwaarden.
          </p>
          <p>
            U mag niet:
          </p>
          <ul>
            <li>De Diensten gebruiken op een wijze die in strijd is met toepasselijke wet- en regelgeving.</li>
            <li>De Diensten gebruiken voor commerciële doeleinden zonder onze uitdrukkelijke schriftelijke toestemming.</li>
            <li>Proberen beveiligingsmaatregelen te omzeilen of de Diensten te hacken.</li>
            <li>De Diensten gebruiken om spam te versturen of kwaadaardige software te verspreiden.</li>
          </ul>
          
          <h2>5. Content en intellectuele eigendom</h2>
          <p>
            Alle rechten, eigendomsrechten en belangen in de Diensten, inclusief de onderliggende technologie en content die door iSystem.ai wordt geleverd, 
            zijn en blijven het exclusieve eigendom van iSystem.ai en haar licentiegevers.
          </p>
          <p>
            Door content te publiceren of te delen via onze Diensten, verleent u ons een wereldwijde, niet-exclusieve, royaltyvrije licentie om 
            deze content te gebruiken, te kopiëren, op te slaan, te wijzigen, door te geven en weer te geven in verband met de Diensten.
          </p>
          
          <h2>6. Gebruikersgedrag</h2>
          <p>
            U stemt ermee in om:
          </p>
          <ul>
            <li>De Diensten niet te gebruiken om inhoud te plaatsen die illegaal, beledigend, bedreigend, lasterlijk, misleidend of discriminerend is.</li>
            <li>Geen inbreuk te maken op de rechten van anderen, inclusief intellectuele eigendomsrechten.</li>
            <li>Geen geautomatiseerde processen of robots te gebruiken om met de Diensten te interageren, tenzij uitdrukkelijk toegestaan.</li>
            <li>Geen virussen of andere schadelijke code te verspreiden.</li>
          </ul>
          
          <h2>7. Privacybeleid</h2>
          <p>
            Ons privacybeleid beschrijft hoe wij omgaan met uw persoonlijke gegevens wanneer u gebruik maakt van onze Diensten. 
            Door onze Diensten te gebruiken, stemt u in met de verzameling en het gebruik van informatie zoals beschreven in ons 
            <Link href={`/${lang}/privacy`} className="text-blue-600 hover:underline"> Privacybeleid</Link>.
          </p>
          
          <h2>8. Beëindiging</h2>
          <p>
            Wij behouden ons het recht voor om uw toegang tot de Diensten te beëindigen of op te schorten zonder voorafgaande kennisgeving 
            indien u deze voorwaarden schendt of om andere redenen die wij redelijk achten.
          </p>
          
          <h2>9. Wijzigingen</h2>
          <p>
            Wij kunnen deze voorwaarden van tijd tot tijd wijzigen. De meest recente versie zal altijd beschikbaar zijn op onze website. 
            Door onze Diensten te blijven gebruiken na wijzigingen, stemt u in met de bijgewerkte voorwaarden.
          </p>
          
          <h2>10. Aansprakelijkheid</h2>
          <p>
            De Diensten worden aangeboden "zoals ze zijn", zonder enige garantie, expliciet of impliciet. 
            Voor zover toegestaan door de wet, zijn wij niet aansprakelijk voor enige directe, indirecte, incidentele, 
            speciale of gevolgschade die voortvloeit uit uw gebruik van of onvermogen om gebruik te maken van de Diensten.
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
            E-mail: legal@isystem.ai<br />
            Adres: Breda, Nederland
          </p>
          
          <div className="mt-8">
            <Link href={`/${lang}`} className="text-blue-600 hover:underline">
              Terug naar home
            </Link> | <Link href={`/${lang}/privacy`} className="text-blue-600 hover:underline">
              Privacybeleid
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}