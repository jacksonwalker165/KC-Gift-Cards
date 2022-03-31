import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import CardGrid from './components/CardGrid';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CardGrid />
    </div>
  );
}

export default App;
