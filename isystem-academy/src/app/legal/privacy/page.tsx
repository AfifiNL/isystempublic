import React from 'react';
import { Metadata } from 'next';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';

export const metadata: Metadata = {
  title: 'Privacybeleid | iSystem Academy',
  description: 'Privacybeleid van iSystem Academy',
};

export default function PrivacyPolicyPage() {
  // Format the current date in Dutch format
  const currentDate = format(new Date(), 'd MMMM yyyy', { locale: nl });

  return (
    <div className="prose prose-blue max-w-none">
      <h1>Privacybeleid</h1>
      <p className="text-sm text-gray-500">Laatst bijgewerkt: {currentDate}</p>
      
      <h2>1. Inleiding</h2>
      <p>
        Welkom bij het privacybeleid van iSystem Academy. Uw privacy is belangrijk voor ons. 
        Dit privacybeleid legt uit hoe iSystem Academy ("wij", "ons", "onze") uw persoonlijke gegevens verzamelt, 
        gebruikt, deelt en beschermt wanneer u onze website bezoekt of gebruik maakt van onze diensten.
      </p>
      
      <h2>2. Gegevens die we verzamelen</h2>
      <p>We kunnen de volgende soorten persoonlijke gegevens verzamelen:</p>
      <ul>
        <li><strong>Contactgegevens:</strong> Zoals uw naam, e-mailadres en telefoonnummer.</li>
        <li><strong>Profielgegevens:</strong> Zoals uw taalvoorkeuren en opleidingsniveau.</li>
        <li><strong>Gebruiksgegevens:</strong> Informatie over hoe u onze website gebruikt, inclusief klikgedrag en interactie met onze diensten.</li>
        <li><strong>Technische gegevens:</strong> IP-adres, browsertype, apparaattype en besturingssysteem.</li>
      </ul>
      
      <h2>3. Hoe we uw gegevens gebruiken</h2>
      <p>We gebruiken uw persoonlijke gegevens voor de volgende doeleinden:</p>
      <ul>
        <li>Om u de diensten te leveren die u hebt aangevraagd</li>
        <li>Om met u te communiceren over uw inschrijving, cursussen of andere diensten</li>
        <li>Om onze website en diensten te verbeteren</li>
        <li>Om fraude te voorkomen en onze gebruikers te beschermen</li>
        <li>Om te voldoen aan wettelijke verplichtingen</li>
      </ul>
      
      <h2>4. Delen van gegevens</h2>
      <p>
        We delen uw persoonlijke gegevens alleen in specifieke omstandigheden:
      </p>
      <ul>
        <li>Met dienstverleners die namens ons bepaalde functies uitvoeren (zoals betalingsverwerking)</li>
        <li>Wanneer dit wettelijk vereist is</li>
        <li>Om onze rechten, eigendommen of veiligheid te beschermen</li>
      </ul>
      <p>
        We verkopen uw persoonlijke gegevens niet aan derden.
      </p>
      
      <h2>5. Gegevensbeveiliging</h2>
      <p>
        We nemen de beveiliging van uw gegevens serieus en hebben passende maatregelen genomen om 
        uw persoonlijke gegevens te beschermen tegen ongeautoriseerde toegang, wijziging, openbaarmaking of vernietiging.
      </p>
      
      <h2>6. Uw rechten</h2>
      <p>Onder de AVG (Algemene Verordening Gegevensbescherming) heeft u verschillende rechten met betrekking tot uw persoonlijke gegevens, waaronder:</p>
      <ul>
        <li>Het recht om toegang te krijgen tot uw persoonlijke gegevens</li>
        <li>Het recht om onjuiste gegevens te corrigeren</li>
        <li>Het recht om uw gegevens te laten verwijderen</li>
        <li>Het recht om bezwaar te maken tegen verwerking</li>
        <li>Het recht op dataportabiliteit</li>
      </ul>
      
      <h2>7. Cookies</h2>
      <p>
        We gebruiken cookies en vergelijkbare trackingtechnologieën om uw ervaring op onze website te verbeteren. 
        U kunt uw browserinstellingen aanpassen om cookies te weigeren, maar dit kan sommige functies van onze website beïnvloeden.
      </p>
      
      <h2>8. Contactgegevens</h2>
      <p>
        Als u vragen heeft over dit privacybeleid of hoe we met uw persoonlijke gegevens omgaan, 
        kunt u contact met ons opnemen via privacy@isystem.ai.
      </p>
      
      <h2>9. Wijzigingen in dit beleid</h2>
      <p>
        We kunnen dit privacybeleid van tijd tot tijd bijwerken. We zullen u op de hoogte stellen van 
        belangrijke wijzigingen door een melding op onze website te plaatsen.
      </p>
    </div>
  );
}