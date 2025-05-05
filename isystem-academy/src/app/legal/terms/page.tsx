import React from 'react';
import { Metadata } from 'next';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';

export const metadata: Metadata = {
  title: 'Gebruiksvoorwaarden | iSystem Academy',
  description: 'Gebruiksvoorwaarden van iSystem Academy',
};

export default function TermsOfUsePage() {
  // Format the current date in Dutch format
  const currentDate = format(new Date(), 'd MMMM yyyy', { locale: nl });

  return (
    <div className="prose prose-blue max-w-none">
      <h1>Gebruiksvoorwaarden</h1>
      <p className="text-sm text-gray-500">Laatst bijgewerkt: {currentDate}</p>
      
      <h2>1. Acceptatie van voorwaarden</h2>
      <p>
        Door toegang te krijgen tot of gebruik te maken van de iSystem Academy website en diensten, gaat u akkoord met deze Gebruiksvoorwaarden.
        Als u niet akkoord gaat met deze voorwaarden, gebruik dan geen van onze diensten.
      </p>
      
      <h2>2. Diensten</h2>
      <p>
        iSystem Academy biedt educatieve diensten, waaronder maar niet beperkt tot online cursussen, 
        workshops en trainingsmaterialen voor nieuwkomers in Nederland.
      </p>
      
      <h2>3. Gebruikersaccounts</h2>
      <p>
        Voor bepaalde functionaliteiten van onze diensten moet u mogelijk een account aanmaken. 
        U bent verantwoordelijk voor het handhaven van de vertrouwelijkheid van uw accountgegevens 
        en voor alle activiteiten die onder uw account plaatsvinden.
      </p>
      <p>
        U stemt ermee in om:
      </p>
      <ul>
        <li>Nauwkeurige en volledige informatie te verstrekken bij het aanmaken van uw account;</li>
        <li>Uw accountgegevens onmiddellijk bij te werken als er wijzigingen zijn;</li>
        <li>Ons onmiddellijk op de hoogte te stellen van ongeautoriseerd gebruik van uw account.</li>
      </ul>
      
      <h2>4. Intellectueel eigendom</h2>
      <p>
        Alle content op onze website, inclusief maar niet beperkt tot teksten, graphics, logo's, 
        afbeeldingen, cursusmateriaal, video's en software, is eigendom van iSystem Academy of onze 
        licentiegevers en wordt beschermd door Nederlandse en internationale auteursrechten.
      </p>
      <p>
        U mag de content uitsluitend gebruiken voor uw persoonlijke, niet-commerciële 
        educatieve doeleinden. Het is niet toegestaan om de content te reproduceren, 
        distribueren, wijzigen of publiek ten toon te stellen zonder onze uitdrukkelijke 
        schriftelijke toestemming.
      </p>
      
      <h2>5. Gedragsregels</h2>
      <p>
        Bij het gebruik van onze diensten stemt u ermee in geen acties te ondernemen die:
      </p>
      <ul>
        <li>De wet overtreden of illegale activiteiten aanmoedigen;</li>
        <li>Inbreuk maken op intellectuele eigendomsrechten van iSystem Academy of derden;</li>
        <li>Beledigend, intimiderend, bedreigend of discriminerend zijn;</li>
        <li>Andere gebruikers hinderen in hun leerervaring;</li>
        <li>Onze systemen of netwerken verstoren of schade toebrengen.</li>
      </ul>
      
      <h2>6. Betalingen en restitutiebeleid</h2>
      <p>
        Betalingen voor onze cursussen en diensten worden verwerkt via beveiligde betalingsgateways.
        Alle prijzen zijn inclusief btw, tenzij anders vermeld.
      </p>
      <p>
        Ons restitutiebeleid staat restitutie toe binnen 14 dagen na aankoop, mits u nog niet meer dan 25% 
        van de cursuscontent heeft bekeken. Voor meer informatie over restitutie kunt u contact opnemen met onze klantenservice.
      </p>
      
      <h2>7. Aansprakelijkheidsbeperking</h2>
      <p>
        iSystem Academy streeft ernaar nauwkeurige en actuele informatie te verstrekken, maar 
        biedt geen garanties met betrekking tot de volledigheid, nauwkeurigheid of betrouwbaarheid 
        van de content op onze website of in onze cursussen.
      </p>
      <p>
        In geen geval is iSystem Academy aansprakelijk voor enige directe, indirecte, incidentele, 
        bijzondere of gevolgschade die voortvloeit uit of verband houdt met uw gebruik van onze diensten.
      </p>
      
      <h2>8. Wijzigingen in voorwaarden</h2>
      <p>
        We behouden ons het recht voor om deze Gebruiksvoorwaarden op elk moment te wijzigen. 
        Bij materiële wijzigingen zullen we u hiervan op de hoogte stellen door een kennisgeving op onze website te plaatsen.
        Uw voortgezette gebruik van onze diensten na dergelijke wijzigingen betekent dat u akkoord gaat met de bijgewerkte voorwaarden.
      </p>
      
      <h2>9. Toepasselijk recht</h2>
      <p>
        Deze Gebruiksvoorwaarden worden beheerst door Nederlands recht. Eventuele geschillen die voortvloeien uit 
        of verband houden met deze voorwaarden of uw gebruik van onze diensten zullen worden onderworpen aan de 
        exclusieve jurisdictie van de Nederlandse rechtbanken.
      </p>
      
      <h2>10. Contact</h2>
      <p>
        Als u vragen heeft over deze Gebruiksvoorwaarden, neem dan contact met ons op via info@isystem.ai.
      </p>
    </div>
  );
}