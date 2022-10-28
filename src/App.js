import './App.css';
import { PeliculasBody } from './components/PeliculasBody';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


function App() {
  return (
    <div>
      <Header></Header>
      <PeliculasBody />
      <Footer></Footer>
    </div>

  );
}

export default App;
