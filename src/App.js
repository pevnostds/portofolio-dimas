import { NavbarComponent, SectionComponent, PendidikanComponent,SkillComponent,ContactComponent } from './components';
import './App.css';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <NavbarComponent />
      <SectionComponent />
      <PendidikanComponent />
      <br />
      <SkillComponent />
      <br />
      <ContactComponent />
    </div>
  );
}

export default App;
