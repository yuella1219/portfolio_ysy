import logo from './logo.svg';
import './css/App.css';
import 'aos/dist/aos.css'; 
import {Header, SectionMain, SectionCareer, SectionSkill, SectionProject, SectionToy, Footer} from './components';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <SectionMain />
        <SectionCareer />
        <SectionSkill />
        <SectionProject />
        <SectionToy />
      </div>
      <Footer />
    </>
  );
}

export default App;
