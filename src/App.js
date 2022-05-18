import './App.css';
import Header from './Header';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import Chart from './Chart';
import Home from './Home';
import CustomNavBar from './CustomNavBar';
import About from './About';
import Scheme from './Scheme';
import Footer from './Footer';


function App() {
  
  return (
    <>
      
    <BrowserRouter>
    <Header></Header>
    <CustomNavBar></CustomNavBar>
       
       <Routes>
        {/* <Route exact path ='/' component={Home}/>
       <Route exact path ="chart" component={Chart}/> */}
       <Route exact path = "/"  element={<Home></Home>}/>
       <Route exact path="/chart" element={<Chart></Chart>}/>
       <Route exact path = "/about"  element={<About></About>}/>
       <Route exact path ="/scheme" element={<Scheme></Scheme>}/>
       
    
       
       </Routes>
      {/* <Footer></Footer> */}
   </BrowserRouter>
   
    </>
    
    
  );
}

export default App;
