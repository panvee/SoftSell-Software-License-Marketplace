import { HelmetProvider, Helmet } from 'react-helmet-async';
import HeroBanner from './HeroBanner';
import HowItWorks from './Work';
import TrustHighlights from './TrustHighlights';
import ClientFeedback from './ClientFeedback';
import ContactForm from './ContactForm';
import ThemeToggle from './ThemeToggle';
import ChatWidget from './ChatWidget';

export default function HomePage() {
  return (
    <HelmetProvider>
      <div className="font-sans min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <Helmet>
          <title>SoftSell - Sell Your Software Licenses</title>
          <meta name="description" content="Turn your unused software licenses into cash with SoftSell. Safe, fast, and easy license resale platform." />
          <meta name="keywords" content="software license, license resale, software marketplace, license transfer" />
          <link rel="icon" href="/favicon.svg" />
        </Helmet>

        <ThemeToggle />
        <main>
          <HeroBanner />
          <HowItWorks />
          <TrustHighlights />
          <ClientFeedback />
          <ContactForm />
        </main>
        <ChatWidget />
      </div>
    </HelmetProvider>
  );
}