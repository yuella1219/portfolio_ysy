import logo from './logo.svg';
import './css/App.css';
import 'aos/dist/aos.css'; 
import {Header, SectionMain, SectionIntroduce, SectionCareer, SectionSkill, SectionProject, SectionToy, SectionEtc, Footer} from './components';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <SectionMain />
        <SectionIntroduce />
        <SectionCareer />
        <SectionSkill />
        <SectionProject />
        <SectionToy />
        <SectionEtc />
      </div>
      <Footer />
    </>
  );
}

export default App;
