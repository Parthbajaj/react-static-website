import './App.css';
import Header from './components/header';
import Zero from './components/Hero';
import Description from './components/Description'
import Description_Section from './components/description_section';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import CTA from './components/cta';
import Testimonials from './components/testimonials';
import Footer from './components/footer';

function App() {
  return (
    <>
         
      <Header />
      <Zero />
      <Description />
      <Description_Section />
      <Skills />
      <Portfolio />
      <CTA />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
