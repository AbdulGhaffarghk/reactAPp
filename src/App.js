
import './styles.css';
import Header from './components/header';
import Footer from './components/footer';
import MoviesGrid from './components/MoviesGrid';


function App() {
  return (
    <div className="App">
      <Header />
      <MoviesGrid />
      <Footer />
    </div>

  );
}

export default App;
