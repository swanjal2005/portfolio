import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Technology from './component/Technology';
import Experience from './component/Experience';
import Getintouch from './component/Getintouch';
function App() {
return (
    <div className="App">
         <Navbar/>
         
         <About/>
         <Home/>
         <Technology/>
         <Experience/>
         <Getintouch/>

      
      
      
    </div>
  );

    
  }
  


export default App;
