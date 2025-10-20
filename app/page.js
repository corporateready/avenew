'use client'
import Hero from './components/hero';
import Letter from './components/letter';
import Footer from './components/shared/footer';
import Header from './components/shared/header';

export default function Home() {
  return (
    <div className="w-full h-full relative">
      <Header />
      <Hero />
      <Letter />
      <Footer />
    </div>
  );
}