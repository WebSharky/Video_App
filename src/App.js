import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { MainPage, About } from './pages'
import { AppNavbar, Footer } from './components';
import { GlobalProvider } from './context/GlobalState';

function App() {



  return (
        <GlobalProvider>
        <BrowserRouter>
            <div className="App section__backgroud">
                <AppNavbar />
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route exact path="/about" element={<About />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
        </GlobalProvider>
      );
    }
    
    export default App;
  
