//styles
// import './dist/css/main.css'
import './Styles/main.scss'
import "animate.css/animate.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Hero from './component/Hero/Hero';
import About from './component/About/About';
import ScrollTop from './component/ScrollTop/ScrollTop';
import Nav from './component/Nav/Nav'
import Resume from './component/Resume/Resume';
import Project from './component/Project/Project';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/> 
      <About/>
      <Resume/>
      <Project/>
      <ScrollTop/>
    </div>
  );
}

export default App;
