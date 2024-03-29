//styles
// import './dist/css/main.css'
import './styles/main.scss'
import "animate.css/animate.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Hero from './component/Hero/Hero';
import About from './component/About/About';
import ScrollTop from './component/ScrollTop/ScrollTop';
import Nav from './component/Nav/Nav'
import Resume from './component/Resume/Resume';
import Project from './component/Project/Project';
import Footer from './component/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/> 
      <About/>
      <Resume/>
      <Project/>
      <ScrollTop/>
      <Footer/>
    </div>
  );
}

export default App;
