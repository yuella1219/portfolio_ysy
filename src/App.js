import logo from './logo.svg';
import './css/App.css';
import 'aos/dist/aos.css'; 
import {Header, SectionMain, SectionCareer, Footer} from './components';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <SectionMain />
        <SectionCareer />
      </div>
      <Footer />
    </>
  );
}

export default App;
