import React from 'react';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';
import Link from 'next/link';
import { Metadata } from 'next';
import { Container } from '@/components/ui/container';

type PrivacyPageProps = {
  params: { lang: string };
};

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  // Properly await params before destructuring in Next.js
  const awaitedParams = await params;
  const { lang } = awaitedParams;
  
  return {
    title: 'Privacybeleid - iSystem.ai',
    description: 'Informatie over hoe iSystem.ai uw persoonsgegevens verzamelt, gebruikt en beschermt.',
  };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  // Properly await params in the component
  const awaitedParams = await params;
  const { lang } = awaitedParams;
  
  const currentDate = new Date();
  const formattedDate = format(currentDate, "d MMMM yyyy", { locale: nl });
  
  return (
    <main className="py-12">
      <Container className="max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Privacybeleid</h1>
        <div className="text-sm mb-8">
          <p>Laatst bijgewerkt: {formattedDate}</p>
        </div>
        
        <section className="prose max-w-none">
          <h2>1. Inleiding</h2>
          <p>
            Bij iSystem.ai vinden we uw privacy belangrijk. Dit privacybeleid legt uit hoe wij uw persoonsgegevens 
            verzamelen, gebruiken, delen en beschermen wanneer u onze website bezoekt of gebruik maakt van onze 
            diensten.
          </p>
          
          <h2>2. Gegevensverzameling</h2>
          <p>
            Wij verzamelen bepaalde persoonsgegevens wanneer u:
          </p>
          <ul>
            <li>Onze website bezoekt</li>
            <li>Een account aanmaakt</li>
            <li>Zich inschrijft voor een cursus</li>
            <li>Contact met ons opneemt</li>
            <li>Deelneemt aan onze enquêtes of onderzoeken</li>
          </ul>
          
          <h2>3. Soorten gegevens</h2>
          <p>
            De persoonsgegevens die wij kunnen verzamelen omvatten:
          </p>
          <ul>
            <li>Naam en contactgegevens</li>
            <li>Inloggegevens</li>
            <li>Gebruiksgegevens en interacties met onze diensten</li>
            <li>Apparaat- en browserinformatie</li>
            <li>Locatiegegevens (indien toegestaan)</li>
          </ul>
          
          <h2>4. Gebruik van gegevens</h2>
          <p>
            Wij gebruiken uw persoonsgegevens voor:
          </p>
          <ul>
            <li>Het leveren en verbeteren van onze diensten</li>
            <li>Communicatie met u over uw account of onze diensten</li>
            <li>Personalisatie van uw ervaring</li>
            <li>Analyse en verbetering van onze website en diensten</li>
            <li>Naleving van wettelijke verplichtingen</li>
          </ul>
          
          <h2>5. Delen van gegevens</h2>
          <p>
            Wij delen uw persoonsgegevens alleen met:
          </p>
          <ul>
            <li>Dienstverleners die ons helpen bij het leveren van onze diensten</li>
            <li>Autoriteiten wanneer wettelijk vereist</li>
            <li>Zakelijke partners met uw toestemming</li>
          </ul>
          
          <h2>6. Beveiliging</h2>
          <p>
            Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen 
            onbevoegde toegang, verlies of misbruik.
          </p>
          
          <h2>7. Uw rechten</h2>
          <p>
            U hebt het recht om:
          </p>
          <ul>
            <li>Toegang te krijgen tot uw persoonsgegevens</li>
            <li>Onjuiste gegevens te corrigeren</li>
            <li>Verwijdering van uw gegevens te verzoeken</li>
            <li>Bezwaar te maken tegen bepaalde verwerkingen</li>
            <li>Uw gegevens in een gestructureerd formaat te ontvangen</li>
          </ul>
          
          <h2>8. Cookies</h2>
          <p>
            Wij gebruiken cookies en soortgelijke technologieën om uw ervaring te verbeteren en ons te helpen 
            onze diensten te optimaliseren. U kunt uw cookievoorkeuren aanpassen via uw browserinstellingen.
          </p>
          
          <h2>9. Wijzigingen in ons privacybeleid</h2>
          <p>
            Wij kunnen dit privacybeleid van tijd tot tijd bijwerken. De meest recente versie is altijd beschikbaar 
            op onze website.
          </p>
          
          <h2>10. Contact</h2>
          <p>
            Als u vragen hebt over ons privacybeleid of de manier waarop wij uw persoonsgegevens verwerken, kunt u contact met ons opnemen via:
          </p>
          <p>
            E-mail: privacy@isystem.ai<br />
            Adres: Breda, Nederland
          </p>
          
          <div className="mt-8">
            <Link href={`/${lang}`} className="text-blue-600 hover:underline">
              Terug naar home
            </Link> | <Link href={`/${lang}/terms`} className="text-blue-600 hover:underline">
              Gebruiksvoorwaarden
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}