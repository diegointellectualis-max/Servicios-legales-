import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Stats from './components/Stats';
import MissionVision from './components/MissionVision';
import News from './components/News';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import VoiceAgent from './components/VoiceAgent';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Stats />
        <MissionVision />
        <News />
        <ContactForm />
      </main>
      <Footer />
      
      {/* Floating Interactive Elements */}
      <VoiceAgent />
      <ChatAssistant />
    </div>
  );
};

export default App;