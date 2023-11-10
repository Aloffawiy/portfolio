import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Edu from './Edu';
import Work from './Work';
import Notfound from './404';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
<Routes>
  <Route path='/'element={<Home/>} />
  <Route exact path='/about'element={<About/>} />
  <Route exact path='/contact'element={<Contact/>} />
  <Route exact path='/experience'element={<Edu/>} />
  <Route exact path='/work'element={<Work/>} />
  <Route path ='*' element={<Notfound/>} />
</Routes>
 </div>
  
  </Router>
  );
}

export default App;
