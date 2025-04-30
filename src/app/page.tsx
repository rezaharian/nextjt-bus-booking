import Navbar from './material/page/Navbar';
import HeroSection from './material/page/HeroSection';
// import CardSection from './material/page/CardSection';
// import MitraSection from './material/page/MitraSection';
import RutePopuler from './material/page/RutePopuler';
import Footer from './material/page/Footer';
import WhyMe from './material/page/WhyMe';
import AboutMe from './material/page/AboutMe';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyMe/>
      <RutePopuler/>
      <AboutMe/>
      {/* <MitraSection/> */}
      {/* <CardSection /> */}
      {/* Footer akan kita buat setelah ini */}
      <Footer/>
    </main>
  );
}
